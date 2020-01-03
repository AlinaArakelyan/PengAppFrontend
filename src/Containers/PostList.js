import React from 'react';
import Post from '/Users/flatironschoolbrooklyn/peng_frontend/src/Components/Post.js';
import Form from '/Users/flatironschoolbrooklyn/peng_frontend/src/Components/Form.js'

export default class PostList extends React.Component{

    render() {
        return (
            <div>
<<<<<<< HEAD
                <ul class="container" > {this.props.posts.map(post => <Post key={post.id} post={post} handleDelete={this.props.handleDelete} onClick={this.props.onClick} addComment={this.props.addComment}/>)} </ul>
=======
                <ul class="container" > {this.props.posts.map(post => <Post key={post.id} post={post} handleDelete={this.props.handleDelete} onClick={this.props.onClick} />)} </ul>
>>>>>>> 81024071ad5d2901939e37511b7b0f8cfb599d98
                <Form handleSubmit={this.props.handleSubmit}/>
            </div>
        )
    }
}