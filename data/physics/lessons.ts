import { Lesson } from '@/types/learning';

export const PHY_LESSONS: Lesson[] = [
    {
    id: 'phy-lesson-1',
    unitId: 'phy-unit-1',
    title: 'Introduction to Electrostatics',
    description: 'Understand the basics of electric charge, friction, and attraction between charged bodies.',
    icon: '⚡',
    xpReward: 10,
    questions: [
  {
    id: "phy-lesson-1-ques-1",

    question:
      "When a glass rod is rubbed with silk, the glass rod becomes:",

    options: [
      "Positively charged",
      "Negatively charged",
      "Neutral",
      "Magnetic"
    ],

    correctAnswer: "Positively charged",

    hint:
      "Electrons move from glass to silk."
  },

  {
    id: "phy-lesson-1-ques-2",

    question:
      "The silk cloth rubbed with a glass rod becomes:",

    options: [
      "Positively charged",
      "Negatively charged",
      "Neutral",
      "Hot"
    ],

    correctAnswer: "Negatively charged"
  },

  {
    id: "phy-lesson-1-ques-3",

    question:
      "When a plastic (ebonite) rod is rubbed with wool, the rod gains:",

    options: [
      "Protons",
      "Neutrons",
      "Electrons",
      "Energy only"
    ],

    correctAnswer: "Electrons"
  },

  {
    id: "phy-lesson-1-ques-4",

    question:
      "A plastic rod rubbed with wool becomes:",

    options: [
      "Positively charged",
      "Negatively charged",
      "Neutral",
      "Uncharged conductor"
    ],

    correctAnswer: "Negatively charged"
  },

  {
    id: "phy-lesson-1-ques-5",

    question:
      "Like charges ______ each other.",

    options: [
      "Attract",
      "Repel",
      "Destroy",
      "Neutralize"
    ],

    correctAnswer: "Repel"
  },

  {
    id: "phy-lesson-1-ques-6",

    question:
      "Unlike charges ______ each other.",

    options: [
      "Repel",
      "Attract",
      "Ignore",
      "Heat"
    ],

    correctAnswer: "Attract"
  },

  {
    id: "phy-lesson-1-ques-7",

    question:
      "Which particle actually moves during charging by friction?",

    options: [
      "Protons",
      "Neutrons",
      "Electrons",
      "Atoms"
    ],

    correctAnswer: "Electrons",

    hint:
      "Only one particle moves easily between materials."
  },

  {
    id: "phy-lesson-1-ques-8",

    question:
      "Two positively charged objects are brought close together. They will:",

    options: [
      "Attract",
      "Repel",
      "Do nothing",
      "Become neutral"
    ],

    correctAnswer: "Repel"
  },

  {
    id: "phy-lesson-1-ques-9",

    question:
      "A neutral object has:",

    options: [
      "Only positive charges",
      "Only negative charges",
      "Equal positive and negative charges",
      "No particles"
    ],

    correctAnswer:
      "Equal positive and negative charges"
  },

  {
    id: "phy-lesson-1-ques-10",

    question:
      "⚡ Which pair of charges will attract each other?",

    options: [
      "Positive & Positive",
      "Negative & Negative",
      "Positive & Negative",
      "Neutral & Neutral"
    ],

    correctAnswer:
      "Positive & Negative"
  }
],
  },


  {
  id: 'phy-lesson-2',

  unitId: 'phy-unit-1',

  title: 'Methods of Charging',

  description:
    'Learn how objects get charged using friction, conduction, and induction.',

  icon: '⚡',

  xpReward: 10,

  questions: [
    {
      id: "phy-lesson-2-ques-1",

      question:
        "A negatively charged rod is brought near a neutral metal sphere WITHOUT touching it. The side nearer to the rod becomes:",

      options: [
        "Positively charged",
        "Negatively charged",
        "Neutral",
        "Magnetic"
      ],

      correctAnswer: "Positively charged",

      hint:
        "Electrons move away from the nearby side."
    },

    {
      id: "phy-lesson-2-ques-2",

      question:
        "During charging by induction, a conductor is grounded while a negative rod is nearby. Electrons will:",

      options: [
        "Flow into the conductor",
        "Flow to the earth",
        "Stop moving",
        "Become protons"
      ],

      correctAnswer: "Flow to the earth"
    },

    {
      id: "phy-lesson-2-ques-3",

      question:
        "After induction and grounding, the earth connection is removed FIRST and then the charged rod is taken away. The conductor will finally be:",

      options: [
        "Negatively charged",
        "Positively charged",
        "Neutral",
        "Magnetic"
      ],

      correctAnswer: "Positively charged"
    },

    {
      id: "phy-lesson-2-ques-4",

      question:
        "A charged balloon sticks to a neutral wall mainly because:",

      options: [
        "The wall becomes magnetic",
        "Of gravitational force",
        "Charges are induced in the wall",
        "The wall is already charged"
      ],

      correctAnswer: "Charges are induced in the wall"
    },

    {
      id: "phy-lesson-2-ques-5",

      question:
        "Which charging method can charge an object WITHOUT any transfer of charge from the charged rod itself?",

      options: [
        "Friction",
        "Conduction",
        "Induction",
        "Rubbing"
      ],

      correctAnswer: "Induction"
    },

    {
      id: "phy-lesson-2-ques-6",

      question:
        "Two identical metal spheres touch each other. One is positively charged and the other is neutral. After separation:",

      options: [
        "Both become neutral",
        "Both become positively charged",
        "Only first remains charged",
        "Second becomes negative"
      ],

      correctAnswer: "Both become positively charged"
    },

    {
      id: "phy-lesson-2-ques-7",

      question:
        "A neutral conductor is attracted towards BOTH positive and negative charged rods because:",

      options: [
        "Neutral bodies always attract",
        "Of induced charge separation",
        "The conductor becomes magnetic",
        "Gravity increases"
      ],

      correctAnswer: "Of induced charge separation"
    },

    {
      id: "phy-lesson-2-ques-8",

      question:
        "If grounding is done AFTER removing the inducing charged rod, the conductor will:",

      options: [
        "Remain neutral",
        "Become highly charged",
        "Become magnetic",
        "Lose all protons"
      ],

      correctAnswer: "Remain neutral",

      hint:
        "The order of steps matters in induction."
    },

    {
      id: "phy-lesson-2-ques-9",

      question:
        "Charging by friction is MOST common between:",

      options: [
        "Two conductors",
        "Two insulators",
        "Two magnets",
        "Two neutral metals"
      ],

      correctAnswer: "Two insulators"
    },

    {
      id: "phy-lesson-2-ques-10",

      question:
        "⚡ A positive rod is brought near a neutral conductor. Which statement is correct?",

      options: [
        "Protons move towards the rod",
        "Electrons move towards the rod",
        "Neutrons move away from the rod",
        "No charge movement occurs"
      ],

      correctAnswer: "Electrons move towards the rod"
    }
  ],
},

  {
  id: 'phy-lesson-3',

  unitId: 'phy-unit-1',

  title: 'Gold Leaf Electroscope',

  description:
    'Understand how charge is detected using a gold leaf electroscope and learn its working principle.',

  icon: '🔬',

  xpReward: 10,

  questions: [
    {
      id: "phy-lesson-3-ques-1",

      question:
        "The main purpose of a gold leaf electroscope is to:",

      options: [
        "Measure temperature",
        "Detect electric charge",
        "Produce electricity",
        "Measure mass"
      ],

      correctAnswer: "Detect electric charge"
    },

    {
      id: "phy-lesson-3-ques-2",

      question:
        "When a charged object is brought near the metal cap of an electroscope, the gold leaves:",

      options: [
        "Collapse",
        "Repel each other",
        "Melt",
        "Become neutral"
      ],

      correctAnswer: "Repel each other"
    },

    {
      id: "phy-lesson-3-ques-3",

      question:
        "Why do the gold leaves diverge in an electroscope?",

      options: [
        "They gain opposite charges",
        "They gain similar charges",
        "Gravity pushes them apart",
        "Air enters the electroscope"
      ],

      correctAnswer: "They gain similar charges"
    },

    {
      id: "phy-lesson-3-ques-4",

      question:
        "Which part of the electroscope is usually touched by the charged object?",

      options: [
        "Gold leaves",
        "Glass case",
        "Metal cap",
        "Base"
      ],

      correctAnswer: "Metal cap"
    },

    {
      id: "phy-lesson-3-ques-5",

      question:
        "If the gold leaves of an electroscope collapse after touching with hand, it is because:",

      options: [
        "Charge flows to earth",
        "Leaves become heavier",
        "Protons escape",
        "The electroscope melts"
      ],

      correctAnswer: "Charge flows to earth"
    },

    {
      id: "phy-lesson-3-ques-6",

      question:
        "A charged rod is brought near a neutral electroscope. The leaves diverge due to:",

      options: [
        "Magnetism",
        "Induction",
        "Heating",
        "Friction"
      ],

      correctAnswer: "Induction"
    },

    {
      id: "phy-lesson-3-ques-7",

      question:
        "Why are thin gold leaves used inside an electroscope?",

      options: [
        "Gold is magnetic",
        "They move easily even with small charge",
        "Gold stores heat",
        "They increase mass"
      ],

      correctAnswer: "They move easily even with small charge"
    },

    {
      id: "phy-lesson-3-ques-8",

      question:
        "If more charge is given to the electroscope, the gold leaves will:",

      options: [
        "Come closer",
        "Diverge more",
        "Become neutral",
        "Stop moving"
      ],

      correctAnswer: "Diverge more"
    },

    {
      id: "phy-lesson-3-ques-9",

      question:
        "An electroscope can help determine:",

      options: [
        "Only presence of charge",
        "Only mass of object",
        "Presence and nature of charge",
        "Only temperature"
      ],

      correctAnswer: "Presence and nature of charge"
    },

    {
      id: "phy-lesson-3-ques-10",

      question:
        "⚡ A positively charged electroscope shows greater leaf divergence when a positive rod is brought near it. This happens because:",

      options: [
        "Like charges increase repulsion",
        "Opposite charges neutralize",
        "Electrons enter the electroscope",
        "The rod becomes neutral"
      ],

      correctAnswer: "Like charges increase repulsion",

      hint:
        "More similar charge means stronger repulsion between leaves."
    }
  ],
},

{
  id: 'phy-lesson-4',

  unitId: 'phy-unit-1',

  title: 'Properties of Electric Charge',

  description:
    'Learn the important properties of electric charge including conservation, quantisation, and additivity.',

  icon: '⚛️',

  xpReward: 10,

  questions: [
    {
      id: "phy-lesson-4-ques-1",

      question:
        "The total electric charge of an isolated system always remains constant. This property is called:",

      options: [
        "Quantisation of charge",
        "Conservation of charge",
        "Induction",
        "Neutralisation"
      ],

      correctAnswer: "Conservation of charge"
    },

    {
      id: "phy-lesson-4-ques-2",

      question:
        "During charging by friction, charge is:",

      options: [
        "Created",
        "Destroyed",
        "Transferred",
        "Converted into mass"
      ],

      correctAnswer: "Transferred"
    },

    {
      id: "phy-lesson-4-ques-3",

      question:
        "The smallest possible free charge that can exist is:",

      options: [
        "1 coulomb",
        "Charge on neutron",
        "Electronic charge (e)",
        "Infinite"
      ],

      correctAnswer: "Electronic charge (e)"
    },

    {
      id: "phy-lesson-4-ques-4",

      question:
        "Quantisation of charge means charge exists in:",

      options: [
        "Any random value",
        "Continuous form",
        "Discrete packets",
        "Magnetic units"
      ],

      correctAnswer: "Discrete packets"
    },

    {
      id: "phy-lesson-4-ques-5",

      question:
        "Which expression correctly represents quantisation of charge?",

      options: [
        "Q = ne",
        "Q = mc²",
        "Q = IR",
        "Q = ma"
      ],

      correctAnswer: "Q = ne"
    },

    {
      id: "phy-lesson-4-ques-6",

      question:
        "In the expression Q = ne, 'n' always represents:",

      options: [
        "A fraction",
        "A whole number",
        "A negative mass",
        "Voltage"
      ],

      correctAnswer: "A whole number"
    },

    {
      id: "phy-lesson-4-ques-7",

      question:
        "The SI unit of electric charge is:",

      options: [
        "Volt",
        "Ampere",
        "Coulomb",
        "Ohm"
      ],

      correctAnswer: "Coulomb"
    },

    {
      id: "phy-lesson-4-ques-8",

      question:
        "Additivity of charges means:",

      options: [
        "Charges disappear on contact",
        "Total charge is the algebraic sum of individual charges",
        "Only positive charges can combine",
        "Charges become neutral automatically"
      ],

      correctAnswer:
        "Total charge is the algebraic sum of individual charges"
    },

    {
      id: "phy-lesson-4-ques-9",

      question:
        "A body has charge +4e. How many electrons are missing from it?",

      options: [
        "2",
        "4",
        "6",
        "8"
      ],

      correctAnswer: "4",

      hint:
        "Positive charge means loss of electrons."
    },

    {
      id: "phy-lesson-4-ques-10",

      question:
        "⚡ Which of the following charges is NOT possible?",

      options: [
        "+2e",
        "-3e",
        "+1.5e",
        "-5e"
      ],

      correctAnswer: "+1.5e",

      hint:
        "Charge must exist in integral multiples of e."
    }
  ],
},

{
  id: 'phy-quiz-1',

  unitId: 'phy-unit-1',

  title: 'Electrostatics Final Challenge',

  description:
    'Test everything you learned about electric charges, methods of charging, electroscope, and properties of charge.',

  icon: '🏆',

  xpReward: 20,

  questions: [
    {
      id: "phy-quiz-1-ques-1",

      question:
        "When a glass rod is rubbed with silk, the glass rod becomes:",

      options: [
        "Positively charged",
        "Negatively charged",
        "Neutral",
        "Magnetic"
      ],

      correctAnswer: "Positively charged"
    },

    {
      id: "phy-quiz-1-ques-2",

      question:
        "Which particle actually moves during charging by friction?",

      options: [
        "Protons",
        "Neutrons",
        "Electrons",
        "Nucleus"
      ],

      correctAnswer: "Electrons"
    },

    {
      id: "phy-quiz-1-ques-3",

      question:
        "Two negatively charged bodies brought close together will:",

      options: [
        "Attract",
        "Repel",
        "Become neutral",
        "Stick permanently"
      ],

      correctAnswer: "Repel"
    },

    {
      id: "phy-quiz-1-ques-4",

      question:
        "Charging without direct contact is called:",

      options: [
        "Friction",
        "Conduction",
        "Induction",
        "Neutralisation"
      ],

      correctAnswer: "Induction"
    },

    {
      id: "phy-quiz-1-ques-5",

      question:
        "During charging by conduction, charge transfer happens through:",

      options: [
        "Light",
        "Direct contact",
        "Gravity",
        "Heating"
      ],

      correctAnswer: "Direct contact"
    },

    {
      id: "phy-quiz-1-ques-6",

      question:
        "A neutral conductor is attracted towards a charged body because of:",

      options: [
        "Magnetism",
        "Induced charge separation",
        "Mass increase",
        "Heating effect"
      ],

      correctAnswer: "Induced charge separation"
    },

    {
      id: "phy-quiz-1-ques-7",

      question:
        "The gold leaves of an electroscope diverge because they acquire:",

      options: [
        "Opposite charges",
        "Similar charges",
        "No charge",
        "Magnetic poles"
      ],

      correctAnswer: "Similar charges"
    },

    {
      id: "phy-quiz-1-ques-8",

      question:
        "Touching a charged electroscope with hand causes the leaves to collapse because:",

      options: [
        "Charge flows to earth",
        "Gold melts",
        "Protons escape",
        "Leaves lose mass"
      ],

      correctAnswer: "Charge flows to earth"
    },

    {
      id: "phy-quiz-1-ques-9",

      question:
        "The SI unit of electric charge is:",

      options: [
        "Volt",
        "Ampere",
        "Coulomb",
        "Ohm"
      ],

      correctAnswer: "Coulomb"
    },

    {
      id: "phy-quiz-1-ques-10",

      question:
        "The property due to which total charge remains constant is called:",

      options: [
        "Induction",
        "Quantisation",
        "Conservation of charge",
        "Additivity"
      ],

      correctAnswer: "Conservation of charge"
    },

    {
      id: "phy-quiz-1-ques-11",

      question:
        "Which expression correctly represents quantisation of charge?",

      options: [
        "Q = ma",
        "Q = IR",
        "Q = ne",
        "Q = mc²"
      ],

      correctAnswer: "Q = ne"
    },

    {
      id: "phy-quiz-1-ques-12",

      question:
        "Which of the following charge values is possible?",

      options: [
        "+2.5e",
        "-1.2e",
        "+4e",
        "+0.7e"
      ],

      correctAnswer: "+4e"
    },

    {
      id: "phy-quiz-1-ques-13",

      question:
        "A positively charged rod is brought near a neutral conductor. Electrons in the conductor move:",

      options: [
        "Towards the rod",
        "Away from the rod",
        "Out of the conductor",
        "Randomly"
      ],

      correctAnswer: "Towards the rod"
    },

    {
      id: "phy-quiz-1-ques-14",

      question:
        "If a body loses electrons, it becomes:",

      options: [
        "Negatively charged",
        "Positively charged",
        "Neutral",
        "Magnetic"
      ],

      correctAnswer: "Positively charged"
    },

    {
      id: "phy-quiz-1-ques-15",

      question:
        "⚡ A positively charged electroscope shows increased leaf divergence when another positive rod is brought near it because:",

      options: [
        "Like charges increase repulsion",
        "Opposite charges attract",
        "Electrons enter the electroscope",
        "The rod becomes neutral"
      ],

      correctAnswer: "Like charges increase repulsion"
    }
  ],
}
]