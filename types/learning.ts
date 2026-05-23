export type SubjectCode = "phy" | "chem" | "math" | "bio";

export interface Subject {
  code: SubjectCode;
  name: string;
  icon: string;
  color: string;
}

export interface Chapter {
  id: string;
  subjectCode: SubjectCode;
  title: string;
  description: string;
  order: number;
  unitIds: string[];
}
export interface Unit {
  id: string;
  chapterId: string;
  title: string;
  description: string;
  order: number;
  lessonIds: string[];
}

export interface Lesson {
  id: string;
  unitId: string;
  title: string;
  description: string;
  icon: string;
  xpReward: number;
  questions: Question[];
}

export interface Question {
  id: string;
  question: string;
  correctAnswer: string;
  options: string[];
  hint?: string;
}

