import React from "react";

class CommentForm extends React.Component {

    state = {
        post: "",
        comment: ""
  }

    handleInputChange = (evt) => {
    const value = evt.target.value;
    const name = evt.target.name;

    // this.input = React.createRef()

    this.setState({
      [name]: value,
      // post: this
    })
  }


    render() {
      console.log(this.state)
    return <div>{
      <form onSubmit={(evt) => this.props.handleSubmit(evt, this.state)}>
        <select name="post" defaultValue={this.props.post} onChange={this.handleInputChange}></select>
        <label> Add a comment: </label><input type="text" name="comment" value={this.state.comment.comment} onChange={this.handleInputChange}></input>
        <button type="submit" value="submit">submit</button>
      </form>
    }</div>
  }
}

export default CommentForm;
