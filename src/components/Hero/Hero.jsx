import React, { useEffect, useState } from 'react';
import Blog from '../../components/Blog/Blog'
import Answers from '../Answeres/Answers';
const Hero = (props) => {
    const {handleBookmark, handleReadTime} = props
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])
    return (
        <>
            <div className='flex flex-col gap-8'>
                {
                    blog.map((singleBlog) => (
                        <Blog key={singleBlog.id} handleReadTime={handleReadTime} handleBookmark={handleBookmark} blog={singleBlog}></Blog>
                    ))
                }
                <Answers></Answers>
            </div>
        </>
    );
};

export default Hero;