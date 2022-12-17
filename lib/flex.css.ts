import { defineProperties } from '@vanilla-extract/sprinkles'
import { basicNumberSize, basicPercentageSize, generateNumerical, numericalMap, responsiveConditions } from './utils'

export const flexProperties = defineProperties({
  conditions: responsiveConditions,
  defaultCondition: 'default',
  properties: {
    flexBasis: {
      ...basicNumberSize,
      ...basicPercentageSize,
      auto: 'auto',
    },
    flexDirection: {
      row: 'row',
      rowReverse: 'row-reverse',
      col: 'column',
      colReverse: 'column-reverse',
    },
    flexWrap: ['wrap', 'wrap-reverse', 'nowrap'],
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexGrow: [0, 1],
    flexShrink: [0, 1],
    order: {
      ...numericalMap,
      first: -9999,
      last: 9999,
      none: 0,
    },
    gridTemplateColumns: {
      ...generateNumerical(i => `repeat(${i}, minmax(0, 1fr))`),
      none: 'none',
    },
    gridColumn: {
      ...generateNumerical(i => `span ${i} / span ${i}`),
      auto: 'auto',
      full: '1 / -1',
    },
    gridColumnStart: {
      ...numericalMap,
      auto: 'auto',
    },
    gridColumnEnd: {
      ...numericalMap,
      auto: 'auto',
    },
    gridTemplateRows: {
      ...generateNumerical(i => `repeat(${i}, minmax(0, 1fr));`),
      none: 'none',
    },
    gridRow: {
      ...generateNumerical(i => `span ${i} / span ${i}`),
      auto: 'auto',
      full: '1 / -1',
    },
    gridRowStart: {
      ...numericalMap,
      auto: 'auto',
    },
    gridRowEnd: {
      ...numericalMap,
      auto: 'auto',
    },
    gridAutoFlow: {
      row: 'row',
      col: 'col',
      dense: 'dense',
      rowDense: 'row dense',
      colDense: 'column dense',
    },
    gridAutoColumns: {
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)',
    },
    gridAutoRows: {
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)',
    },
    gap: basicNumberSize,
    columnGap: basicNumberSize,
    rowGap: basicNumberSize,
    justifyContent: {
      start: 'flex-start',
      end: 'flex-end',
      center: 'center',
      between: 'space-between',
      around: 'space-around',
      evenly: 'space-evenly',
    },
    justifyItems: ['start', 'end', 'center', 'stretch'],
    justifySelf: ['auto', 'start', 'end', 'center', 'stretch'],
    alignContent: {
      center: 'center',
      start: 'flex-start',
      end: 'flex-end',
      between: 'space-between',
      around: 'space-around',
      evenly: 'space-evenly',
      baseline: 'baseline',
    },
    alignItems: {
      start: 'flex-start',
      end: 'flex-end',
      center: 'center',
      baseline: 'baseline',
      stretch: 'stretch',
    },
    alignSelf: {
      auto: 'auto',
      start: 'flex-start',
      end: 'flex-end',
      center: 'center',
      stretch: 'stretch',
      baseline: 'baseline',
    },
    placeContent: {
      center: 'center',
      start: 'start',
      end: 'end',
      between: 'space-between',
      around: 'space-around',
      evenly: 'space-evenly',
      baseline: 'baseline',
      stretch: 'stretch',
    },
    placeItems: ['start', 'end', 'center', 'baseline', 'stretch'],
    placeSelf: ['start', 'end', 'center', 'baseline', 'stretch'],
  },
  shorthands: {
    basis: ['flexBasis'],
    grow: ['flexGrow'],
    shrink: ['flexShrink'],
    gridCols: ['gridTemplateColumns'],
    colSpan: ['gridColumn'],
    colStart: ['gridColumnStart'],
    colEnd: ['gridColumnEnd'],
    gridRows: ['gridTemplateRows'],
    rowSpan: ['gridRow'],
    rowStart: ['gridRowStart'],
    rowEnd: ['gridRowEnd'],
    gridFlow: ['gridAutoFlow'],
    autoCols: ['gridAutoColumns'],
    autoRows: ['gridAutoRows'],
    gapX: ['columnGap'],
    gapY: ['rowGap'],
    justify: ['justifyContent'],
    content: ['alignContent'],
    items: ['alignItems'],
    self: ['alignSelf'],
  },
})