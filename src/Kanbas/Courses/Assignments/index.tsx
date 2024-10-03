import { FaPlus } from 'react-icons/fa';
import { BsGripVertical } from 'react-icons/bs';
import LessonControlButtons from '../Modules/LessonControlButtons';
import { LiaBookSolid, LiaCogSolid } from 'react-icons/lia';

export default function Assignments() {
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

      <ul id='wd-assignments' className='list-group rounded-0'>
        <li className='wd-assignment list-group-item p-0 mb-5 fs-5 border-gray'>
          <div className='wd-title p-3 ps-2 bg-secondary'>
            <BsGripVertical className='me-2 fs-3' />
            ASSIGNMENTS
          </div>
          <ul className='wd-lessons list-group rounded-0'>
            <li className='wd-lesson list-group-item p-3 ps-1 d-flex align-items-center'>
              <div className='d-flex flex-column justify-content-center me-3'>
                <BsGripVertical className='fs-3' />
              </div>
              <div className='d-flex flex-column justify-content-center me-3'>
                <LiaBookSolid className='fs-3 text-success' />
              </div>

              {/* Assignment 1 */}
              <div className='flex-grow-1'>
                <span className='assignment-content'>
                  <a
                    className='wd-assignment-link'
                    href='#/Kanbas/Courses/1234/Assignments/123'
                  >
                    <strong>A1</strong>
                  </a>
                  <br />
                  Multiple Modules | <strong>Not available until</strong> May 6
                  at 12:00am
                  <br />
                  <strong>Due</strong> May 13 at 11:59pm | 100 pts
                </span>
              </div>
              <div className='d-flex flex-column justify-content-center'>
                <LessonControlButtons />
              </div>
            </li>

            {/* Assignments 2 */}
            <li className='wd-lesson list-group-item p-3 ps-1 d-flex align-items-center'>
              <div className='d-flex flex-column justify-content-center me-3'>
                <BsGripVertical className='fs-3' />
              </div>
              <div className='d-flex flex-column justify-content-center me-3'>
                <LiaBookSolid className='fs-3 text-success' />
              </div>
              <div className='flex-grow-1'>
                <span className='assignment-content'>
                  <strong>A2</strong>
                  <br />
                  Multiple Modules | <strong>Not available until</strong> May 13
                  at 12:00am
                  <br />
                  <strong>Due</strong> May 20 at 11:59pm | 100 pts
                </span>
              </div>
              <div className='d-flex flex-column justify-content-center'>
                <LessonControlButtons />
              </div>
            </li>

            {/* Assignments 2 */}
            <li className='wd-lesson list-group-item p-3 ps-1 d-flex align-items-center'>
              <div className='d-flex flex-column justify-content-center me-3'>
                <BsGripVertical className='fs-3' />
              </div>
              <div className='d-flex flex-column justify-content-center me-3'>
                <LiaBookSolid className='fs-3 text-success' />
              </div>
              <div className='flex-grow-1'>
                <span className='assignment-content'>
                  <strong>A3</strong>
                  <br />
                  Multiple Modules | <strong>Not available until</strong> May 30
                  at 12:00am
                  <br />
                  <strong>Due</strong> May 30 at 11:59pm | 100 pts
                </span>
              </div>
              <div className='d-flex flex-column justify-content-center'>
                <LessonControlButtons />
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
