import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {

/*const [name,setName] = useState('Hadija');
const handleClickAgain = () => {
   setName('Erica');
}
  

const handleDelete = (id) => {
const newBlogs = blogs.filter((blog) => blog.id !== id);
setBlogs(newBlogs);
   }*/
const {data : blogs, isPending, error} = useFetch('http://localhost:3000/blogs' );


    return(
        <>
        {error && <div>{error}</div>}
        {isPending && <p>Loading ...</p>}
        <div className="home">  
        {blogs && <BlogList blog ={blogs} title="All Blogs" /> }
      </div>
      </>
  );
}
export default Home;