// sanity.client.ts
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const projectId = 'bbokzn7y'
export const dataset = 'production'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2023-01-01',
  useCdn: true, // or false if you want fresh data
})

const builder = imageUrlBuilder(client)
export function urlFor(source: any) {
  return builder.image(source)
}
