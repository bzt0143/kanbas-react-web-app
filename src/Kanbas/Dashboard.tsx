import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>    
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/oop.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/001/Home">
              CS001 Object-Oriented Programming
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/001/Home"> Go </Link>
          </div>    
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/mobile.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/002/Home">
              CS002 Mobile development
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/002/Home"> Go </Link>
          </div>    
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/ml.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/003/Home">
              CS003 Machine Learning
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/003/Home"> Go </Link>
          </div>    
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/ds.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/004/Home">
              CS004 Data Science 
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/004/Home"> Go </Link>
          </div>    
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/ds.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/005/Home">
              CS005 Distributed Systems
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/005/Home"> Go </Link>
          </div>    
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/ds.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/006/Home">
              CS006 Computer network
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/006/Home"> Go </Link>
          </div>    
        </div>
      </div>
    </div>
  );
}
