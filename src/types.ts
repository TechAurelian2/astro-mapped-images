import { z } from 'astro/zod';

export const MappedImageSchema = z.object({
  width: z.number(),
  height: z.number(),
}).strict();

export type MappedImage = z.infer<typeof MappedImageSchema>;