/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

export const postRoutinesRequestSetTypeEnum = {
  warmup: 'warmup',
  normal: 'normal',
  failure: 'failure',
  dropset: 'dropset',
} as const

export type PostRoutinesRequestSetTypeEnum = (typeof postRoutinesRequestSetTypeEnum)[keyof typeof postRoutinesRequestSetTypeEnum]

export type PostRoutinesRequestSet = {
  /**
   * @description The type of the set.
   * @type string | undefined
   */
  type?: PostRoutinesRequestSetTypeEnum
  /**
   * @description The weight in kilograms.
   * @type number
   */
  weight_kg?: number | null
  /**
   * @description The number of repetitions.
   * @type integer
   */
  reps?: number | null
  /**
   * @description The distance in meters.
   * @type integer
   */
  distance_meters?: number | null
  /**
   * @description The duration in seconds.
   * @type integer
   */
  duration_seconds?: number | null
  /**
   * @description A custom metric for the set. Currently used for steps and floors.
   * @type number
   */
  custom_metric?: number | null
}