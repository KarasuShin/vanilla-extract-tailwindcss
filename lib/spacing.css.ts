import { defineProperties } from '@vanilla-extract/sprinkles'
import { basicNumberSize, responsiveConditions } from './utils'

export const spacingProperties = defineProperties({
  conditions: responsiveConditions,
  defaultCondition: 'default',
  properties: {
    paddingTop: basicNumberSize,
    paddingBottom: basicNumberSize,
    paddingLeft: basicNumberSize,
    paddingRight: basicNumberSize,
    padding: basicNumberSize,
    margin: basicNumberSize,
    marginTop: basicNumberSize,
    marginBottom: basicNumberSize,
    marginLeft: basicNumberSize,
    marginRight: basicNumberSize,
  },
  shorthands: {
    p: ['padding'],
    pl: ['paddingLeft'],
    pr: ['paddingRight'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    m: ['margin'],
    ml: ['marginLeft'],
    mr: ['marginRight'],
    mt: ['marginTop'],
    mb: ['marginBottom'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
  },
})
