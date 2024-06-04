import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

const Blog = (props) => {
    const { name, img, picture, published_in, title, time_to_read, id } = props.blog;
    const { handleBookmark, handleReadTime } = props;
    return (
        <div className="card bg-base-100 shadow-2xl">
            <div className='rounded-xl'><img src={img} alt="Album" /></div>
            <div className="card-body">
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <label className="btn btn-ghost btn-circle avatar">
                            <div className="w-8 rounded-full">
                                <img src={picture} />
                            </div>
                        </label>
                        <div>
                            <h2 className="text-lg font-semibold">{name}</h2>
                            <p className='text-sm'>{published_in}</p>
                        </div>
                    </div>
                    <div>
                        <p><button onClick={() => handleBookmark(title, id)}><FontAwesomeIcon icon={faBookmark} /></button> {time_to_read} mins read</p>
                    </div>
                </div>
                <h3 className='text-2xl font-semibold my-4'>{title}</h3>
                <div>
                    <a onClick={() => handleReadTime(time_to_read)} className="text-[#6047EC] cursor-pointer underline">mark as read</a>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Blog;