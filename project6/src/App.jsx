import React, { Component } from 'react'
import CourseCard from './CourseCard';


export default class App extends Component {
  constructor(){
    super();
    this.state = {courses:[
      {name:"Data Structure and Algorithm",duration:"40hrs", price:"RS.10,000",img:"1.jpg"},
      {name:"Ai for Mathematics",duration:"30hrs", price:"RS.18,000",img:"2.jpg"},
      {name:"Language Skills for Engineers",duration:"40hrs", price:"RS.1,250.99",img:"3.jpg"},
      {name:"Front End Development using React",duration:"35hrs", price:"RS.20,000",img:"4.jpg"},
    ]};
  }
  render() {
    const{courses} = this.state;
    return (
      <div>
        <div className='app'>
          <div className='header'>Course Catalog - 2500031167 - Nishant</div>
          <div className='section'>
            {courses.map((data)=>(
              <CourseCard data = {data} />
            ))}
          </div>
          <div className='footer'>Designed by sai krishna</div>
        </div>
      </div>
    )
  }
}