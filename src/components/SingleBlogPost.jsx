import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import sanityClient from '../client'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import Navbar from './Navbar';
import Footer from './Footer';


// create the url builder
const urlBuilder = imageUrlBuilder(sanityClient)
function urlFor(source){
    return urlBuilder.image(source)
}

const SingleBlogPost = () => {
    const [postDetail, setPostDetail] = useState(null)
    // useparams to get proper urls
    const { slug } = useParams()

    // useeffect and sanityclient to fetch data of just a single post
    useEffect(() => {
        sanityClient.fetch(
            `*[slug.current == $slug]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
                body
            }`,
            { slug }
        )
        .then((data) => setPostDetail(data[0]))
        .catch(console.error)
    }, [slug])

    // show loading text if there is no post
    if(!postDetail) return <div>Waiting for data ...</div>

    return ( 
        <>
        <Navbar/>
            <div className="container single-blog">
                <div>
                    <img className="single-blog-image" src={urlFor(postDetail.mainImage).url()} alt="hero"/>
                    <h3>{postDetail.title}</h3>
                </div>
                <div>
                    <BlockContent
                        blocks={postDetail.body}
                        projectId={sanityClient.clientConfig.projectId}
                        dataset={sanityClient.clientConfig.dataset}
                    />
                </div>
            </div>
            <Footer/>
        </>
     );
}
 
export default SingleBlogPost;