// sanity/sanity.cli.ts
import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '9foiwkep',  // e.g. "abcd1234"
    dataset: 'production',         // or your dataset name
  },
})
