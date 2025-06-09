import { visionTool } from '@sanity/vision';

import { schemaTypes } from './src/sanity/schemas';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

export default defineConfig({
    name: 'default',
    title: 'Blog CMS',

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

    plugins: [structureTool(), visionTool()],

    schema: {
        types: schemaTypes
    }
});
