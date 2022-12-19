import { defineProperties } from '@vanilla-extract/sprinkles'
import { palette } from './color.css'
import { responsiveConditions } from './utils'

const borderRadiusSize = {
  'sm': '2px',
  'md': '6px',
  'px': '4px',
  'lg': '8px',
  'xl': '12px',
  '2xl': '16px',
  '3xl': '24px',
  'none': '0px',
  'full': '9999px',
}

const borderWidth = {
  0: '0px',
  2: '2px',
  4: '4px',
  8: '8px',
  px: '1px',
}

export const borderProperties = defineProperties({
  conditions: responsiveConditions,
  defaultCondition: 'default',
  properties: {
    borderRadius: borderRadiusSize,
    borderTopLeftRadius: borderRadiusSize,
    borderTopRightRadius: borderRadiusSize,
    borderBottomLeftRadius: borderRadiusSize,
    borderBottomRightRadius: borderRadiusSize,
    borderWidth,
    borderLeftWidth: borderWidth,
    borderRightWidth: borderWidth,
    borderTopWidth: borderWidth,
    borderBottomWidth: borderWidth,
    borderColor: palette,
    borderLeftColor: palette,
    borderRightColor: palette,
    borderTopColor: palette,
    borderBottomColor: palette,
    borderStyle: ['solid', 'dashed', 'dotted', 'hidden', 'none'],
    outlineWidth: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    outlineColor: {
      ...palette,
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
    },
    outlineStyle: ['none', 'solid', 'dotted', 'double'],
    outlineOffset: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
  },
  shorthands: {
    rounded: ['borderRadius'],
    roundedT: ['borderTopLeftRadius', 'borderTopRightRadius'],
    roundedB: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    roundedL: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    roundedR: ['borderTopRightRadius', 'borderBottomRightRadius'],
    roundedTL: ['borderTopLeftRadius'],
    roundedTR: ['borderTopRightRadius'],
    roundedBL: ['borderBottomLeftRadius'],
    roundedBR: ['borderBottomRightRadius'],
    borderX: ['borderLeftWidth', 'borderRightWidth'],
    borderY: ['borderTopWidth', 'borderBottomWidth'],
  },
})
