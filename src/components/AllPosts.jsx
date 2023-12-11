import { Link } from "react-router-dom"

function AllPosts({allPosts}) {


  return (
    <div  className="blue">
        <h1>All Posts</h1>
      {
        allPosts.map((post) => {
          return(
            <Link key={post.id} to={`/posts/${post.id}`}>
                <li >{post.title}</li>
            </Link>
          )
        })
      }
      
      
    </div>
  )
}

export default AllPosts
