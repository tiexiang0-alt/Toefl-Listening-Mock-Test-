import React, { useState, useRef, useEffect } from 'react';
import { generateSpeech, base64ToUint8Array, pcmToAudioBuffer } from '../services/geminiService';

interface AudioPlayerProps {
  text: string;
  speakerType: string;
  onAudioEnd: () => void;
  autoPlay?: boolean;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ text, speakerType, onAudioEnd, autoPlay = false }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);

  useEffect(() => {
    // Reset state when text changes (new segment)
    setHasPlayed(false);
    setIsPlaying(false);
    if (sourceNodeRef.current) {
      try {
        sourceNodeRef.current.stop();
      } catch (e) {
        // ignore if already stopped
      }
    }
  }, [text]);

  const handlePlay = async () => {
    if (isPlaying) return;

    setIsLoading(true);
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }

      // Resume context if suspended (browser policy)
      if (audioContextRef.current.state === 'suspended') {
        await audioContextRef.current.resume();
      }

      const base64Audio = await generateSpeech(text, speakerType);
      
      // Decode raw PCM data manually
      const audioBytes = base64ToUint8Array(base64Audio);
      // Gemini 2.5 TTS default is 24000Hz. Creating buffer at this rate lets WebAudio resample automatically if needed.
      const audioBuffer = pcmToAudioBuffer(audioBytes, audioContextRef.current, 24000);
      
      const source = audioContextRef.current.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContextRef.current.destination);
      
      source.onended = () => {
        setIsPlaying(false);
        setHasPlayed(true);
        onAudioEnd();
      };

      sourceNodeRef.current = source;
      source.start(0);
      setIsPlaying(true);
    } catch (error) {
      console.error("Failed to play audio", error);
      alert("Error generating audio. Please check your API Key or try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-slate-100 rounded-xl border border-slate-200 mb-6">
      <div className="mb-4 text-slate-600 font-medium">
        {isPlaying ? "Listening..." : hasPlayed ? "Audio Completed" : "Click to Listen"}
      </div>
      
      <button
        onClick={handlePlay}
        disabled={isPlaying || isLoading}
        className={`
          relative group flex items-center justify-center w-16 h-16 rounded-full 
          transition-all duration-300 shadow-lg
          ${isPlaying 
            ? 'bg-blue-100 text-blue-500 animate-pulse ring-4 ring-blue-200' 
            : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 hover:shadow-xl'
          }
          ${isLoading ? 'opacity-70 cursor-wait' : ''}
          ${hasPlayed && !isPlaying ? 'bg-slate-200 text-slate-500 ring-0' : ''}
        `}
      >
        {isLoading ? (
          <svg className="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : isPlaying ? (
           // Audio Wave Icon
           <div className="flex gap-1 h-6 items-center">
             <div className="w-1 bg-blue-500 h-2 animate-[bounce_1s_infinite]"></div>
             <div className="w-1 bg-blue-500 h-4 animate-[bounce_1s_infinite_0.1s]"></div>
             <div className="w-1 bg-blue-500 h-6 animate-[bounce_1s_infinite_0.2s]"></div>
             <div className="w-1 bg-blue-500 h-4 animate-[bounce_1s_infinite_0.1s]"></div>
             <div className="w-1 bg-blue-500 h-2 animate-[bounce_1s_infinite]"></div>
           </div>
        ) : (
          // Play Icon
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ml-1">
            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
          </svg>
        )}
      </button>

      {hasPlayed && !isPlaying && (
        <button onClick={handlePlay} className="mt-4 text-sm text-blue-600 hover:text-blue-800 underline">
          Replay Audio
        </button>
      )}
    </div>
  );
};

export default AudioPlayer;