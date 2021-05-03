import React, { Component, Fragment } from 'react'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Post from '../components/Post/Post'
import axios from 'axios'

class Blog extends Component {

    state = {
        post: [],
        formPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        }
    }
    
    getAllPost = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then((result) => {
            this.setState({
                post: result.data
            })
        })
    }

    postData = () => {
        axios.post('http://localhost:3004/posts', this.state.formPost).then((res) => {
            console.log(res);
        }, (err) => {
            console.log('error', err);
        })
    }

    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
            this.getAllPost()
        })
    }

    handleFormChange = (event) => {
        let formPostNew = {...this.state.formPost};
        let timestamp =  new Date().getTime();
        formPostNew['id'] = timestamp;
        formPostNew[event.target.name] = event.target.value
        this.setState({
            formPost: formPostNew
        })
        
    }

    handleSubmit = () => {
        this.postData();
    }

    componentDidMount() {
        this.getAllPost();
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="text-center mt-3">
                        <h2>Welcome to my Blog</h2>
                    </div>
                    <div className="row mb-3 px-3">
                        <div className="card col-12 shadow">
                            <div className="py-3 px-3">
                                <div className="form-group">
                                    <label className="mr-3">TITLE</label>
                                    <input type="text" className="form-control" id="title" name="title" placeholder="Enter Title Here" onChange={this.handleFormChange} />
                                </div>
                                <div className="form-group">
                                    <label className="mr-3">Desc</label>
                                    <textarea type="text" className="form-control" id="body" name="body" placeholder="Enter Content Here" onChange={this.handleFormChange} />
                                </div>
                                <button className="btn btn-outline-primary float-right" onClick={this.handleSubmit}>Save</button>
                            </div>
                        </div>
                    </div>
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