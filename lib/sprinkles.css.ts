import { createSprinkles } from '@vanilla-extract/sprinkles'
import { layoutProperties } from './layout.css'
import { flexProperties } from './flex.css'
import { spacingProperties } from './spacing.css'
import { typographyProperties } from './typography.css'
import { backgroundProperties } from './background.css'
import { sizingProperties } from './sizing.css'
import { borderProperties } from './border.css'

export const sprinkles = createSprinkles(
  layoutProperties,
  flexProperties,
  spacingProperties,
  typographyProperties,
  backgroundProperties,
  sizingProperties,
  borderProperties,
)

