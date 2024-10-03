export default function AssignmentEditor() {
  return (
    <div id='wd-assignments-editor' className='container mt-4'>
      {/* Assignment Name */}
      <div className='mb-4'>
        <label htmlFor='wd-name' className='form-label'>
          Assignment Name
        </label>
        <input
          id='wd-name'
          defaultValue='A1 - ENV + HTML'
          className='form-control'
        />
      </div>

      {/* Description */}
      <div className='mb-4'>
        <textarea
          id='wd-description'
          className='form-control'
          rows={4}
          defaultValue={`The assignment is available online. Submit a link to the landing page of your web application running on Netlift. The landing page should include the following:
          Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories.`}
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
              defaultValue={100}
              className='form-control'
            />
          </div>
        </div>
      </div>

      <div className='row mb-4'>
        <div className='col-md-6 row'>
          <label htmlFor='wd-group' className='col-md-3 col-form-label'>
            Assignment Group
          </label>
          <div className='col-md-9'>
            <select id='wd-group' className='form-control'>
              <option>ASSIGNMENTS</option>
              <option>QUIZZES</option>
              <option>EXAMS</option>
              <option>PROJECT</option>
            </select>
          </div>
        </div>
      </div>

      {/* Display Grade As and Submission Type */}
      <div className='row mb-4'>
        <div className='col-md-6 row'>
          <label
            htmlFor='wd-display-grade-as'
            className='col-md-3 col-form-label'
          >
            Display Grade As
          </label>
          <div className='col-md-9'>
            <select id='wd-display-grade-as' className='form-control'>
              <option>Percentage</option>
              <option>Complete/Incomplete</option>
              <option>Points</option>
            </select>
          </div>
        </div>
      </div>

      {/* Submission Type */}
      <div className='row mb-4'>
        <div className='col-md-6 row'>
          <label
            htmlFor='wd-submission-type'
            className='col-md-3 col-form-label'
          >
            Submission Type
          </label>
          <div className='col-md-9'>
            <div className='card p-4 mb-4'>
              <div className='col-12 mb-3'>
                <select id='wd-submission-type' className='form-control'>
                  <option>Online</option>
                </select>
              </div>

              {/* Online Entry Options */}
              <div className='mb-3'>
                <label className='form-label'>Online Entry Options</label>
                <div className='form-check'>
                  <input
                    type='checkbox'
                    className='form-check-input'
                    id='wd-text-entry'
                  />
                  <label className='form-check-label' htmlFor='wd-text-entry'>
                    Text Entry
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    type='checkbox'
                    className='form-check-input'
                    id='wd-website-url'
                  />
                  <label className='form-check-label' htmlFor='wd-website-url'>
                    Website URL
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    type='checkbox'
                    className='form-check-input'
                    id='wd-media-recordings'
                  />
                  <label
                    className='form-check-label'
                    htmlFor='wd-media-recordings'
                  >
                    Media Recordings
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    type='checkbox'
                    className='form-check-input'
                    id='wd-student-annotation'
                  />
                  <label
                    className='form-check-label'
                    htmlFor='wd-student-annotation'
                  >
                    Student Annotation
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    type='checkbox'
                    className='form-check-input'
                    id='wd-file-upload'
                  />
                  <label className='form-check-label' htmlFor='wd-file-upload'>
                    File Upload
                  </label>
                </div>
              </div>
            </div>
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

                <div className='col-12'>
                  <label htmlFor='wd-due-date' className='form-label'>
                    Due
                  </label>
                  <input
                    id='wd-due-date'
                    type='date'
                    defaultValue='2024-05-13'
                    className='form-control'
                  />
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
                    defaultValue='2024-05-06'
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className='text-end'>
        <button className='btn btn-secondary me-2'>Cancel</button>
        <button className='btn btn-success'>Save</button>
      </div>
    </div>
  );
}
