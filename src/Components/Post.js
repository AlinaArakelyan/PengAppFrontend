import React from "react";
import Comment from "../Components/Comment.js"
import ToggleDisplay from 'react-toggle-display'
import CommentForm from "./CommentForm.js"



export default class Post extends React.Component{

    state = {
        show: false
    }

    handleClick() {
        this.setState({
          show: !this.state.show
        });
    }


    render() {
        return (
            <div class="border-bottom primary">
                <ol class="border">{this.props.post.user.name} says: <br></br>
                    <ul onMouseOver={ () => this.handleClick() } class="border rounded p-3 mb-2 bg-white text-dark lead" >{this.props.post.post}  <button type="button" class="btn btn-danger" onClick= {() => this.props.handleDelete(this.props.post)}> Delete</button> </ul>
                    <span onClick = {() => this.props.onClick(this.props.post)}> ❤️: {this.props.post.likes.length}</span>
                    <ToggleDisplay show={this.state.show}>
                        <li > Comments: {this.props.post.comments.map(comment => <Comment key={comment.id} post={this.props.post.id}comment={comment} />)}</li><br></br>
                        <div><CommentForm post={this.props.post.id} handleSubmit={this.props.addComment} /> </div>
                        </ToggleDisplay>
                </ol>
            </div>
        )
    }
}