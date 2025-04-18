import { describe, expect, test } from 'vitest'
import {
    utopiaSpaceScalePreset,
    utopiaTypeScalePreset,
    type SpaceScaleOptions,
    type TypeScaleOptions,
} from './'

describe('panda css utopia', () => {
  describe('pandaPresetUtopiaTypeScale', () => {
    const options: TypeScaleOptions = {
      minWidth: 320,
      minFontSize: 18,
      minTypeScale: 1.2,
      maxWidth: 1240,
      maxFontSize: 20,
      maxTypeScale: 1.25,
      negativeSteps: 2,
      positiveSteps: 5,
    }

    test('generates successful config', () => {
      expect(utopiaTypeScalePreset(options)).toMatchSnapshot()
    })

    test('errors on violating config', () => {
      const errorOptions = { ...options, minFontSize: 1 }
      expect(() => utopiaTypeScalePreset(errorOptions)).toThrowError()
    })
  })

  describe('pandaPresetUtopiaTypeScale', () => {
    const options: SpaceScaleOptions = {
      minWidth: 320,
      maxWidth: 1240,
      minSize: 18,
      maxSize: 20,
      positiveSteps: [1.5, 2, 3, 4, 5, 6],
      negativeSteps: [0.75, 0.5, 0.25],
      customSizes: ['s-l', 'l-3xl'],
    }

    test('generates successful config', () => {
      expect(utopiaSpaceScalePreset(options)).toMatchSnapshot()
    })
  })
})
