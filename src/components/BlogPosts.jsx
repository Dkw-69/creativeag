import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client'
import Footer from './Footer';
import Navbar from './Navbar';

const BlogPosts = () => {
    const [allPosts, setAllPosts] = useState(null) 

    // get data using useeffect and sanity client
    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                }
            }`
        )
        .then((data) => setAllPosts(data))
        .catch(console.error);
    }, [])

    return ( 
        <>
            <Navbar/>
            <div className="blog-hero"></div>
            <h4 className="tabs-intro-header" >Our Blog</h4>
            <div className="container blog-posts">
                <div className="row">
                    {
                        allPosts && allPosts.map((post, index) => {
                            return(
                                <div className="col s12 l4">
                                    <div className="card">
                                        <Link to={'/blog/' + post.slug.current} key={post.slug.current}>
                                            <div className="card-image">
                                                <img className="responsive-img" src={post.mainImage.asset.url} alt="blog-hero-image"/>
                                            </div>
                                            <div className="card-title" key={index}>
                                                <h5>{post.title}</h5>
                                            </div>
                                        </Link>
                                    </div>      
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer/>
        </>
     );
}
 
export default BlogPosts;