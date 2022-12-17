import { createMapValueFn, createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'
import { createVar } from '@vanilla-extract/css'

const alpha = createVar()

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    background: {
      red: {
        vars: { [alpha]: '1' },
        background: `rgba(255, 0, 0, ${alpha})`,
      },
    },
    backgroundOpacity: {
      1: { vars: { [alpha]: '1' } },
      0.1: { vars: { [alpha]: '0.1' } },
    },
  },
})

export const mapResponsiveValue = createMapValueFn(
  responsiveProperties,
)

const alignToFlexAlign = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
  stretch: 'stretch',
} as const

export const a = mapResponsiveValue(
  {
    mobile: 'center',
    desktop: 'left',
  } as const,
  value => alignToFlexAlign[value],
)
