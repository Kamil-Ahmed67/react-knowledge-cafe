import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
    const { title, cover, author, author_img, reading_time,posted_date
        ,hashtags
     } = blog;
    return (
        <div>
            <img className='w-[800px]' src={cover} alt={`Cover Picture of the title ${title}`}></img>
            <div className='flex justify-between'>
                <div className='flex items-center gap-x-4 p-4'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div>
                       <h3 className="text-2xl">{author}</h3>
                       <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time}min read</span>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx)=><span key={idx}><a>{hash}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;