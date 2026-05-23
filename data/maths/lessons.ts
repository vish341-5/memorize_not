import { Lesson } from '@/types/learning';

export const MATH_LESSONS: Lesson[] = [
    {
  id: "math-lesson-1",
  unitId: "math-unit-1",
  title: "Reflexive Relations",
  description: "Understand reflexive relations with conceptual and tricky MCQs",
  icon: "🔁",
  xpReward: 10,

  questions: [
    {
      id: "math-lesson-1-ques-1",
      question: "A relation R on set A is reflexive if:",
      options: [
        "Every element is related to itself",
        "Some elements are related to each other",
        "No element is related to itself",
        "Only different elements are related"
      ],
      correctAnswer: "Every element is related to itself"
    },

    {
      id: "math-lesson-1-ques-2",
      question: "Which of the following MUST be present in a reflexive relation on A = {1,2,3}?",
      options: [
        "(1,1), (2,2), (3,3)",
        "(1,2), (2,3)",
        "(1,3), (3,1)",
        "Only (1,2)"
      ],
      correctAnswer: "(1,1), (2,2), (3,3)"
    },

    {
      id: "math-lesson-1-ques-3",
      question: "If A has 4 elements, minimum number of ordered pairs in a reflexive relation is:",
      options: ["4", "8", "16", "1"],
      correctAnswer: "4"
    },

    {
      id: "math-lesson-1-ques-4",
      question: "Which of the following is NOT reflexive on A = {1,2}?",
      options: [
        "{(1,1), (2,2)}",
        "{(1,1)}",
        "{(1,1), (2,2), (1,2)}",
        "{(1,1), (2,2), (2,1)}"
      ],
      correctAnswer: "{(1,1)}"
    },

    {
      id: "math-lesson-1-ques-5",
      question: "A reflexive relation guarantees:",
      options: [
        "(a,a) ∈ R for every a in A",
        "(a,b) ∈ R for all a,b",
        "(a,b) implies (b,a)",
        "No ordered pairs are repeated"
      ],
      correctAnswer: "(a,a) ∈ R for every a in A"
    },

    {
      id: "math-lesson-1-ques-6",
      question: "Which relation is always reflexive?",
      options: [
        "Equality relation",
        "Less than relation",
        "Greater than relation",
        "Random relation"
      ],
      correctAnswer: "Equality relation"
    },

    {
      id: "math-lesson-1-ques-7",
      question: "A relation missing even one (a,a) pair is:",
      options: [
        "Not reflexive",
        "Symmetric",
        "Transitive",
        "Equivalence"
      ],
      correctAnswer: "Not reflexive"
    },

    {
      id: "math-lesson-1-ques-8",
      question: "On set A = {1,2,3}, relation R = {(1,1),(2,2),(3,3),(1,2)} is:",
      options: [
        "Reflexive",
        "Not reflexive",
        "Symmetric only",
        "Transitive only"
      ],
      correctAnswer: "Reflexive"
    },

    {
      id: "math-lesson-1-ques-9",
      question: "Which statement is TRUE about reflexive relation?",
      options: [
        "It must include self-pairs for all elements",
        "It must be symmetric",
        "It must be transitive",
        "It must be empty"
      ],
      correctAnswer: "It must include self-pairs for all elements"
    },

    {
      id: "math-lesson-1-ques-10",
      question: "Which of the following best represents a reflexive idea?",
      options: [
        "Every student knows themselves in a list",
        "Students are paired randomly",
        "No one is related to themselves",
        "Only one element is related"
      ],
      correctAnswer: "Every student knows themselves in a list"
    }
  ]
},

{
  id: "math-lesson-2",
  unitId: "math-unit-1",
  title: "Symmetric Relations",
  description: "Understand symmetry in relations with conceptual MCQs",
  icon: "↔️",
  xpReward: 10,

  questions: [
    {
      id: "math-lesson-2-ques-1",
      question: "A relation R is symmetric if:",
      options: [
        "If aRb then bRa",
        "If aRb then aRa",
        "If aRb then bRc",
        "If aRa always holds"
      ],
      correctAnswer: "If aRb then bRa"
    },

    {
      id: "math-lesson-2-ques-2",
      question: "Which of the following is symmetric?",
      options: [
        "{(1,2),(2,1)}",
        "{(1,2)}",
        "{(1,1),(2,3)}",
        "{(2,3)}"
      ],
      correctAnswer: "{(1,2),(2,1)}"
    },

    {
      id: "math-lesson-2-ques-3",
      question: "Which relation is NOT symmetric?",
      options: [
        "{(1,2)}",
        "{(1,2),(2,1)}",
        "{(1,1),(2,2)}",
        "Empty relation"
      ],
      correctAnswer: "{(1,2)}"
    },

    {
      id: "math-lesson-2-ques-4",
      question: "A symmetric relation means:",
      options: [
        "Connection works both ways",
        "Connection works one way only",
        "No elements are related",
        "Only self-pairs exist"
      ],
      correctAnswer: "Connection works both ways"
    },

    {
      id: "math-lesson-2-ques-5",
      question: "If (a,b) ∈ R but (b,a) ∉ R, then R is:",
      options: [
        "Not symmetric",
        "Reflexive",
        "Transitive",
        "Equivalence relation"
      ],
      correctAnswer: "Not symmetric"
    },

    {
      id: "math-lesson-2-ques-6",
      question: "Which of the following is ALWAYS symmetric?",
      options: [
        "Equality relation",
        "Less than relation",
        "Greater than relation",
        "Division relation"
      ],
      correctAnswer: "Equality relation"
    },

    {
      id: "math-lesson-2-ques-7",
      question: "A symmetric relation on A = {1,2} must satisfy:",
      options: [
        "If (1,2) is present then (2,1) must also be present",
        "Only (1,1) must be present",
        "Only (2,2) must be present",
        "No pairs are needed"
      ],
      correctAnswer: "If (1,2) is present then (2,1) must also be present"
    },

    {
      id: "math-lesson-2-ques-8",
      question: "Which of the following is symmetric but NOT reflexive?",
      options: [
        "{(1,2),(2,1)}",
        "{(1,1),(2,2)}",
        "{(1,1),(2,2),(1,2),(2,1)}",
        "Empty relation"
      ],
      correctAnswer: "{(1,2),(2,1)}"
    },

    {
      id: "math-lesson-2-ques-9",
      question: "Empty relation is:",
      options: [
        "Symmetric",
        "Not symmetric",
        "Always reflexive",
        "Always transitive but not symmetric"
      ],
      correctAnswer: "Symmetric"
    },

    {
      id: "math-lesson-2-ques-10",
      question: "Which real-life idea best matches symmetry?",
      options: [
        "Friendship (mutual)",
        "Teacher → Student relation",
        "Parent → Child relation",
        "One-way traffic"
      ],
      correctAnswer: "Friendship (mutual)"
    }
  ]
},

{
  id: "math-lesson-3",
  unitId: "math-unit-1",
  title: "Transitive Relations",
  description: "Understand how relations connect through intermediate elements",
  icon: "🔗",
  xpReward: 10,

  questions: [
    {
      id: "math-lesson-3-ques-1",
      question: "A relation R is transitive if:",
      options: [
        "If aRb and bRc then aRc",
        "If aRb then bRa",
        "If aRa always holds",
        "If aRb never happens"
      ],
      correctAnswer: "If aRb and bRc then aRc"
    },

    {
      id: "math-lesson-3-ques-2",
      question: "Which of the following best shows transitivity?",
      options: [
        "If A > B and B > C then A > C",
        "If A > B then B > A",
        "If A = B only",
        "If A is unrelated to B"
      ],
      correctAnswer: "If A > B and B > C then A > C"
    },

    {
      id: "math-lesson-3-ques-3",
      question: "Which relation is always transitive?",
      options: [
        "Equality (=)",
        "Friendship",
        "Sibling relation",
        "Random pairing"
      ],
      correctAnswer: "Equality (=)"
    },

    {
      id: "math-lesson-3-ques-4",
      question: "If (1,2) and (2,3) are in R, but (1,3) is NOT in R, then R is:",
      options: [
        "Not transitive",
        "Symmetric",
        "Reflexive",
        "Equivalence relation"
      ],
      correctAnswer: "Not transitive"
    },

    {
      id: "math-lesson-3-ques-5",
      question: "Which of the following violates transitivity?",
      options: [
        "(1,2), (2,3) but not (1,3)",
        "(1,2), (2,1)",
        "(1,1), (2,2)",
        "Only self-pairs exist"
      ],
      correctAnswer: "(1,2), (2,3) but not (1,3)"
    },

    {
      id: "math-lesson-3-ques-6",
      question: "Transitivity helps in:",
      options: [
        "Chaining relationships logically",
        "Breaking connections randomly",
        "Removing all pairs",
        "Making relations empty"
      ],
      correctAnswer: "Chaining relationships logically"
    },

    {
      id: "math-lesson-3-ques-7",
      question: "Which of the following is NOT necessarily transitive?",
      options: [
        "Less than (<)",
        "Equality (=)",
        "Greater than (>)",
        "Friendship"
      ],
      correctAnswer: "Friendship"
    },

    {
      id: "math-lesson-3-ques-8",
      question: "A relation is transitive if it allows:",
      options: [
        "Indirect connection between elements",
        "Only self-loops",
        "Only symmetry",
        "No connections at all"
      ],
      correctAnswer: "Indirect connection between elements"
    },

    {
      id: "math-lesson-3-ques-9",
      question: "If R = {(1,2),(2,3),(1,3),(3,4)}, then R is:",
      options: [
        "Transitive (for given pairs)",
        "Not transitive",
        "Symmetric",
        "Reflexive"
      ],
      correctAnswer: "Transitive (for given pairs)"
    },

    {
      id: "math-lesson-3-ques-10",
      question: "Which real-life example best shows transitivity?",
      options: [
        "If A is taller than B and B is taller than C, then A is taller than C",
        "Two friends like each other",
        "A person knows themselves",
        "Random people meeting"
      ],
      correctAnswer: "If A is taller than B and B is taller than C, then A is taller than C"
    }
  ]
},

{
  id: "math-lesson-4",
  unitId: "math-unit-1",
  title: "Equivalence Relations",
  description: "Combine reflexive, symmetric and transitive properties",
  icon: "⚖️",
  xpReward: 10,

  questions: [
    {
      id: "math-lesson-4-ques-1",
      question: "An equivalence relation must be:",
      options: [
        "Reflexive, symmetric, and transitive",
        "Only reflexive",
        "Only symmetric",
        "Only transitive"
      ],
      correctAnswer: "Reflexive, symmetric, and transitive"
    },

    {
      id: "math-lesson-4-ques-2",
      question: "Which of the following is an equivalence relation?",
      options: [
        "Equality (=)",
        "Less than (<)",
        "Greater than (>)",
        "Divides relation only"
      ],
      correctAnswer: "Equality (=)"
    },

    {
      id: "math-lesson-4-ques-3",
      question: "Equivalence relations divide a set into:",
      options: [
        "Equivalence classes",
        "Random subsets",
        "Ordered pairs",
        "Empty sets"
      ],
      correctAnswer: "Equivalence classes"
    },

    {
      id: "math-lesson-4-ques-4",
      question: "Which property is NOT required for equivalence relation?",
      options: [
        "Commutativity",
        "Reflexivity",
        "Symmetry",
        "Transitivity"
      ],
      correctAnswer: "Commutativity"
    },

    {
      id: "math-lesson-4-ques-5",
      question: "If a relation is not reflexive, it:",
      options: [
        "Cannot be an equivalence relation",
        "Must be symmetric",
        "Must be transitive",
        "Can still be equivalence"
      ],
      correctAnswer: "Cannot be an equivalence relation"
    },
    {
      id: "math-lesson-4-ques-6",
      question: "Which combination is sufficient for equivalence relation?",
      options: [
        "All three properties",
        "Only symmetry and transitivity",
        "Only reflexivity and symmetry",
        "Only transitivity"
      ],
      correctAnswer: "All three properties"
    },

    {
      id: "math-lesson-4-ques-7",
      question: "Which of the following is NOT an equivalence relation?",
      options: [
        "Less than (<)",
        "Equality (=)",
        "Congruence modulo n",
        "Identity relation"
      ],
      correctAnswer: "Less than (<)"
    },

    {
      id: "math-lesson-4-ques-8",
      question: "Equivalence classes contain:",
      options: [
        "Elements related to each other",
        "Random elements",
        "Only one element always",
        "No elements"
      ],
      correctAnswer: "Elements related to each other"
    },

    {
      id: "math-lesson-4-ques-9",
      question: "If R is equivalence relation, then every element belongs to:",
      options: [
        "Exactly one equivalence class",
        "Multiple random classes",
        "No class",
        "Infinite unrelated sets"
      ],
      correctAnswer: "Exactly one equivalence class"
    },

    {
      id: "math-lesson-4-ques-10",
      question: "Which real-life example best represents equivalence relation?",
      options: [
        "People grouped by same birth month",
        "One-way traffic",
        "Parent-child relation",
        "Height comparison (<)"
      ],
      correctAnswer: "People grouped by same birth month"
    }
  ]
},

{
  id: "math-quiz-1",
  unitId: "math-unit-1",
  title: "Final Quiz: Relations",
  description: "Mixed assessment of all relation properties",
  icon: "🏆",
  xpReward: 20,

  questions: [
    {
      id: "math-quiz-1-ques-1",
      question: "A relation is reflexive if:",
      options: [
        "Every element is related to itself",
        "Some elements are related",
        "No elements are related",
        "All elements are different"
      ],
      correctAnswer: "Every element is related to itself"
    },

    {
      id: "math-quiz-1-ques-2",
      question: "A symmetric relation requires:",
      options: [
        "If aRb then bRa",
        "If aRb then aRa",
        "If aRb then bRc",
        "Only self-pairs"
      ],
      correctAnswer: "If aRb then bRa"
    },

    {
      id: "math-quiz-1-ques-3",
      question: "Transitive relation means:",
      options: [
        "aRb and bRc implies aRc",
        "aRb implies bRa",
        "aRa always true",
        "No relation exists"
      ],
      correctAnswer: "aRb and bRc implies aRc"
    },

    {
      id: "math-quiz-1-ques-4",
      question: "Equality relation is:",
      options: [
        "Equivalence relation",
        "Only symmetric",
        "Only reflexive",
        "Only transitive"
      ],
      correctAnswer: "Equivalence relation"
    },

    {
      id: "math-quiz-1-ques-5",
      question: "Which is NOT required for equivalence relation?",
      options: [
        "Commutativity",
        "Reflexivity",
        "Symmetry",
        "Transitivity"
      ],
      correctAnswer: "Commutativity"
    },

    {
      id: "math-quiz-1-ques-6",
      question: "If (1,2) ∈ R but (2,1) ∉ R, then R is:",
      options: [
        "Not symmetric",
        "Reflexive",
        "Transitive",
        "Equivalence"
      ],
      correctAnswer: "Not symmetric"
    },

    {
      id: "math-quiz-1-ques-7",
      question: "Which of the following is always reflexive?",
      options: [
        "Equality",
        "Less than",
        "Greater than",
        "Random relation"
      ],
      correctAnswer: "Equality"
    },

    {
      id: "math-quiz-1-ques-8",
      question: "Which relation divides a set into equivalence classes?",
      options: [
        "Equivalence relation",
        "Symmetric only",
        "Transitive only",
        "Random relation"
      ],
      correctAnswer: "Equivalence relation"
    },

    {
      id: "math-quiz-1-ques-9",
      question: "If R is equivalence relation, each element belongs to:",
      options: [
        "Exactly one class",
        "Multiple classes",
        "No class",
        "Infinite classes"
      ],
      correctAnswer: "Exactly one class"
    },

    {
      id: "math-quiz-1-ques-10",
      question: "Which is NOT symmetric?",
      options: [
        "{(1,2)}",
        "{(1,2),(2,1)}",
        "{(1,1),(2,2)}",
        "Empty relation"
      ],
      correctAnswer: "{(1,2)}"
    },

    {
      id: "math-quiz-1-ques-11",
      question: "If (1,2) and (2,3) are in R but (1,3) is missing, R is:",
      options: [
        "Not transitive",
        "Symmetric",
        "Reflexive",
        "Equivalence"
      ],
      correctAnswer: "Not transitive"
    },

    {
      id: "math-quiz-1-ques-12",
      question: "Which real-life situation best shows symmetry?",
      options: [
        "Friendship",
        "Teacher → Student",
        "Parent → Child",
        "One-way road"
      ],
      correctAnswer: "Friendship"
    },

    {
      id: "math-quiz-1-ques-13",
      question: "Which real-life situation best shows transitivity?",
      options: [
        "Height comparison",
        "Friendship",
        "Random pairing",
        "Self relation only"
      ],
      correctAnswer: "Height comparison"
    },

    {
      id: "math-quiz-1-ques-14",
      question: "A reflexive relation must include:",
      options: [
        "(a,a) for all elements",
        "Only some pairs",
        "No pairs",
        "Only cross pairs"
      ],
      correctAnswer: "(a,a) for all elements"
    },

    {
      id: "math-quiz-1-ques-15",
      question: "Which combination guarantees equivalence relation?",
      options: [
        "Reflexive + Symmetric + Transitive",
        "Only Reflexive",
        "Only Symmetric",
        "Only Transitive"
      ],
      correctAnswer: "Reflexive + Symmetric + Transitive"
    }
  ]
}
]