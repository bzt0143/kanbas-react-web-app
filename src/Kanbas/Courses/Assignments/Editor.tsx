export default function AssignmentEditor() {
  return (
    <div id='wd-assignments-editor'>
      <label htmlFor='wd-name'>Assignment Name</label>
      <input id='wd-name' value='A1 - ENV + HTML' />
      <br />
      <br />
      <textarea id='wd-description'>
        The assignment is available online Submit a link to the landing page of
        your web application running on Netlift. The landing page should include
        the following: Your full name and section Links to each of the lab
        assignments Link to the Kanbas application Links to all relevant source
        code repositories. The Kanbas application should include a link to
        navigate back to the landing page.
      </textarea>
      <br />
      <tr>
        <td colSpan={1}>&nbsp;</td>
      </tr>
      <table>
        <tr>
          <td align='right' valign='top'>
            <label htmlFor='wd-points'>Points</label>
          </td>
          <td>
            <input id='wd-points' value={100} />
          </td>
        </tr>
        {/* Complete on your own */}
        {/* Assignment Group */}

        <tr>
          <td colSpan={1}>&nbsp;</td>
        </tr>

        <tr>
          <td align='right' valign='top'>
            <label htmlFor='wd-group'>Assignment Group</label>
          </td>
          <td>
            <select id='wd-group'>
              <option>ASSIGNMENTS</option>
              <option>QUIZZES</option>
              <option>EXAMS</option>
              <option>PROJECT</option>
            </select>
          </td>
        </tr>

        {/* Display Grade As */}
        <tr>
          <td colSpan={1}>&nbsp;</td>
        </tr>

        <tr>
          <td align='right' valign='top'>
            <label htmlFor='wd-display-grade-as'>Display Grade As</label>
          </td>
          <td>
            <select id='wd-display-grade-as'>
              <option>Percentage</option>
              <option>Complete/Incomplete</option>
              <option>Points</option>
            </select>
          </td>
        </tr>

        {/* Submission Type */}
        <tr>
          <td colSpan={1}>&nbsp;</td>
        </tr>

        <tr>
          <td align='right' valign='top'>
            <label htmlFor='wd-submission-type'>Submission Type</label>
          </td>
          <td>
            <select id='wd-submission-type'>
              <option>Online</option>
            </select>
          </td>
        </tr>

		<tr>
          <td colSpan={1}>&nbsp;</td>
        </tr>

        <tr>
          <td></td>
          <td>
			Online Entry Options
			<br />
            <input type='checkbox' id='wd-text-entry' /> Text Entry <br />
            <input type='checkbox' id='wd-website-url' /> Website URL <br />
            <input type='checkbox' id='wd-media-recordings' /> Media Recordings{' '}
            <br />
            <input type='checkbox' id='wd-student-annotation' /> Student
            Annotation <br />
            <input type='checkbox' id='wd-file-upload' /> File Upload <br />
          </td>
        </tr>

        {/* Assign To */}
        <tr>
          <td colSpan={1}>&nbsp;</td>
        </tr>

        <tr>
          <td align='right' valign='top'></td>
          <td>
            <label htmlFor='wd-assign-to'>Assign To</label>
            <br />
            <div>
              <select id='wd-assign-to'>
                <option>Everyone</option>
                <option>Specific Students</option>
              </select>
            </div>
          </td>
        </tr>

        {/* Due Date */}
        <tr>
          <td colSpan={1}>&nbsp;</td>
        </tr>

        <tr>
          <td align='right' valign='top'></td>
          <td>
            <div>
              <label htmlFor='wd-due-date'>Due</label>
            </div>
            <div>
              <input id='wd-due-date' type='date' value='2024-05-13' />
            </div>
          </td>
        </tr>

        {/* Available From and Until */}
        <tr>
          <td colSpan={1}>&nbsp;</td>
        </tr>

        <tr>
          <td align='right' valign='top'></td>
          <td>
            <div>
              <label htmlFor='wd-available-from'>Available From </label>
			  &nbsp;&nbsp;&nbsp;
              <label htmlFor='wd-available-until'>Until</label>
            </div>
            <div>
              <input id='wd-available-from' type='date' value='2024-05-06' />
              <input id='wd-available-until' type='date' value='2024-05-20' />
            </div>
          </td>
        </tr>

        <tr>
          <td colSpan={2} align='right'>
            <button id='wd-save-assignment'>Save</button>
            <button id='wd-cancel-assignment'>Cancel</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
