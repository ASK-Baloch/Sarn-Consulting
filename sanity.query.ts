// sanity.query.ts
export const allPostsQuery = `*[_type == "post"]{
    _id,
    title,
    slug,
    image,
    description
  } | order(_createdAt desc)`
  
  export const singlePostQuery = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    image,
    description,
    content
  }`

  export const alltitleQuery = `*[_type == "post"] | order(_createdAt desc) {
    title,
    description,
    "slug": slug.current
  }`;
  