/**
 * @license
 * Copyright (c) TechAurelian {@link https://techaurelian.com}
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { MappedImage, MappedImageSchema } from './../types';
import type { ImageMap } from './../types';

const LOCAL_PREFIX = 'local://';
const EXTERNAL_PREFIX = 'external://';

/**
 * Determines whether the provided image is a local image or an external image, based on the prefix.
 *
 * @param src The image path.
 * @returns Whether the image is local or not.
 */
function isLocalImage(src: string): boolean {
  let isLocal = false;
  if (src.startsWith(LOCAL_PREFIX)) {
    isLocal = true;
  } else if (src.startsWith(EXTERNAL_PREFIX)) {
    isLocal = false;
  } else {
    throw new Error(
      `ImageTag requires a src prop that starts with either ${LOCAL_PREFIX} or ${EXTERNAL_PREFIX}.\nsrc: ${src}`
    );
  }

  return isLocal;
}

/**
 * Returns the image data for the provided image from the appropriate image map.
 *
 * Currently the image width and height are returned.
 *
 * @param src The image path with a local:// or external:// prefix.
 * @param localImageMap The local image map.
 * @param externalImageMap The external image map.
 * @returns The image data.
 */
export function getImageData(
  src: string,
  localImageMap: ImageMap,
  externalImageMap: ImageMap
): MappedImage {
  const isLocal = isLocalImage(src);

  // Remove the prefix from the src to get the key for the image map
  let cSrc = src.replace(isLocal ? LOCAL_PREFIX : EXTERNAL_PREFIX, '');

  // Get the correct image map based on the image type
  const map = isLocal ? localImageMap : externalImageMap;

  // Get the image data from the map
  let width: number;
  let height: number;
  try {
    ({ width, height } = MappedImageSchema.parse(map[cSrc as keyof typeof map]));
  } catch (e) {
    throw new Error(`Unable to find valid map data for image:\n${src}`);
  }

  return { width, height };
}

/**
 * Returns the image URL by replacing the local:// or external:// prefix with the appropriate images directory path.
 *
 * The images directory paths are determined by the LOCAL_IMAGES_URL and EXTERNAL_IMAGES_URL environment variables.
 *
 * @param src The image path with a local:// or external:// prefix.
 * @returns The absolute image URL string.
 */
export function getImageUrl(src: string): string {
  const isLocal = isLocalImage(src);

  if (isLocal && !import.meta.env.LOCAL_IMAGES_URL) {
    throw new Error('The LOCAL_IMAGES_URL environment variable is not set');
  }

  if (!isLocal && !import.meta.env.EXTERNAL_IMAGES_URL) {
    throw new Error('The EXTERNAL_IMAGES_URL environment variable is not set');
  }

  return src.replace(
    isLocal ? LOCAL_PREFIX : EXTERNAL_PREFIX,
    isLocal ? import.meta.env.LOCAL_IMAGES_URL : import.meta.env.EXTERNAL_IMAGES_URL
  );
}
