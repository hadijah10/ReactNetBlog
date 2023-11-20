import {Link} from "react-router-dom";
const BlogList = ({blog,title}) => {
   return (
    <>
    <h2>{title}</h2>
    {blog.map((blog) =>(
        <div className='blog-preview' key={blog.id}>
        <Link to={`/blogs/${blog.id}`}>
         <p>{blog.title}</p>
         <h3>Written by {blog.author}</h3>
        </Link>
      </div>
       ))}
</>
 
   );
}


export default BlogList;