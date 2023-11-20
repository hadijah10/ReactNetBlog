import { useState } from 'react'
import { Route } from "react-router-dom";
import NavBar from './Nav';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  const [count, setCount] = useState(0)
  const title = "Welcome to the next blog";
  const likes = 60;

  return (
    <>
    <div className='App'>
      <NavBar/>
        <div className='content'>
            <h1>App Component</h1>
           <Route exact path='/' ><Home/></Route>
           <Route path='/create'><Create/></Route>
           <Route path='/blogs/:id'><BlogDetails/></Route>
        </div>
     </div>

    </>
  )
}

export default App
