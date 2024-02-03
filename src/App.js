import "./App.css";

import Header from "./components/header/Header";
import CourseItem from "./components/course-item/CourseItem";
import Card from "./components/UI/card/Card";

function App() {
  let courses = ["ReactJS", "HTML", "Basics of CSS", "Java", ".Net Core"];

  return (
    <div id="300">
      <Header title="Udemy" />

      <ol>
        <CourseItem coursename={courses[0]}></CourseItem>
        <CourseItem coursename={courses[1]}></CourseItem>
        <CourseItem coursename={courses[2]}></CourseItem>
        <CourseItem coursename={courses[3]}></CourseItem>
        <CourseItem coursename={courses[4]}></CourseItem>
      </ol>

      <hr />
      <Card>
        <h2>Login</h2>
        <button>Action</button>
        <p>this is my para.</p>
      </Card>


      <Card>
        <h2>Reivews</h2>
        <button>fetch reviews</button>
      </Card>
    </div>
  );
}

export default App;
