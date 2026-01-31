import React, { Component } from 'react'
import'./App.css'
import'./lib.js'
export default class App extends Component {
 constructor(props: any) {
    super(props)
    this.state = {data:[]};
    this.getData=this.getData.bind(this);

  }
  render() {
    return (
      <div>
        <div className='header'>Example forAPI's,fetch Function</div>
         <div className='section'></div>
         <div className="footer">Copyright@2026.All rights reserved-Sai krishna</div>
      </div>
    )
  }
}
