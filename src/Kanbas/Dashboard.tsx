import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dashboard() {
  return (
    <div id='wd-dashboard'>
      <h1 id='wd-dashboard-title'>Dashboard</h1> <hr />
      <h2 id='wd-dashboard-published'>Published Courses (7)</h2> <hr />
      {/* Bootstrap Grid*/}
      <div id='wd-dashboard-courses' className='container'>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4'>
          <div className='col'>
            <div className='card h-100'>
              <Link
                className='wd-dashboard-course-link'
                to='/Kanbas/Courses/1234/Home'
              >
                <img
                  src='/images/reactjs.jpg'
                  className='card-img-top img-fluid img-fixed'
                  alt='React JS'
                />
                <div className='card-body'>
                  <h5 className='card-title'>CS1234 React JS</h5>
                  <p className='card-text'>Full Stack software developer</p>
                </div>
              </Link>
              <div className='card-footer'>
                <Link
                  className='wd-dashboard-course-link'
                  to='/Kanbas/Courses/1234/Home'
                >
                  <button className='btn btn-primary'>Go</button>
                </Link>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card h-100'>
              <Link
                className='wd-dashboard-course-link'
                to='/Kanbas/Courses/001/Home'
              >
                <img
                  src='/images/oop.jpg'
                  className='card-img-top img-fluid img-fixed'
                  alt='OOP'
                />
                <div className='card-body'>
                  <h5 className='card-title'>
                    CS001 Object-Oriented Programming
                  </h5>
                  <p className='card-text'>Full Stack software developer</p>
                </div>
              </Link>
              <div className='card-footer'>
                <button className='btn btn-primary'>Go</button>
              </div>
            </div>
          </div>

          {/* Course 3 */}
          <div className='col'>
            <div className='card h-100'>
              <Link
                className='wd-dashboard-course-link'
                to='/Kanbas/Courses/002/Home'
              >
                <img
                  src='/images/mobile.jpg'
                  className='card-img-top img-fluid img-fixed'
                  alt='Mobile Dev'
                />
                <div className='card-body'>
                  <h5 className='card-title'>CS002 Mobile Development</h5>
                  <p className='card-text'>Full Stack software developer</p>
                </div>
              </Link>
              <div className='card-footer'>
                <button className='btn btn-primary'>Go</button>
              </div>
            </div>
          </div>

          {/* Course 4 */}
          <div className='col'>
            <div className='card h-100'>
              <Link
                className='wd-dashboard-course-link'
                to='/Kanbas/Courses/003/Home'
              >
                <img
                  src='/images/ml.jpg'
                  className='card-img-top img-fluid img-fixed'
                  alt='Machine Learning'
                />
                <div className='card-body'>
                  <h5 className='card-title'>CS003 Machine Learning</h5>
                  <p className='card-text'>Full Stack software developer</p>
                </div>
              </Link>
              <div className='card-footer'>
                <button className='btn btn-primary'>Go</button>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card h-100'>
              <Link
                className='wd-dashboard-course-link'
                to='/Kanbas/Courses/004/Home'
              >
                <img
                  src='/images/ds.jpg'
                  className='card-img-top img-fluid img-fixed'
                  alt='Data Science'
                />
                <div className='card-body'>
                  <h5 className='card-title'>CS004 Data Science</h5>
                  <p className='card-text'>Full Stack software developer</p>
                </div>
              </Link>
              <div className='card-footer'>
                <button className='btn btn-primary'>Go</button>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card h-100'>
              <Link
                className='wd-dashboard-course-link'
                to='/Kanbas/Courses/005/Home'
              >
                <img
                  src='/images/ds.jpg'
                  className='card-img-top img-fluid img-fixed'
                  alt='Distributed Systems'
                />
                <div className='card-body'>
                  <h5 className='card-title'>CS005 Distributed Systems</h5>
                  <p className='card-text'>Full Stack software developer</p>
                </div>
              </Link>
              <div className='card-footer'>
                <button className='btn btn-primary'>Go</button>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card h-100'>
              <Link
                className='wd-dashboard-course-link'
                to='/Kanbas/Courses/006/Home'
              >
                <img
                  src='/images/ds.jpg'
                  className='card-img-top img-fluid img-fixed'
                  alt='Computer Networks'
                />
                <div className='card-body'>
                  <h5 className='card-title'>CS006 Computer Networks</h5>
                  <p className='card-text'>Full Stack software developer</p>
                </div>
              </Link>
              <div className='card-footer'>
                <button className='btn btn-primary'>Go</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
