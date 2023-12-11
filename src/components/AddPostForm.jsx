import { useState } from "react"
import axios from "axios"

const AddPostForm = ({allPosts, setAllPosts}) => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [userId, setUserId] = useState(1)

    const handleSubmit = async (event) => {
        event.preventDefault()
        const newPost = {
            title,
            body,
            userId
        }
        //console.log(newPost)
        const response = await axios.post('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/posts', newPost )
        console.log(response)
        //spread operator
        //setAllPosts([...allPosts, response.data])
    }


    return (
        <div >
            <form onSubmit={handleSubmit}>
                <label>
                    <input 
                        type="text"
                        name="title"
                        value={title}
                        placeholder="Enter title here"
                        onChange={(event) => {setTitle(event.target.value)}}
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="body"
                        value={body}
                        placeholder="Enter body here"
                        onChange={(event) => {setBody(event.target.value)}}
                    />
                </label>
                <label>
                    <input 
                        type="number"
                        name="userId"
                        value={userId}
                        onChange={(event) => {setUserId(event.target.value)}}
                    />
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddPostForm