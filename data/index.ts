import { BIO_CHAPTERS } from "./biology/chapters";
import { CHEM_CHAPTERS } from "./chemistry/chapters";
import { MATH_CHAPTERS } from "./maths/chapters";
import { PHY_CHAPTERS } from "./physics/chapters";

import { BIO_UNITS } from "./biology/units";
import { CHEM_UNITS } from "./chemistry/units";
import { MATH_UNITS } from "./maths/units";
import { PHY_UNITS } from "./physics/units";

import { BIO_LESSONS } from "./biology/lessons";
import { CHEM_LESSONS } from "./chemistry/lessons";
import { MATH_LESSONS } from "./maths/lessons";
import { PHY_LESSONS } from "./physics/lessons";


// 🔥 Combined exports

export const CHAPTERS = [
  ...PHY_CHAPTERS,
  ...CHEM_CHAPTERS,
  ...BIO_CHAPTERS,
  ...MATH_CHAPTERS,
];

export const UNITS = [
  ...PHY_UNITS,
  ...CHEM_UNITS,
  ...BIO_UNITS,
  ...MATH_UNITS,
];

export const LESSONS = [
  ...PHY_LESSONS,
  ...CHEM_LESSONS,
  ...BIO_LESSONS,
  ...MATH_LESSONS,
];