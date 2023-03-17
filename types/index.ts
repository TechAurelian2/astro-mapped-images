/**
 * @license
 * Copyright (c) TechAurelian {@link https://techaurelian.com}
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Re-export schemas and types that the user needs to access from this Astro integration.
export { MappedImageSchema } from './schemas/mapped-image';
export type { MappedImage } from './schemas/mapped-image';
export { ImageMapEntrySchema, ImageMapSchema } from './schemas/image-map';
export type { ImageMapEntry, ImageMap } from './schemas/image-map';

// Re-export the integration options schema.
export type { astroMappedImagesOptions } from './schemas/integration-options';
