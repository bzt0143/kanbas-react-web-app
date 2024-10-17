import { useParams, Link } from 'react-router-dom';
import * as db from '../../Database';

export default function AssignmentEditor() {
  const { courseId } = useParams();

  const assignment = db.assignments.find(
    (assignment) => assignment.course === courseId
  );

  return (
    <div id='wd-assignments-editor' className='container mt-4'>
      {/* Assignment Name */}
      <div className='mb-4'>
        <label htmlFor='wd-name' className='form-label'>
          Assignment Name
        </label>
        <input
          id='wd-name'
          defaultValue={assignment?.title || 'Untitled Assignment'}
          className='form-control'
        />
      </div>

      {/* Description */}
      <div className='mb-4'>
        <textarea
          id='wd-description'
          className='form-control'
          rows={8}
          defaultValue={`The assignment is available online.\n
Submit a link to the landing page of your Web application running on Netlify.\n
The landing page should include the following:\n
• Your full name and section\n
• Links to each of the lab assignments\n
• Link to the Kanbas application\n
• Links to all relevant source code repositories\n
The Kanbas application should include a link to navigate back to the landing page.`}
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
              type='number'
              defaultValue={assignment?.points || 0}
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
                    type='date'
                    defaultValue={assignment?.startDate || ''}
                    className='form-control'
                  />
                </div>
                <div className='col-12'>
                  <label htmlFor='wd-available-until' className='form-label'>
                    Until
                  </label>
                  <input
                    id='wd-available-until'
                    type='date'
                    defaultValue='2024-05-20'
                    className='form-control'
                  />
                </div>
                <div className='col-12'>
                  <label htmlFor='wd-due-date' className='form-label'>
                    Due
                  </label>
                  <input
                    id='wd-due-date'
                    type='date'
                    defaultValue={assignment?.dueDate || ''}
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
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          className='btn btn-secondary me-2'
        >
          Cancel
        </Link>
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          className='btn btn-success'
        >
          Save
        </Link>
      </div>
    </div>
  );
}
