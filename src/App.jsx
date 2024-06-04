import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Bookmark from './components/Bookmarks/Bookmark'
import Counter from './components/Counter/Counter'
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notifyBookmark = () => toast("Already Bookmarked");
  const [bookmarks, setBookmarks] = useState([]);
  const [time, setTime] = useState(0);
  const handleBookmark = (title, id) => {
    let previousBookmarks = localStorage.getItem('bookmark');
    let previousIds = localStorage.getItem('bookmark-id');
    if (previousBookmarks) {
      const bookmarks = JSON.parse(previousBookmarks);
      const ids = JSON.parse(previousIds);
      if (ids.includes(id)) {
        notifyBookmark();
        return;
      }
      bookmarks.push(title);
      ids.push(id)
      localStorage.setItem('bookmark', JSON.stringify(bookmarks));
      localStorage.setItem('bookmark-id', JSON.stringify(ids));
      setBookmarks(bookmarks);
    }
    else {
      const bookmarks = [title];
      const ids = [id];
      localStorage.setItem('bookmark', JSON.stringify(bookmarks));
      localStorage.setItem('bookmark-id', JSON.stringify(ids));
      setBookmarks(bookmarks);
    }
  };
  useEffect(() => {
    const previousBookmarks = localStorage.getItem('bookmark');
    if (previousBookmarks) {
      const bookmarks = JSON.parse(previousBookmarks);
      setBookmarks(bookmarks);
    }
    else {
      setBookmarks([]);
    }
  }, []);
  const handleReadTime = (time) => {
    const timeToRead = parseInt(time);
    const getTime = localStorage.getItem('time');
    if (getTime) {
      const newTime = parseInt(getTime) + timeToRead;
      localStorage.setItem('time', newTime);
      setTime(newTime)
    }
    else {
      localStorage.setItem('time', timeToRead);
      setTime(timeToRead)
    }
  }
  useEffect(() => {
    const getTime = localStorage.getItem('time');
    if (getTime) {
      setTime(parseInt(getTime));
    }
    else {
      setTime(0);
    }
  }, [])
  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center my-8 gap-y-10 gap-x-10 md:gap-y-0  px-4 lg:px-2'>
        <div className='hero-section lg:col-span-2'>
          <Hero handleReadTime={handleReadTime} handleBookmark={handleBookmark}></Hero>
        </div>
        <div className='bookmark-section'>
          <Counter time={time}></Counter>
          <Bookmark bookmarks={bookmarks}></Bookmark>
        </div>
      </div>
    </div>
  )
}

export default App