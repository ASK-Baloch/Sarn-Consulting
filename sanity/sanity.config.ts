// sanity/sanity.config.ts
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import schemasTypes from "./schemas"

export default defineConfig({
  name: 'default',
  title: 'Sarn-Consulting',

  projectId: '9foiwkep',
  dataset: 'production',
  // apiVersion: '2023-01-01',

  plugins: [
    structureTool(),
    visionTool()
  ],

  schema: {
    types: schemasTypes,
  },
})
