
// This service now handles Native Browser TTS instead of Gemini API
// We keep the file name to avoid breaking imports in other files if they existed, 
// though we will update AudioPlayer.tsx to use these new functions.

let voicesLoaded = false;
let availableVoices: SpeechSynthesisVoice[] = [];

// Initialize voices
const loadVoices = () => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    availableVoices = window.speechSynthesis.getVoices();
    voicesLoaded = true;
  }
};

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  loadVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}

export const stopNativeTts = () => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};

export const playNativeTts = (
  text: string, 
  speakerType: string, 
  onStart: () => void,
  onEnd: () => void
) => {
  if (!('speechSynthesis' in window)) {
    console.error("TTS not supported");
    onEnd();
    return;
  }

  // Cancel any playing audio
  window.speechSynthesis.cancel();

  // Retry loading voices if empty (Chrome sometimes needs this)
  if (availableVoices.length === 0) {
    availableVoices = window.speechSynthesis.getVoices();
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.9; // Slightly slower for better comprehension in a test setting
  utterance.pitch = 1.0;

  // VOICE SELECTION LOGIC
  // Priority: 
  // 1. "Natural" voices (Edge/Azure)
  // 2. "Google US English"
  // 3. Any "en-US"
  
  // Filter for US English first
  const usVoices = availableVoices.filter(v => v.lang === 'en-US');
  const pool = usVoices.length > 0 ? usVoices : availableVoices;

  let selectedVoice: SpeechSynthesisVoice | undefined;

  // Helper to find voice by keyword
  const findVoice = (keywords: string[]) => {
    return pool.find(v => keywords.some(k => v.name.toLowerCase().includes(k.toLowerCase())));
  };

  if (speakerType === 'female') {
    // Look for Aria (Edge Natural), Zira, Google US English, or just "Female"
    selectedVoice = findVoice(['Aria', 'Natural', 'Zira', 'Google US English', 'female']);
  } else if (speakerType === 'male') {
    // Look for Guy (Edge Natural), David, or "Male"
    selectedVoice = findVoice(['Guy', 'Natural', 'David', 'male']);
  } else if (speakerType === 'lecturer') {
    // Authoritative voice - maybe Roger or Christopher or Guy
    selectedVoice = findVoice(['Guy', 'Christopher', 'Roger', 'Natural', 'male']);
  } else if (speakerType === 'duo') {
    // For Duo, default to a clear Natural voice
    selectedVoice = findVoice(['Aria', 'Natural', 'Google US English']);
  }

  // Fallback
  if (!selectedVoice) {
    selectedVoice = pool[0];
  }

  if (selectedVoice) {
    utterance.voice = selectedVoice;
    // console.log("Using voice:", selectedVoice.name); 
  }

  utterance.onstart = () => {
    onStart();
  };

  utterance.onend = () => {
    onEnd();
  };

  utterance.onerror = (e) => {
    console.error("TTS Error", e);
    onEnd();
  };

  window.speechSynthesis.speak(utterance);
};
