import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

 const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, 
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})
export default client;
