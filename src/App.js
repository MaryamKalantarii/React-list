import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Course from "./Course";

function App() {

  const [courseList,setCourseList] = useState([])
  const [newCorse,setNewCourse]=useState("")
  const handelchange = (event)=>{
    setNewCourse(event.target.value)
  }
  const addCourse=() =>{

    const course = {
      id : courseList.length === 0 ? 1 : courseList[courseList.length -1 ].id + 1 ,
      courseName :newCorse,
      isCompleted : false
    }
    setCourseList( [...courseList , course])
    
  }
  const deleteCourse =(courseId) =>{
    setCourseList(courseList.filter((course)=> courseId !== course.id ))
  }

  const completeCourse = (courseId)=>{
    const newCourseList = courseList.map((course)=>{
      if (course.id === courseId)
       return {...course , isCompleted : !course.isCompleted}
      else 
        return course
    })

    setCourseList(newCourseList)
  }
  return (
    <div className="App">
      <div className="add-course">
        <input type="text" onChange={handelchange}></input>
        <button onClick={addCourse}>Add Course</button>
      </div>
      <div className="list">
        { courseList.map ((course , index) =>{
          return (
            <Course key={index} course={course} 
            deleteCourse={deleteCourse} 
            completeCourse={completeCourse}
            />
          )
        })}
  
      </div>
    </div>
  );
}

export default App;
