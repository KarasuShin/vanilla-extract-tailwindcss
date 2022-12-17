import { defineProperties } from '@vanilla-extract/sprinkles'
import { bgGradientFrom, bgGradientTo, bgGradientVia, gradientStopsVar, palette } from './color.css'
import { responsiveConditions } from './utils'

export const backgroundProperties = defineProperties({
  conditions: responsiveConditions,
  defaultCondition: 'default',
  properties: {
    backgroundAttachment: ['fixed', 'local', 'scroll'],
    backgroundClip: {
      border: 'border-box',
      padding: 'padding',
      content: 'content-box',
      text: 'text',
    },
    backgroundColor: {
      ...palette,
      transparent: 'transparent',
      inherit: 'inherit',
      current: 'currentColor',
    },
    backgroundOrigin: {
      border: 'border-box',
      padding: 'padding-box',
      content: 'content-box',
    },
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      right: 'right',
      leftBottom: 'left bottom',
      leftTop: 'left top',
      rightBottom: 'right bottom',
      rightTop: 'right top',
    },
    backgroundRepeat: {
      repeat: 'repeat',
      noRepeat: 'no-repeat',
      x: 'repeat-x',
      y: 'repeat-y',
      around: 'round',
      space: 'space',
    },
    backgroundSize: ['auto', 'cover', 'contain'],
    backgroundImage: {
      none: 'none',
      toT: `linear-gradient(to top, ${gradientStopsVar})`,
      toTR: `linear-gradient(to top right, ${gradientStopsVar})`,
      toR: `linear-gradient(to right, ${gradientStopsVar})`,
      toBR: `linear-gradient(to bottom right, ${gradientStopsVar})`,
      toB: `linear-gradient(to bottom, ${gradientStopsVar})`,
      toBL: `linear-gradient(to bottom left, ${gradientStopsVar})`,
      toL: `linear-gradient(to left, ${gradientStopsVar})`,
      toTL: `linear-gradient(to top left, ${gradientStopsVar})`,
    },
    bgGradientFrom,
    bgGradientVia,
    bgGradientTo,
  },
  shorthands: {
    bgAttachment: ['backgroundAttachment'],
    bgClip: ['backgroundClip'],
    bgColor: ['backgroundColor'],
    bgOrigin: ['backgroundOrigin'],
    bgPosition: ['backgroundPosition'],
    bgRepeat: ['backgroundRepeat'],
    bgSize: ['backgroundSize'],
    bgImage: ['backgroundImage'],
  },
})
