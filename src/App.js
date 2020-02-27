import React from 'react';
import './App.css';
import Header from "./Components/Header.js";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import UserList from './Containers/UserList.js';
import PostList from './Containers/PostList.js';
import Login from "./Components/Login.js";
import Signup from "./Components/Signup.js"

class App extends React.Component {

  state = {
    isLoggedIn: false,
    user: {},
    posts: [],
    comments: []
  }

  loginStatus = () => {
    fetch('http://localhost:3000/logged_in', 
   {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  // componentDidMount() {
  //   this.loginStatus()
  // }

  componentDidMount() {
    Promise.all([
      fetch(`http://localhost:3000/posts`),
      fetch('http://localhost:3000/users'),
      this.loginStatus()
    ])
      .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2, data3]) => this.setState({
        posts: data1,
        users: data2,
        isLoggedIn: data3
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
          // likes: ++ postObj.likes
      })
    })
    .then(resp => resp.json())
      .then(json_resp => { 
        let modifiedArray = this.state.posts.map((post) => {
          if (post.id === json_resp.id) {
            return json_resp
          } else {
            return post
          }
        })

        this.setState({
          posts: modifiedArray
        })
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

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }
handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

  render() {
    return (
      <div body-bg="" >
        <Header />
        <aside>
          <ul> <NavLink to="/">My Page</NavLink></ul>
          <ul><NavLink to="/Users">Alumni</NavLink></ul>
          <ul> <NavLink to="/Posts">Posts</NavLink></ul>
          <BrowserRouter>
          <Switch>
            <Route path="/Users">
              <UserList users={this.state.users} />
            </Route>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={Signup}/>
            <Route path="/Posts">
              <PostList posts={this.state.posts} handleSubmit={this.addNewPost} handleDelete={this.deletePost} onClick={this.increaseLikes} addComment={this.addNewComment} />} >
               </Route>
          </Switch>
          </BrowserRouter>
        </aside>
      </div>
    )
  }





}

export default App