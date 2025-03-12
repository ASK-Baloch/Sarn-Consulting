// src/app/studio/[[...index]]/ClientStudio.tsx
'use client'

import dynamic from 'next/dynamic'
import config from '../../../../sanity/sanity.config'

// Dynamically import NextStudio from next-sanity/studio, disabling SSR.
const Studio = dynamic(
  () => import('next-sanity/studio').then(mod => mod.NextStudio),
  {
    ssr: false,
    loading: () => <div>Loading Studio...</div>,
  }
)

export default function ClientStudio() {
  return <Studio config={config} />
}
