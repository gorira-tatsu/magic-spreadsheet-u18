import { z, defineCollection } from 'astro:content';
const ProgramCollection = defineCollection({ 
    type: 'data', // v2.5.0以降
    schema: z.object({
        Name: z.string(),
        Target: z.string(),
        Description: z.string(),
        AppStartDate: z.date(),
        AppEndDate: z.date(),
        EventStartDate: z.date(),
        EventEndDate: z.date(),
        Status: z.string(),
        URL: z.string(),
    }),

 });
export const collections = {
  'data': ProgramCollection,
};