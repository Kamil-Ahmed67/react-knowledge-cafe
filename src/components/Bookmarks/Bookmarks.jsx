import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
    return (
        <div  className="md:w-1/3 bg-gray-300 rounded-xl ml-4 mt-4 pt-4">
            <h1 className="text-3xl text-center ">Bookmarked blogs:{bookmarks.length}</h1>
            {
                bookmarks.map((bookmark)=><Bookmark 
                key={bookmark.id}
                bookmark={bookmark}
                
                ></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.object.isRequired
}
export default Bookmarks;