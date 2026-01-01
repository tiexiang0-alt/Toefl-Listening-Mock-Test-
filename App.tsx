import React, { useState, useEffect } from 'react';
import { TEST_DATA } from './constants';
import { TestState } from './types';
import AudioPlayer from './components/AudioPlayer';
import QuestionBlock from './components/QuestionBlock';

// Simple progress bar component
const ProgressBar = ({ current, total }: { current: number, total: number }) => {
  const percentage = Math.min(100, (current / total) * 100);
  return (
    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
      <div 
        className="bg-blue-600 h-full transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default function App() {
  const [testState, setTestState] = useState<TestState>({
    currentSegmentIndex: 0,
    answers: {},
    isCompleted: false,
    score: 0
  });
  
  const [showQuestions, setShowQuestions] = useState(false);
  const [transcriptVisible, setTranscriptVisible] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(true); // Assuming env var is present for demo
  
  const currentSegment = TEST_DATA[testState.currentSegmentIndex];
  const isIntro = currentSegment.type === 'intro';

  // Check if API Key is configured (simulate checking env)
  useEffect(() => {
    // In a real scenario, we might prompt user, but instructions say assume env var.
    if (!process.env.API_KEY) {
      console.warn("API Key missing. Mock mode.");
    }
  }, []);

  const handleAudioEnd = () => {
    if (!showQuestions && !isIntro) {
      setShowQuestions(true);
    }
    if (isIntro) {
        // Automatically move from intro after audio finishes (or allow manual next)
    }
  };

  const handleNext = () => {
    // Validate if current segment questions are answered (optional, skipping for smoother demo)
    
    if (testState.currentSegmentIndex < TEST_DATA.length - 1) {
      setTestState(prev => ({
        ...prev,
        currentSegmentIndex: prev.currentSegmentIndex + 1
      }));
      setShowQuestions(false);
      setTranscriptVisible(false);
      window.scrollTo(0,0);
    } else {
      finishTest();
    }
  };

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    setTestState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: optionIndex
      }
    }));
  };

  const finishTest = () => {
    let score = 0;
    let totalQuestions = 0;

    TEST_DATA.forEach(segment => {
      segment.questions.forEach(q => {
        totalQuestions++;
        if (testState.answers[q.id] === q.correctAnswerIndex) {
          score++;
        }
      });
    });

    setTestState(prev => ({
      ...prev,
      isCompleted: true,
      score: score
    }));
    window.scrollTo(0,0);
  };

  if (testState.isCompleted) {
    return (
      <div className="min-h-screen bg-slate-50 py-10 px-4">
        <div className="max-w-3xl mx-auto">
           <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 text-center mb-8">
             <h1 className="text-3xl font-bold text-slate-800 mb-2">Test Completed</h1>
             <p className="text-slate-500 mb-6">Here is your performance summary</p>
             
             <div className="flex justify-center items-center mb-6">
                <div className="w-40 h-40 rounded-full border-8 border-blue-500 flex items-center justify-center">
                    <span className="text-4xl font-bold text-slate-800">
                        {Math.round((testState.score / 24) * 100)}%
                    </span>
                </div>
             </div>
             
             <p className="text-lg">You answered <strong>{testState.score}</strong> out of <strong>24</strong> questions correctly.</p>
           </div>

           <h2 className="text-2xl font-bold text-slate-800 mb-6">Detailed Review</h2>
           
           {TEST_DATA.filter(s => s.questions.length > 0).map((segment, sIdx) => (
             <div key={sIdx} className="mb-8">
               <h3 className="text-xl font-semibold text-slate-700 mb-4 border-b border-slate-200 pb-2">
                 {segment.title}
               </h3>
               {segment.questions.map((q) => (
                 <QuestionBlock
                   key={q.id}
                   question={q}
                   selectedOptionIndex={testState.answers[q.id]}
                   onSelectOption={() => {}}
                   showResult={true}
                 />
               ))}
             </div>
           ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">T</div>
            <h1 className="font-semibold text-slate-800 hidden sm:block">TOEFL Listening Prep AI</h1>
          </div>
          <div className="flex items-center gap-4 w-1/3">
             <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Progress</span>
             <ProgressBar current={testState.currentSegmentIndex} total={TEST_DATA.length} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-2xl mx-auto w-full px-4 py-8">
        
        {/* Segment Title */}
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
             {currentSegment.type === 'intro' ? 'Start' : currentSegment.type.replace('-', ' ')}
          </span>
          <h2 className="text-2xl font-bold text-slate-800">{currentSegment.title}</h2>
        </div>

        {/* Visual Context (if any) */}
        {currentSegment.imageUrl && (
            <div className="mb-6 rounded-xl overflow-hidden shadow-md border border-slate-200">
                <img src={currentSegment.imageUrl} alt="Topic Context" className="w-full h-48 object-cover" />
            </div>
        )}

        {/* Instructions */}
        {!showQuestions && !isIntro && (
           <p className="text-slate-600 text-center mb-6">
             Click play to listen to the {currentSegment.type}. Questions will appear after the audio finishes.
           </p>
        )}
        
        {/* Audio Player */}
        <AudioPlayer 
          text={currentSegment.transcriptText} 
          speakerType={currentSegment.speakerType}
          onAudioEnd={handleAudioEnd}
        />

        {/* Transcript Toggle (Educational Feature) */}
        <div className="mb-6 text-center">
            <button 
                onClick={() => setTranscriptVisible(!transcriptVisible)}
                className="text-xs text-slate-400 hover:text-blue-500 transition-colors underline"
            >
                {transcriptVisible ? "Hide Transcript" : "Show Transcript (Cheating!)"}
            </button>
            {transcriptVisible && (
                <div className="mt-4 p-4 bg-slate-100 rounded-lg text-sm text-slate-600 text-left leading-relaxed border border-slate-200">
                    <strong>Transcript:</strong><br/>
                    {currentSegment.transcriptText}
                </div>
            )}
        </div>

        {/* Questions Area */}
        { (showQuestions || isIntro) && (
            <div className="animate-fade-in-up">
                {currentSegment.questions.map((q) => (
                    <QuestionBlock 
                        key={q.id}
                        question={q}
                        selectedOptionIndex={testState.answers[q.id]}
                        onSelectOption={handleSelectOption}
                        showResult={false}
                    />
                ))}

                <div className="flex justify-end mt-8">
                    <button
                        onClick={handleNext}
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                        {testState.currentSegmentIndex === TEST_DATA.length - 1 ? "Submit Test" : "Next Section →"}
                    </button>
                </div>
            </div>
        )}

      </main>

      <footer className="bg-slate-50 border-t border-slate-200 py-6 text-center text-slate-400 text-sm">
        <p>© 2026 TST Prep AI Simulator. Unofficial Practice Material.</p>
      </footer>
    </div>
  );
}