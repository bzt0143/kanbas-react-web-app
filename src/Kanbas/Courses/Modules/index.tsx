import ModulesControls from './ModulesControls';
import LessonControlButtons from './LessonControlButtons';
import { BsGripVertical } from 'react-icons/bs';

export default function Modules() {
  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <ul id='wd-modules' className='list-group rounded-0'>
        <li className='wd-module list-group-item p-0 mb-5 fs-5 border-gray'>
          <div className='wd-title p-3 ps-2 bg-secondary'>
            <BsGripVertical className='me-2 fs-3' />
            Week 1, Lecture 1 - Course Introduction, Syallbus, Agenda
          </div>
          <ul className='wd-lessons list-group rounded-0'>
            <li className='wd-lesson list-group-item p-3 ps-1'>
              <BsGripVertical className='me-2 fs-3' />
              LEARNING OBJECTIVES
              <LessonControlButtons />
            </li>
            <li className='wd-lesson list-group-item p-3 ps-1'>
              <BsGripVertical className='me-2 fs-3' />
              Introduction to the course
              <LessonControlButtons />
            </li>
            <li className='wd-lesson list-group-item p-3 ps-1'>
              <BsGripVertical className='me-2 fs-3' />
              Learn what is Web Development
              <LessonControlButtons />
            </li>
            <li className='wd-lesson list-group-item p-3 ps-1'>
              <BsGripVertical className='me-2 fs-3' />
              READING
              <LessonControlButtons />
            </li>
            <li className='wd-lesson list-group-item p-3 ps-1'>
              <BsGripVertical className='me-2 fs-3' />
              SLIDES
              <LessonControlButtons />
            </li>
          </ul>
        </li>
        <li className='wd-module list-group-item p-0 mb-5 fs-5 border-gray'>
          <div className='wd-title p-3 ps-2 bg-secondary'>
            <BsGripVertical className='me-2 fs-3' />
            Week 1, Lecture 2- Formatting Userinterface with HTML
          </div>
          <ul className='wd-lessons list-group rounded-0'>
            <li className='wd-lesson list-group-item p-3 ps-1'>
              <BsGripVertical className='me-2 fs-3' />
              LEARNING OBJECTIVES
              <LessonControlButtons />
            </li>
            <li className='wd-lesson list-group-item p-3 ps-1'>
              <BsGripVertical className='me-2 fs-3' />
              Introduction to HTML and the DOM
              <LessonControlButtons />
            </li>
            <li className='wd-lesson list-group-item p-3 ps-1'>
              <BsGripVertical className='me-2 fs-3' />
              Creating an RTP Application with Node.js
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
