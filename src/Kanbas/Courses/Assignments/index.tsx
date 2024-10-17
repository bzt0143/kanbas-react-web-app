import { FaPlus } from 'react-icons/fa';
import { BsGripVertical } from 'react-icons/bs';
import { LiaBookSolid } from 'react-icons/lia';
import LessonControlButtons from '../Modules/LessonControlButtons';
import { useParams } from 'react-router';
import * as db from '../../Database';

export default function Assignments() {
  const { courseId } = useParams(); 
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  ); 

  return (
    <div id='wd-assignments' className='container mt-4'>
      {/* Top Bar with Search and Add Buttons */}
      <div className='d-flex justify-content-between align-items-center mb-4'>
        <div className='input-group' style={{ width: '50%' }}>
          <input
            type='text'
            className='form-control'
            placeholder='Search for Assignments'
            aria-label='Search for Assignments'
          />
        </div>

        <div>
          <button className='btn btn-outline-secondary me-2'>
            <FaPlus className='me-1' /> Group
          </button>
          <button className='btn btn-danger'>
            <FaPlus className='me-1' /> Assignment
          </button>
        </div>
      </div>

      {/* Dynamic Assignment List */}
      <ul id='wd-assignments' className='list-group rounded-0'>
        <div className='wd-title p-3 ps-2 bg-secondary'>
          <BsGripVertical className='me-2 fs-3' />
          ASSIGNMENTS
        </div>
        {assignments.map((assignment) => (
          <li
            key={assignment._id}
            className='wd-assignment list-group-item p-0 fs-5 border-gray'
          >
            <ul className='wd-lessons list-group rounded-0'>
              <li className='wd-lesson list-group-item p-3 ps-1 d-flex align-items-center'>
                <div className='d-flex flex-column justify-content-center me-3'>
                  <BsGripVertical className='fs-3' />
                </div>
                <div className='d-flex flex-column justify-content-center me-3'>
                  <LiaBookSolid className='fs-3 text-success' />
                </div>

                {/* Assignment Details */}
                <div className='flex-grow-1'>
                  <span className='assignment-content'>
                    <a
                      className='wd-assignment-link'
                      href={`#/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                    >
                      <strong>{assignment.title}</strong>
                    </a>
                    <br />
                    Multiple Modules | <strong>Not available until</strong>{' '}
                    {assignment.startDate}
                    <br />
                    <strong>Due</strong> {assignment.dueDate} |{' '}
                    {assignment.points} pts
                  </span>
                </div>
                <div className='d-flex flex-column justify-content-center'>
                  <LessonControlButtons />
                </div>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
