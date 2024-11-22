import ModulesControls from './ModulesControls';
import LessonControlButtons from './LessonControlButtons';
import { BsGripVertical } from 'react-icons/bs';
import { useParams } from 'react-router';
import React, { useState } from 'react';
import ModuleControlButtons from './ModuleControlButtons';
import { setModules, addModule, editModule, updateModule, deleteModule } from './reducer';
import { useSelector, useDispatch } from 'react-redux';
import ProtectedContent from '../ProtectedContent';
import * as coursesClient from "../client";
import { useEffect } from 'react';
import * as modulesClient from "./client";
import { useCallback } from 'react';

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState('');
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
  // const fetchModules = async () => {
  //   const modules = await coursesClient.findModulesForCourse(cid as string);
  //   dispatch(setModules(modules));
  // };
  const fetchModules = useCallback(async () => {
    if (!cid) return;
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  }, [cid, dispatch]);
  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };
  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };
  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };

  
  useEffect(() => {
    fetchModules();
  }, [fetchModules]); 
  

  return (
    <ul id='wd-modules' className='list-group rounded-0'>
      <div className='d-flex justify-content-start mb-3'>
      <ProtectedContent requiredRole={['FACULTY']}>
        <ModulesControls
          moduleName={moduleName}
          setModuleName={setModuleName}
          addModule={createModuleForCourse} 
        />
        </ProtectedContent>
      </div>
      <br />
      <br />

      {modules
        .map((module: any) => (
          <li className='wd-module list-group-item p-0 mb-5 fs-5 border-gray'>
            <div className='wd-title p-3 ps-2 bg-secondary'>
              <BsGripVertical className='me-2 fs-3' />
              {!module.editing && module.name}
              {module.editing && (
                <input
                  className='form-control w-50 d-inline-block'
                  onChange={(e) =>
                    dispatch(updateModule({ ...module, name: e.target.value }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      saveModule({ ...module, editing: false });
                    }
                  }}
                  defaultValue={module.name}
                />
              )}
              <ProtectedContent requiredRole={['FACULTY']}>
              <ModuleControlButtons
                moduleId={module._id}
                deleteModule={(moduleId) => removeModule(moduleId)}
                editModule={(moduleId) => dispatch(editModule(moduleId))}
              />
              </ProtectedContent>
            </div>
            {module.lessons && (
              <ul className='wd-lessons list-group rounded-0'>
                {module.lessons.map((lesson: any) => (
                  <li className='wd-lesson list-group-item p-3 ps-1'>
                    <BsGripVertical className='me-2 fs-3' />
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
