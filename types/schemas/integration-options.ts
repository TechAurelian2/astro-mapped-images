/**
 * @license
 * Copyright (c) TechAurelian {@link https://techaurelian.com}
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { z } from 'astro/zod';
import { MappedImageSchema } from './mapped-image';

/**
 * The schema of the integration options.
 */
const astroMappedImagesOptionsSchema = z
  .object({
    // The local image map.
    localImageMap: z.record(MappedImageSchema),

    // The external image map.
    externalImageMap: z.record(MappedImageSchema),
  })
  .strict();

export type astroMappedImagesOptions = z.infer<typeof astroMappedImagesOptionsSchema>;
