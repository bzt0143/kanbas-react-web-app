import ModulesControls from './ModulesControls';
import LessonControlButtons from './LessonControlButtons';
import { BsGripVertical } from 'react-icons/bs';
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Modules() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    
    <ul id="wd-modules" className="list-group rounded-0">
       <div className="d-flex justify-content-start mb-3">
        <ModulesControls />
      </div>
      <br />
      <br />
        {modules
          .filter((module: any) => module.course === courseId)
          .map((module: any) => (
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {module.name}
            </div>
            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson.name}
                    <LessonControlButtons />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
  );
}
