import React from 'react';
import './App.css';
import PostList from '/Users/flatironschoolbrooklyn/peng_frontend/src/Containers/PostList.js'
import Header from "/Users/flatironschoolbrooklyn/peng_frontend/src/Components/Header.js"


class App extends React.Component {

  state = {
    users: [],
    posts: [],
    likes: []
  }

  componentDidMount() {
    fetch(`http://localhost:3000/posts`)
      .then(r => r.json())
      .then((postsArr) => {
        this.setState({
          posts: postsArr
        })
      }
    )
  }



  addNewPost = (evt, postObj) => {
    evt.preventDefault()
    fetch(`http://localhost:3000/posts`, {
      method:'POST',
     headers: { 
         'Content-type': 'application/json',
         'accept': 'application/json'
     },
     body: JSON.stringify({
       user: postObj.user,
       post: postObj.post
      })
    })
    .then(resp => resp.json())
    .then(json_resp =>
    this.setState({
      posts: [...this.state.posts, json_resp]
    })
    )
  }

  deletePost = (postObj) => {
    fetch(`http://localhost:3000/posts/${postObj.id}`, {
      method:'DELETE',
     headers: { 
         'Content-type': 'application/json',
         'accept': 'application/json'
     },
    })
    .then(resp => resp.json())
      .then(json_resp => this.setState({
      posts: [...this.state.posts.filter(post => post.id !== postObj.id)] 
    }))
  }

  increaseLikes = (postObj) => {
    console.log("Add a like", postObj)
  }

  render() {
    return (
      <div body-bg="" >
        <Header class=".img-fluid. max-width: 100%;"/>
        <PostList posts={this.state.posts} handleSubmit={this.addNewPost} handleDelete={this.deletePost} onClick={this.increaseLikes}/>
      </div>
    )
  }





}


export default App