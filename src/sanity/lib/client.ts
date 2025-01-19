import { createClient } from 'next-sanity'

import { apiVersion, projectId, token } from '../env'

export const client = createClient({
  projectId,
  dataset: "production",
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token,
})
