import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addAssignment } from './reducer';
import * as db from '../../Database';

export default function AssignmentEditor() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get assignment data if editing an existing assignment
  const existingAssignment = db.assignments.find(
    (assignment) => assignment.course === cid
  );

  // Initialize state with assignment details if available, otherwise default values
  const [assignment, setAssignment] = useState({
    title: existingAssignment?.title || 'Untitled Assignment',
    description: existingAssignment?.description || '',
    points: existingAssignment?.points || 0,
    dueDate: existingAssignment?.dueDate || '',
    availableFromDate: existingAssignment?.startDate || '',
    availableUntilDate: existingAssignment?.dueDate || ''
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAssignment((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Save action
  const handleSave = () => {
    // Dispatch the addAssignment action with the current assignment data
    dispatch(addAssignment({ ...assignment, course: cid }));
    navigate(`/Kanbas/Courses/${cid}/Assignments`); // Navigate back to assignments screen
  };

  return (
    <div id='wd-assignments-editor' className='container mt-4'>
      {/* Assignment Name */}
      <div className='mb-4'>
        <label htmlFor='wd-name' className='form-label'>
          Assignment Name
        </label>
        <input
          id='wd-name'
          name='title'
          value={assignment.title}
          onChange={handleChange}
          className='form-control'
        />
      </div>

      {/* Description */}
      <div className='mb-4'>
        <textarea
          id='wd-description'
          name='description'
          className='form-control'
          rows={8}
          value={assignment.description}
          onChange={handleChange}
        />
      </div>

      {/* Points and Assignment Group */}
      <div className='row mb-4'>
        <div className='col-md-6 row'>
          <label htmlFor='wd-points' className='col-md-3 col-form-label'>
            Points
          </label>
          <div className='col-md-9'>
            <input
              id='wd-points'
              name='points'
              type='number'
              value={assignment.points}
              onChange={handleChange}
              className='form-control'
            />
          </div>
        </div>
      </div>

      {/* Assign and Due Dates */}
      <div className='row mb-4'>
        <div className='col-md-6 row'>
          <label
            htmlFor='wd-display-grade-as'
            className='col-md-3 col-form-label'
          >
            Assign
          </label>
          <div className='col-md-9'>
            <div className='card p-4 mb-4'>
              <div className='row mb-4'>
                <div className='col-12 mb-3'>
                  <label htmlFor='wd-assign-to' className='form-label'>
                    Assign To
                  </label>
                  <select id='wd-assign-to' className='form-control'>
                    <option>Everyone</option>
                    <option>Specific Students</option>
                  </select>
                </div>
              </div>
              <div className='row mb-4'>
                <div className='col-12 mb-3'>
                  <label htmlFor='wd-available-from' className='form-label'>
                    Available From
                  </label>
                  <input
                    id='wd-available-from'
                    name='availableFromDate'
                    type='date'
                    value={assignment.availableFromDate}
                    onChange={handleChange}
                    className='form-control'
                  />
                </div>
                <div className='col-12'>
                  <label htmlFor='wd-available-until' className='form-label'>
                    Until
                  </label>
                  <input
                    id='wd-available-until'
                    name='availableUntilDate'
                    type='date'
                    value={assignment.availableUntilDate}
                    onChange={handleChange}
                    className='form-control'
                  />
                </div>
                <div className='col-12'>
                  <label htmlFor='wd-due-date' className='form-label'>
                    Due
                  </label>
                  <input
                    id='wd-due-date'
                    name='dueDate'
                    type='date'
                    value={assignment.dueDate}
                    onChange={handleChange}
                    className='form-control'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className='text-end'>
        <button
          onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments`)}
          className='btn btn-secondary me-2'
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className='btn btn-success'
        >
          Save
        </button>
      </div>
    </div>
  );
}


