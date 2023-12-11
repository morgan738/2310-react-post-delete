import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

const SinglePost = (props) => {
    const params = useParams()
    const id = params.id*1

    const navigate = useNavigate()

    const singlePost = props.allPosts.find((post) => {
        return id === post.id
    })
    // console.log(singlePost)
    // console.log(props.allPosts)

    const handleDelete = async () => {
        const response = await axios.delete(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/posts/${id}`)
        console.log(response)
        //since our data has changed, state needs to change
        /**
         * update state
         */

        navigate('/posts')


    }

    if(!singlePost){
        return null
    }


    return(
        <div className="red">
            <h1>Single Post</h1>
            <h2>
                {singlePost.title}
            </h2>
            <p>{singlePost.body}</p>
            <hr/>

            <button onClick={() => {handleDelete()}}>Delete</button>
            

        </div>
    )
}

export default SinglePost