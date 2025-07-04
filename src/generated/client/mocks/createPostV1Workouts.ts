/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { PostV1WorkoutsHeaderParams, PostV1Workouts400, PostV1WorkoutsMutationResponse } from '../types/PostV1Workouts.ts'
import { createPostWorkoutsRequestBody } from './createPostWorkoutsRequestBody.ts'
import { createWorkout } from './createWorkout.ts'
import { faker } from '@faker-js/faker'

export function createPostV1WorkoutsHeaderParams(data?: Partial<PostV1WorkoutsHeaderParams>): PostV1WorkoutsHeaderParams {
  return {
    ...{ 'api-key': faker.string.uuid() },
    ...(data || {}),
  }
}

/**
 * @description The workout was successfully created
 */
export function createPostV1Workouts201() {
  return createWorkout()
}

/**
 * @description Invalid request body
 */
export function createPostV1Workouts400(data?: Partial<PostV1Workouts400>): PostV1Workouts400 {
  return {
    ...{ error: faker.string.alpha() },
    ...(data || {}),
  }
}

export function createPostV1WorkoutsMutationRequest() {
  return createPostWorkoutsRequestBody()
}

export function createPostV1WorkoutsMutationResponse(data?: Partial<PostV1WorkoutsMutationResponse>): PostV1WorkoutsMutationResponse {
  return data || faker.helpers.arrayElement<any>([createPostV1Workouts201()])
}