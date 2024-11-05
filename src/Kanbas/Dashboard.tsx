
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProtectedContent from './Courses/ProtectedContent';
import { enrollCourse, unenrollCourse } from './enrollmentReducer';
import { useState, useEffect } from 'react';

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const dispatch = useDispatch();

  console.log('Current User:', currentUser);
  console.log('Courses:', courses);
  console.log('Enrollments:', enrollments);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const enrolledCourses = courses.filter((course) =>
    enrollments.some(
      (enrollment: { user: string; course: string }) =>
        enrollment.user === currentUser._id && enrollment.course === course._id
    )
  );

  const [filteredCourses, setFilteredCourses] = useState(enrolledCourses);

  const handleEnrollmentToggle = (courseId: string) => {
    const isEnrolled = enrollments.some(
      (enrollment: { user: string; course: string }) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );

    if (isEnrolled) {
      dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
    } else {
      dispatch(enrollCourse({ userId: currentUser._id, courseId }));
    }
  };

  const toggleCourseView = () => {
    if (showAllCourses) {
      setFilteredCourses(enrolledCourses);
    } else {
      setFilteredCourses(courses);
    }
    setShowAllCourses(!showAllCourses);
  };

  useEffect(() => {
    if (showAllCourses) {
      setFilteredCourses(courses);
    } else {
      const updatedEnrolledCourses = courses.filter((course) =>
        enrollments.some(
          (enrollment: { user: string; course: string }) =>
            enrollment.user === currentUser._id && enrollment.course === course._id
        )
      );
      setFilteredCourses(updatedEnrolledCourses);
    }
  }, [showAllCourses, courses, enrollments, currentUser._id]); 

  return (
    <div id='wd-dashboard'>
      <h1 id='wd-dashboard-title'>Dashboard</h1> <hr />
      {currentUser.role === 'STUDENT' && (
        <button
          className='btn btn-info float-end'
          onClick={toggleCourseView}
        >
          {showAllCourses ? 'Show Enrolled Courses' : 'Show All Courses'}
        </button>
      )}
      <ProtectedContent requiredRole={['FACULTY']}>
        <h5>
          New Course
          <button
            className='btn btn-primary float-end'
            id='wd-add-new-course-click'
            onClick={addNewCourse}
          >
            Add
          </button>
          <button
            className='btn btn-warning float-end me-2'
            onClick={updateCourse}
            id='wd-update-course-click'
          >
            Update
          </button>
        </h5>
        <hr />
        <input
          value={course.name}
          className='form-control mb-2'
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <textarea
          value={course.description}
          className='form-control'
          onChange={(e) => setCourse({ ...course, description: e.target.value })}
        />
      </ProtectedContent>
      <h2 id='wd-dashboard-published'>Published Courses ({filteredCourses.length})</h2>
      <hr />
      <div id='wd-dashboard-courses' className='row'>
        <div className='row row-cols-1 row-cols-md-5 g-4'>
          {filteredCourses.map((course) => {
            const isEnrolled = enrollments.some(
              (enrollment: { user: string; course: string }) =>
                enrollment.user === currentUser._id &&
                enrollment.course === course._id
            );

            return (
              <div className='wd-dashboard-course col' style={{ width: '300px' }} key={course._id}>
                <div className='card rounded-3 overflow-hidden'>
                  <Link
                    to={isEnrolled ? `/Kanbas/Courses/${course._id}/Home` : '#'}
                    className='wd-dashboard-course-link text-decoration-none text-dark'
                  >
                    <img
                      src={`/images/${course.image}`}
                      alt={course.name}
                      width='100%'
                      height={160}
                    />
                    <div className='card-body'>
                      <h5 className='wd-dashboard-course-title card-title'>
                        {course.name}
                      </h5>
                      <p
                        className='wd-dashboard-course-title card-text overflow-y-hidden'
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}
                      </p>
                      {currentUser.role === 'STUDENT' && (
                        <button
                          className={`btn ${isEnrolled ? 'btn-danger' : 'btn-success'}`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleEnrollmentToggle(course._id);
                          }}
                        >
                          {isEnrolled ? 'Unenroll' : 'Enroll'}
                        </button>
                      )}
                      {isEnrolled && <button className='btn btn-primary'>Go</button>}
                      <ProtectedContent requiredRole={['FACULTY']}>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className='btn btn-danger float-end'
                          id='wd-delete-course-click'
                        >
                          Delete
                        </button>
                        <button
                          id='wd-edit-course-click'
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className='btn btn-warning me-2 float-end'
                        >
                          Edit
                        </button>
                      </ProtectedContent>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
