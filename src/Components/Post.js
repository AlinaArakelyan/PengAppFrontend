import React from "react";
import Comment from "/Users/flatironschoolbrooklyn/peng_frontend/src/Components/Comment.js"



export default class Post extends React.Component{
    render() {
        return (
            <div class="border border-primary">
                <ol >{this.props.post.user.name} says: <br></br>
                    <li class="border d-inline">{this.props.post.post}  <button onClick= {() => this.props.handleDelete(this.props.post)}> Delete</button> </li>
                    <li type="text"> Comments: {this.props.post.comments.map(comment => <Comment key={comment.id} comment={comment} />)}</li><br></br>
                    <span onClick = {() => this.props.onClick(this.props.post)}> ❤️: {this.props.post.likes.likes}</span>
                </ol>
            </div>
        )
    }
}