/**
 * @license
 * Copyright (c) TechAurelian {@link https://techaurelian.com}
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { z } from 'astro/zod';

/**
 * The schema of a mapped image.
 */
export const MappedImageSchema = z
  .object({
    width: z.number(),
    height: z.number(),
  })
  .strict();

/**
 * The type of a mapped image.
 */
export type MappedImage = z.infer<typeof MappedImageSchema>;

/**
 * A map of image paths to their mapped image data.
 */
export type ImageMap = Record<string, MappedImage>;
