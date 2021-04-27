// to connect sanity backend with react frontend
import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: 'your_projectid_here',
    dataset: 'production'
})
