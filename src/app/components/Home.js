"use strict"

import React, { Component } from "react";

export class Home extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      authors: [],
      authorName: ''
   };
  }

  componentWillMount(){
    var url = 'https://randomuser.me/api/?results=10'
    fetch(url)
    .then(res => res.json())
    .then((res => {
      this.setState({
        authors: res,
        authorName: res[0]
      })
    }))
  }


    render() {
    console.log(this.state.authors)
      return (

        <div>

              <h1>Authors</h1>
              <ul>{}</ul>

        </div>
      );
    }
  }
