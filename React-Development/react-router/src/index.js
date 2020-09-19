import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom'
import Profiles from './components/profiles'
import Posts from './components/posts'
import Home from './components/home'

const Index=()=>
{
  return(
    <div><Router>
      <header>
        {/* header */}
        <Link to='/'>Home</Link><br/>
        <Link to='/post'>Post</Link><br/>
        <Link to='/profile'>Profile</Link><br/><hr/>
      </header>
      <Route component={Profiles} path='/profile'></Route>
      <Route component={Home} path='/' exact></Route>
      <Route component={Posts} path='/post'></Route>

      </Router></div>
  )
}
ReactDOM.render(<Index/>,document.getElementById("root"))
