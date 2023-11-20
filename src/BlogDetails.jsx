import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data : blog, isPending, error} = useFetch('http://localhost:3000/blogs/' +id);
    return(
        <div className="blog-details">
            <h2>Blog Details {id}</h2>
            {error && <div>{error}</div>}
        {isPending && <p>Loading ...</p>}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>{blog.body}</div>
            </article>
        )}
        </div>
    );
}
export default BlogDetails;