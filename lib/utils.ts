export const breakPoint = {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
}

export const responsiveConditions = {
  'default': {},
  'sm': { '@media': `(min-width: ${breakPoint.sm})` },
  'md': { '@media': `(min-width: ${breakPoint.md})` },
  'lg': { '@media': `(min-width: ${breakPoint.lg})` },
  'xl': { '@media': `(min-width: ${breakPoint.xl})` },
  '2xl': { '@media': `(min-width: ${breakPoint['2xl']})` },
}

export const generateNumerical = (generator: (num: number) => string | number) => {
  const obj: {
    [key: number]: number | string
  } = {}
  for (let index = 1; index <= 12; index++) {
    obj[index] = generator(index)
  }
  return obj as {
    1: number | string
    2: number | string
    3: number | string
    4: number | string
    5: number | string
    6: number | string
    7: number | string
    8: number | string
    9: number | string
    10: number | string
    11: number | string
    12: number | string
  }
}

export const basicNumberSize = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',
  11: '44px',
  12: '48px',
  14: '56px',
  16: '60px',
  20: '80px',
  24: '96px',
  28: '112px',
  32: '128px',
  36: '144px',
  40: '160px',
  44: '176px',
  48: '192px',
  52: '208px',
  56: '224px',
  60: '240px',
  64: '256px',
  72: '288px',
  80: '320px',
  96: '384px',
  px: '1px',
  0.5: '2px',
  1.5: '6px',
  2.5: '10px',
  3.5: '14px',
}

export const basicPercentageSize = {
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '11/12': '91.666667%',
  'full': '100%',
}

export const numericalMap = generateNumerical(i => i)
