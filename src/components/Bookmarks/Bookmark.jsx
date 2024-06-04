import React, { useEffect, useState } from 'react';

const Bookmark = (props) => {
    const {bookmarks} = props;
    return (
        <div className='sticky top-0'>
            <h2 className='text-3xl font-bold'>Bookmarked Blogs : {bookmarks? bookmarks.length : 0}</h2>
            <div className='lg:mx-4 my-4'>
                {bookmarks &&
                    bookmarks.map((bookmark, index) => (
                        <p className='w-2/3 my-6 text-lg font-semibold' key={index}>{bookmark}</p>
                    ))
                }
            </div>
        </div>
    );
};

export default Bookmark;