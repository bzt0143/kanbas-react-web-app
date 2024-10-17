import { Link, useParams, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const { courseId } = useParams();  
  const { pathname } = useLocation(); 

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const linkPath = `/Kanbas/Courses/${courseId}/${link}`; 
        const isActive = pathname.includes(link);  

        return (
          <Link
            key={link}
            to={linkPath}
            className={`list-group-item ${isActive ? "active" : "text-danger"} border border-0`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
