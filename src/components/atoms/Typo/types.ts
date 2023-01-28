import fonts from '@src/assets/fonts';

export type TypoKey = keyof typeof typoStyles;

export type TypoStyle = {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
};

export const typoStyles = {
  H1: {
    fontFamily: fonts.BOLD,
    fontSize: 32,
    lineHeight: 48,
  },
  H2: {
    fontFamily: fonts.BOLD,
    fontSize: 24,
    lineHeight: 36,
  },
  H3: {
    fontFamily: fonts.BOLD,
    fontSize: 20,
    lineHeight: 30,
  },
  H4: {
    fontFamily: fonts.BOLD,
    fontSize: 18,
    lineHeight: 26,
  },
  H5: {
    fontFamily: fonts.BOLD,
    fontSize: 16,
    lineHeight: 24,
  },
  H6: {
    fontFamily: fonts.BOLD,
    fontSize: 14,
    lineHeight: 20,
  },
  H7: {
    fontFamily: fonts.BOLD,
    fontSize: 12,
    lineHeight: 18,
  },
  BODY1: {
    fontFamily: fonts.MEDIUM,
    fontSize: 24,
    lineHeight: 36,
  },
  BODY2: {
    fontFamily: fonts.MEDIUM,
    fontSize: 20,
    lineHeight: 30,
  },
  BODY3_M: {
    fontFamily: fonts.MEDIUM,
    fontSize: 18,
    lineHeight: 26,
  },
  BODY3_R: {
    fontFamily: fonts.REGULAR,
    fontSize: 18,
    lineHeight: 26,
  },
  BODY4_M: {
    fontFamily: fonts.MEDIUM,
    fontSize: 16,
    lineHeight: 24,
  },
  BODY4_R: {
    fontFamily: fonts.REGULAR,
    fontSize: 16,
    lineHeight: 24,
  },
  BODY5_M: {
    fontFamily: fonts.MEDIUM,
    fontSize: 14,
    lineHeight: 20,
  },
  BODY5_R: {
    fontFamily: fonts.REGULAR,
    fontSize: 14,
    lineHeight: 20,
  },
  BODY6: {
    fontFamily: fonts.REGULAR,
    fontSize: 12,
    lineHeight: 18,
  },
  BODY7: {
    fontFamily: fonts.REGULAR,
    fontSize: 10,
    lineHeight: 16,
  },
  BUTTON1: {
    fontFamily: fonts.MEDIUM,
    fontSize: 16,
    lineHeight: 24,
  },
  BUTTON2: {
    fontFamily: fonts.MEDIUM,
    fontSize: 14,
    lineHeight: 20,
  },
  BUTTON3: {
    fontFamily: fonts.MEDIUM,
    fontSize: 12,
    lineHeight: 18,
  },
  BUTTON4: {
    fontFamily: fonts.MEDIUM,
    fontSize: 10,
    lineHeight: 16,
  },
  LABEL1: {
    fontFamily: fonts.MEDIUM,
    fontSize: 14,
    lineHeight: 16,
  },
  LABEL2: {
    fontFamily: fonts.MEDIUM,
    fontSize: 12,
    lineHeight: 14,
  },
  LABEL3: {
    fontFamily: fonts.MEDIUM,
    fontSize: 10,
    lineHeight: 12,
  },
} as const;
