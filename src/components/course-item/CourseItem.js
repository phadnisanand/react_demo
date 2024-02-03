import "./CourseItem.css";

import Card from "../UI/card/Card";

function CourseItem(props) {
  return (
    <li>
      <Card>{props.coursename}</Card>
    </li>
  );
}

export default CourseItem;
