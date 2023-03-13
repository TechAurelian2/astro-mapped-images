/**
 * @file Re-export everything that the user needs to access from this Astro integration.
 *
 * Currently, this is the ImageTag Astro component and the MappedImage schema and type.
 */

export { default as ImageTag } from './src/ImageTag.astro';
export { MappedImageSchema } from './src/types';
export type { MappedImage } from './src/types';