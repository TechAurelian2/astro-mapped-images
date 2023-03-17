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
    /** The alternative text description of the image. This is required! */ 
    alt: z.string(),
    
    /** The optional classes to apply to the image. */
    class: z.string().optional(),
    
    /** The optional height of the image */
    height: z.number().optional(),
    
    /** The mandatory image URL. */
    src: z.string(),

    /** The optional advisory text of the image. */
    title: z.string().optional(),

    /** The optional width of the image */
    width: z.number().optional(),
  })
  .strict();

/**
 * The type of a mapped image.
 */
export type MappedImage = z.infer<typeof MappedImageSchema>;
