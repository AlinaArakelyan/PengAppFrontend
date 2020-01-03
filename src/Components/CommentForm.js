import React from "react";

class CommentForm extends React.Component {

    state = {
        post_id: "",
        comment: ""
  }

    handleInputChange = (evt) => {
    const value = evt.target.value;
    const name = evt.target.name;

    this.setState({
      [name]: value
    })
  }


    render() {
    return <div>{
      <form onSubmit={(evt) => this.props.handleSubmit(evt, this.state)}>
        <label> post_id: </label><input type="text" name="post_id" value={this.state.comment.post_id}></input>
        <label> Add a comment: </label><input type="text" name="comment" value={this.state.comment.comment} onChange={this.handleInputChange}></input>
        <button type="submit" value="submit">submit</button>
      </form>
    }</div>
  }
}

export default CommentForm;
