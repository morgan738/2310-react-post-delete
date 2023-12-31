import { useEffect, useState } from 'react'
import axios from 'axios'
import AllPosts from './components/AllPosts'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import SinglePost from './components/SinglePost'
import AddPostForm from './components/AddPostForm'

function App() {

  const [allPosts, setAllPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async() => {
      const {data} = await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/posts')
      setAllPosts(data)
    }

    fetchPosts()
  }, [])

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/posts' element={ <AllPosts allPosts={allPosts}/>}/>
        <Route path='/posts/:id' element={<SinglePost allPosts={allPosts}/>}/>
        <Route path='/newpost' element={<AddPostForm setAllPosts={setAllPosts} allPosts={allPosts}/>}/>
      </Routes>
      
     
      
      
    </div>
  )
}

export default App
