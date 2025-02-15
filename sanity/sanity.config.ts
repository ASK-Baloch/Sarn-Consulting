// sanity/sanity.config.ts
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import schemas from "./schemas"

export default defineConfig({
  name: 'default',
  title: 'Sarn-Consulting',

  projectId: 'bbokzn7y',
  dataset: 'production',
  apiVersion: '2023-01-01',

  plugins: [
    structureTool(),
    visionTool()
  ],

  schema: {
    types: schemas,
  },
})
