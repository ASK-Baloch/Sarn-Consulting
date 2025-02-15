// src/app/studio/[[...index]]/page.tsx
'use client'

import dynamic from 'next/dynamic'
import config from '../../../../sanity/sanity.config'

const Studio = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  {
    ssr: false,
    loading: () => <div>Loading Studio...</div>
  }
)

export default function StudioPage() {
  return <Studio config={config} />
}
