const Course =(props)=>{
    return (<div style={{background : props.course.isCompleted ? "green" : "white"}}> <h1 >{props.course.courseName}</h1>
    <button onClick={()=>props.completeCourse(props.course.id)}>Completed</button>
     <button onClick={()=>props.deleteCourse(props.course.id)}>x</button>
     </div>)
}
export default Course