import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react";
import Header from './components/header'
import './css/style.css'
import NewsItems from './components/news_list'
import JSON from './db.json'

class Index extends Component {
    state={
        newsItems:JSON
    }
  render() {
    return <div><Header/>
    <NewsItems news={this.state.newsItems}>
      hello world bro
      </NewsItems></div>;
  }
}
ReactDOM.render(<Index/>,document.getElementById('root')) 