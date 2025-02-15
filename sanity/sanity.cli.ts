// sanity/sanity.cli.ts
import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'bbokzn7y',  // e.g. "abcd1234"
    dataset: 'production',         // or your dataset name
  },
})
