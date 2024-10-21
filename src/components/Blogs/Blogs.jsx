import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(response=>response.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3 bg-red-400">
            <h1 className="text-4xl">Blogs</h1>
        </div>
    );
};

export default Blogs;