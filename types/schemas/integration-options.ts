/**
 * @license
 * Copyright (c) TechAurelian {@link https://techaurelian.com}
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { z } from 'astro/zod';
import { ImageMapSchema } from './image-map';

/**
 * The schema of the integration options.
 */
const astroMappedImagesOptionsSchema = z
  .object({
    // The local image map.
    localImageMap: ImageMapSchema,

    // The external image map.
    externalImageMap: ImageMapSchema,
  })
  .strict();

export type astroMappedImagesOptions = z.infer<typeof astroMappedImagesOptionsSchema>;
