import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog,handleAddToBookmarks,handleMarkAsRead }) => {
    const {id, title, cover, author, author_img, reading_time,posted_date
        ,hashtags
     } = blog;
    return (
        <div className='mb-20 p-4 space-y-4'>
            <img className='w-full mb-8 rounded-xl' src={cover} alt={`Cover Picture of the title ${title}`}></img>
            <div className='flex justify-between mb-4'>
                <div className='flex items-center gap-x-4'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div>
                       <h3 className="text-2xl">{author}</h3>
                       <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button 
                    onClick={()=>handleAddToBookmarks(blog)}
                    className='ml-2 text-2xl'><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx)=><span key={idx}><a>{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time,id)}
             className='text-purple-800 text-bold underline'>Mark As Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired
}
export default Blog;