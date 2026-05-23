import type { SubjectCode } from "@/types/learning";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

interface SubjectStore {
  selectedSubject: SubjectCode | null;
  isHydrated: boolean;
  setSelectedSubject: (subject: SubjectCode) => Promise<void>;
  clearSelectedSubject: () => Promise<void>;
  initializeFromStorage: () => Promise<void>;
}

const STORAGE_KEY = "selected_subject";

export const useSubjectStore = create<SubjectStore>((set) => ({
  selectedSubject: null,
  isHydrated: false,

  setSelectedSubject: async (subject: SubjectCode) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, subject);
      set({ selectedSubject: subject });
    } catch (error) {
      console.error("Failed to save selected subject:", error);
    }
  },

  clearSelectedSubject: async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      set({ selectedSubject: null });
    } catch (error) {
      console.error("Failed to clear selected subject:", error);
    }
  },

  initializeFromStorage: async () => {
    try {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      // Validate that saved value is a valid SubjectCode
      const subject = saved && ['phy', 'chem', 'math', 'bio'].includes(saved) 
        ? (saved as SubjectCode) 
        : null;
      set({ selectedSubject: subject, isHydrated: true });
    } catch (error) {
      console.error("Failed to initialize subject from storage:", error);
      set({ isHydrated: true });
    }
  },
}));