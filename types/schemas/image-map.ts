/**
 * @license
 * Copyright (c) TechAurelian {@link https://techaurelian.com}
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { z } from 'astro/zod';

/**
 * The schema of a image map entry. So far, this only contains the width and height of the image.
 */
export const ImageMapEntrySchema = z
  .object({
    /** The width of the image. */
    width: z.number(),

    /** The height of the image. */
    height: z.number(),
  })
  .strict();

/**
 * The type of a image map entry.
 */
export type ImageMapEntry = z.infer<typeof ImageMapEntrySchema>;

/**
 * The schema of a map of image paths to their image map entry data.
 */
export const ImageMapSchema = z.record(z.string(), ImageMapEntrySchema);

/**
 * A map of image paths to their image map entry data.
 */
export type ImageMap = z.infer<typeof ImageMapSchema>;
