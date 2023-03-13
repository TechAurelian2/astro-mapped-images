/**
 * @license
 * Copyright (c) TechAurelian
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Re-export everything that the user needs to access from this Astro integration.
// Currently, this is the ImageTag Astro component and image map related schema and types.

export { default as ImageTag } from './src/ImageTag.astro';
export { MappedImageSchema } from './src/types';
export type { MappedImage, ImageMap } from './src/types';
