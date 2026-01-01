export interface Option {
  label: string; // "A", "B", etc.
  text: string;
}

export interface Question {
  id: number;
  questionText?: string; // Sometimes the question is spoken, not written, but here we provide text for the UI
  options: Option[];
  correctAnswerIndex: number; // 0-3
  explanation: string;
}

export interface TestSegment {
  id: string;
  title: string;
  type: 'intro' | 'discrete' | 'conversation' | 'announcement' | 'lecture';
  transcriptText: string;
  speakerType: 'male' | 'female' | 'duo' | 'lecturer'; 
  questions: Question[];
  imageUrl?: string; // For visual context
}

export interface TestState {
  currentSegmentIndex: number;
  answers: Record<number, number>; // questionId -> selectedOptionIndex
  isCompleted: boolean;
  score: number;
}