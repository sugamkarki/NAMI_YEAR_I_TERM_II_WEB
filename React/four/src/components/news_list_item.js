import  { Component } from 'react'
import React from "react";

// const NewsItem=(props)=>
// {
//     console.log(props.item)
//     return <div></div>
// }

class NewsItem extends Component {
    constructor(props)
    {
        super()
        this.props=props;
        console.log(this.props.item)
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default NewsItem