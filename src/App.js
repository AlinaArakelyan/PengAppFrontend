import React from 'react';
import './App.css';
import Header from "/Users/flatironschoolbrooklyn/peng_frontend/src/Components/Header.js";
import { Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import UserList from './Containers/UserList.js';
import PostList from './Containers/PostList.js';

class App extends React.Component {

  state = {
    users: [],
    posts: [],
    comments: []
  }

  componentDidMount() {
    Promise.all([
      fetch(`http://localhost:3000/posts`),
      fetch('http://localhost:3000/users')
    ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2]) => this.setState({
        posts: data1,
        users: data2
      }));
  }



  addNewPost = (evt, postObj) => {
    evt.preventDefault()
    fetch(`http://localhost:3000/posts`, {
      method: 'POST',
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
      method: 'DELETE',
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
    fetch(`http://localhost:3000/posts/${postObj.id}`, {
      method:'PATCH',
     headers: { 
         'Content-type': 'application/json',
         'accept': 'application/json'
     },
     body: JSON.stringify({
          likes: ++ postObj.likes
      })
    })
    .then(resp => resp.json())
      .then(json_resp => { 
        postObj.likes = json_resp
      })
  }

  addNewComment = (evt, commentObj) => {
    evt.preventDefault()
    fetch(`http://localhost:3000/comments`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        post_id: commentObj.post_id,
        comment: commentObj.comment
      })
    })
      .then(resp => resp.json())
      .then(json_resp =>
        this.setState({
          posts: [...this.state.comments, json_resp]
        })
      )
  }

  render() {
    return (
      <div body-bg="" >
        <Header />
        <aside>
          <ul> <NavLink to="/">My Page</NavLink></ul>
          <ul><NavLink to="/Users">Alumni</NavLink></ul>
          <ul> <NavLink to="/Posts">Posts</NavLink></ul>
          <Switch>
            <Route path="/Users">
              <UserList users={this.state.users} />
            </Route>
            <Route path="/Posts">
              <PostList posts={this.state.posts} handleSubmit={this.addNewPost} handleDelete={this.deletePost} onClick={this.increaseLikes} addComment={this.addNewComment} />} >
               </Route>
          </Switch>
        </aside>
      </div>
    )
  }





}

export default App