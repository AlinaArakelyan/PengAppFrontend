import React from "react";
import Comment from "/Users/flatironschoolbrooklyn/peng_frontend/src/Components/Comment.js"
<<<<<<< HEAD
import ToggleDisplay from 'react-toggle-display'
import CommentForm from "./CommentForm.js"
=======
>>>>>>> 81024071ad5d2901939e37511b7b0f8cfb599d98



export default class Post extends React.Component{
<<<<<<< HEAD

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
                <ol >{this.props.post.user.name} says: <br></br>
                    <ul onMouseOver={ () => this.handleClick() } class="border rounded p-3 mb-2 bg-white text-dark lead" >{this.props.post.post}  <button type="button" class="btn btn-danger" onClick= {() => this.props.handleDelete(this.props.post)}> Delete</button> <button type="button" class="btn btn-info">Update</button></ul>
                    <span onClick = {() => this.props.onClick(this.props.post)}> ❤️: {this.props.post.likes.likes}</span>
                    <ToggleDisplay show={this.state.show}>
                        <li type="text" > Comments: {this.props.post.comments.map(comment => <Comment key={comment.id} comment={comment} />)}</li><br></br>
                        <div>Add new Comment: <CommentForm handleSubmit={this.props.addComment} /> </div>
                        </ToggleDisplay>
=======
    render() {
        return (
            <div class="border border-primary">
                <ol >{this.props.post.user.name} says: <br></br>
                    <li class="border d-inline">{this.props.post.post}  <button onClick= {() => this.props.handleDelete(this.props.post)}> Delete</button> </li>
                    <li type="text"> Comments: {this.props.post.comments.map(comment => <Comment key={comment.id} comment={comment} />)}</li><br></br>
                    <span onClick = {() => this.props.onClick(this.props.post)}> ❤️: {this.props.post.likes.likes}</span>
>>>>>>> 81024071ad5d2901939e37511b7b0f8cfb599d98
                </ol>
            </div>
        )
    }
}