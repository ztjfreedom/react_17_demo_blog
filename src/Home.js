import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    // const [name, setName] = useState("mario");
    // const [age, setAge] = useState(20);

    // const handleClick = (e, input) => {
    //     setName(input);
    //     setAge(age + 1);
    // }

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {/* <button onClick={ (e) => { handleClick(e, "Luigi") }}>Click Me</button> */}
            {/* <p>{ name } is {age} years old</p> */}
            {error && <div> {error} </div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs = { blogs } title = "All Blogs" />}
            {/* {blogs && <BlogList blogs = { blogs } title = "All Blogs" handleDelete={handleDelete}/>} */}
            {/* <BlogList blogs = { blogs.filter((blog) => blog.author === 'mario') } title = "Mario's Blogs"/> */}
        </div>
    );
}
 
export default Home;
