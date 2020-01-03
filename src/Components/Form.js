import React from "react";

class Form extends React.Component {

    state = {
        user: "",
        post: ""
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
        <label> Your name: </label><input type="text" name="user" value={this.state.user.name} onChange={this.handleInputChange}></input>
        <label> What's on your mind?: </label><input type="text" name="post" value={this.state.post.post} onChange={this.handleInputChange}></input>
        <button type="submit" value="submit">submit</button>
      </form>
    }</div>
  }
}

export default Form;
