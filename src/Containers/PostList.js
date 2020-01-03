import React from 'react';
import Post from '/Users/flatironschoolbrooklyn/peng_frontend/src/Components/Post.js';
import Form from '/Users/flatironschoolbrooklyn/peng_frontend/src/Components/Form.js'

export default class PostList extends React.Component{

    render() {
        return (
            <div>
                <ul class="container" > {this.props.posts.map(post => <Post key={post.id} post={post} handleDelete={this.props.handleDelete} onClick={this.props.onClick} addComment={this.props.addComment}/>)} </ul>
                <Form handleSubmit={this.props.handleSubmit}/>
            </div>
        )
    }
}