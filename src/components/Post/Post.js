import React, { Component } from 'react'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

class Post extends Component {
    render() {
        return (
            <div className="container">
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <div className="card shadow">
                                <div className="card-body">
                                    <img src="https://placeimg.com/1000/500/tech" />
                                    <h6 className="title mt-2">{this.props.data.title}</h6>
                                    <p className="desc">{this.props.data.body}</p>
                                    <button className="btn btn-outline-danger" onClick={() => this.props.remove(this.props.data.id)}>DELETE</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Post;