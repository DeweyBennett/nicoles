import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: 'sks315cuHKvTn2C4q0TTpUuH1quM97IUkzKfF2Y6t9T7aFoRtvw9G8oQgmBVg2Vm23YYsmxZk8lR3BhvapfqrOOQqrBN5wvpd41yyxerDmnOJueenNMdMTDbsTyNnQBc03sKzDQU6JfGhG9e8LToH3eZGZL9MsXqcTiBMn9n1Fy0fIxyWylY'
})
