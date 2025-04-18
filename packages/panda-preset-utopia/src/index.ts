/**
 * Panda CSS Utopia scale presets
 *
 * Add responsive fluid type and space scales
 *
 * Utopia scale calculators: https://utopia.fyi
 * utopia-core package: https://github.com/trys/utopia-core
 */

import type { Preset, Recursive, SemanticToken } from '@pandacss/types'
import {
  calculateSpaceScale,
  calculateTypeScale,
  type UtopiaSpaceConfig,
  type UtopiaTypeConfig,
} from 'utopia-core' 

/**
 * Type scale preset options.
 *
 * See the [`utopia-core` `calculateTypeScale` docs](https://github.com/trys/utopia-core?tab=readme-ov-file#calculatetypescale) to understand the options
 */
export function utopiaTypeScalePreset(options: TypeScaleOptions): Preset {
  const scale = calculateTypeScale(options)

  const violation = scale.find((step) => step.wcagViolation)
  if (violation)
    throw new Error('WCAG violation detected', { cause: violation })

  return {
    name: 'utopia-type-scale',
    theme: {
      extend: {
        semanticTokens: {
          fontSizes: scale.reduce(
            (acc, step) => {
              acc[step.label] = {
                description: step.label,
                value: step.clamp,
              }
              return acc
            },
            {} as Recursive<SemanticToken<string, string>>,
          ),
        },
      },
    },
  } satisfies Preset
}

export type TypeScaleOptions = UtopiaTypeConfig

/**
 * Space scale preset.
 *
 * See the [`utopia-core` `calculateSpaceScale` docs](https://github.com/trys/utopia-core?tab=readme-ov-file#calculatespacescale) to understand the options.
 */
export function utopiaSpaceScalePreset(
  options: SpaceScaleOptions,
): Preset {
  const scale = calculateSpaceScale(options)

  return {
    name: 'utopia-space-scale',
    theme: {
      extend: {
        semanticTokens: {
          spacing: [
            ...scale.sizes,
            ...scale.oneUpPairs,
            ...scale.customPairs,
          ].reduce(
            (acc, step) => {
              acc[step.label] = {
                description: step.label,
                value: step.clamp,
              }
              return acc
            },
            {} as Recursive<SemanticToken<string, string>>,
          ),
        },
      },
    },
  } satisfies Preset
}

export type SpaceScaleOptions = UtopiaSpaceConfig
