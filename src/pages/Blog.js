import React, { Component, Fragment } from 'react'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Post from '../components/Post/Post'
import axios from 'axios'

class Blog extends Component {

    state = {
        post: []
    }
    
    getAllPost = () => {
        axios.get('http://localhost:3004/posts')
        .then((result) => {
            this.setState({
                post: result.data
            })
        })
    }

    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
            this.getAllPost()
        })
    }

    componentDidMount() {
        this.getAllPost();
    }

    render() {
        return (
            <Fragment>
                <div className="text-center mt-3">
                    <h2>Welcome to my Blog</h2>
                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove}/>
                    })
                }
            </Fragment>
        )
    }
}

export default Blog;