import { z, defineCollection } from 'astro:content';
const ProgramCollection = defineCollection({ 
    type: 'data', // v2.5.0以降
    schema: z.object({
        Name: z.string(),
        Target: z.string(),
        Description: z.string(),
        AppStartDate: z.string(),
        AppEndDate: z.string(),
        EventStartDate: z.string(),
        EventEndDate: z.string(),
        Status: z.string(),
        URL: z.string(),
    }),

 });
export const collections = {
  'data': ProgramCollection,
};