/**
 * @license
 * Copyright (c) TechAurelian {@link https://techaurelian.com}
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { AstroIntegration } from 'astro';
import { astroMappedImagesOptions } from './types/index';

declare global {
  // eslint-disable-next-line no-var
  var astroMappedImagesOptions: astroMappedImagesOptions;
}

export default function integration(options: astroMappedImagesOptions = {}): AstroIntegration {
  globalThis.astroMappedImagesOptions = options;
  console.log('Options passed to me (astro-mapped-images):', globalThis.astroMappedImagesOptions);

  return {
    name: 'astro-mapped-images',
    hooks: {},
  };
}
