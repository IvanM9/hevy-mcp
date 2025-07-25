/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import { postRoutineFolderRequestBodySchema } from './postRoutineFolderRequestBodySchema.ts'
import { routineFolderSchema } from './routineFolderSchema.ts'
import { z } from 'zod'

export const postV1RoutineFoldersHeaderParamsSchema = z.object({
  'api-key': z.string().uuid(),
})

/**
 * @description The routine folder was successfully created
 */
export const postV1RoutineFolders201Schema = z.lazy(() => routineFolderSchema)

/**
 * @description Invalid request body
 */
export const postV1RoutineFolders400Schema = z.object({
  error: z.string().describe('Error message').optional(),
})

export const postV1RoutineFoldersMutationRequestSchema = z.lazy(() => postRoutineFolderRequestBodySchema)

export const postV1RoutineFoldersMutationResponseSchema = z.lazy(() => postV1RoutineFolders201Schema)