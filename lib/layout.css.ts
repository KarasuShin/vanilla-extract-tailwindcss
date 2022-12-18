import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'
import { basicScreenSize } from './sizing.css'
import { basicNumberSize, basicPercentageSize, numericalMap, responsiveConditions } from './utils'

const containerSprinkles = createSprinkles(defineProperties({
  conditions: responsiveConditions,
  defaultCondition: 'default',
  properties: {
    maxWidth: {
      'default': '100%',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
}))

export const container = containerSprinkles({
  maxWidth: {
    'default': 'default',
    'sm': 'sm',
    'md': 'md',
    'lg': 'lg',
    'xl': 'xl',
    '2xl': '2xl',
  },
})

export const layoutProperties = defineProperties({
  conditions: responsiveConditions,
  defaultCondition: 'default',
  properties: {
    aspectRatio: {
      auto: 'auto',
      square: '1/1',
      video: '16/9',
    },
    columns: {
      ...numericalMap,
      ...basicScreenSize,
      auto: 'auto',
    },
    breakAfter: ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
    breakBefore: ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
    breakInside: ['auto', 'avoid', 'avoid-page', 'avoid-column'],
    boxDecorationBreak: ['clone', 'slice'],
    boxSizing: {
      border: 'border-box',
      content: 'content-box',
    },
    display: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row', 'table-row-group', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'none'],
    float: ['right', 'left', 'none'],
    clear: ['left', 'right', 'both', 'none'],
    isolation: ['isolate', 'auto'],
    objectFit: ['contain', 'cover', 'fill', 'none', 'scale-down'],
    objectPosition: ['bottom', 'center', 'left', 'left bottom', 'left top', 'right', 'right bottom', 'right top', 'top'],
    overflow: ['auto', 'hidden', 'clip', 'visible', 'scroll'],
    overflowX: ['auto', 'hidden', 'clip', 'visible', 'scroll'],
    overflowY: ['auto', 'hidden', 'clip', 'visible', 'scroll'],
    overscrollBehavior: ['auto', 'contains', 'none'],
    overscrollBehaviorX: ['auto', 'contain', 'none'],
    overscrollBehaviorY: ['auto', 'contain', 'none'],
    position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
    visibility: ['visible', 'hidden', 'collapse'],
    zIndex: [0, 10, 20, 30, 40, 50, 'auto'],
    top: {
      ...basicNumberSize,
      ...basicPercentageSize,
      auto: 'auto',
    },
    bottom: {
      ...basicNumberSize,
      ...basicPercentageSize,
      auto: 'auto',
    },
    left: {
      ...basicNumberSize,
      ...basicPercentageSize,
      auto: 'auto',
    },
    right: {
      ...basicNumberSize,
      ...basicPercentageSize,
      auto: 'auto',
    },
  },
  shorthands: {
    box: ['boxSizing'],
    overScroll: ['overscrollBehavior'],
    overScrollX: ['overscrollBehaviorX'],
    overScrollY: ['overscrollBehaviorY'],
    z: ['zIndex'],
    inset: ['top', 'bottom', 'left', 'right'],
    insetX: ['left', 'right'],
    insetY: ['top', 'bottom'],
  },
})
