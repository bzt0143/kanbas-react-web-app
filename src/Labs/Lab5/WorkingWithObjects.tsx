import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });


const [module, setModule] = useState({
    id: "CS5610",
    name: "Introduction to Web Development",
    description: "Learn the basics of web development.",
    course: "CS5610",
  });



  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
  return (
    <div>
      <h3 id="wd-working-with-objects">Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <input className="form-control w-75" id="wd-assignment-title"
        defaultValue={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })}/>
      <hr />
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr/>
	  <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment/title`}>
        Get Title
      </a><hr/>
	  <div>
        <input
          className="form-control"
          defaultValue={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
        />
        <a
          id="wd-update-assignment-title"
          className="btn btn-primary"
          href={`${REMOTE_SERVER}/lab5/assignment/title/${assignment.title}`}
        >
          Update Assignment Title
        </a>
      </div>
	  <div>
        <input
          type="number"
          className="form-control"
          defaultValue={assignment.score}
          onChange={(e) =>
            setAssignment({ ...assignment, score: parseInt(e.target.value, 10) })
          }
        />
        <a
          id="wd-update-assignment-score"
          className="btn btn-secondary"
          href={`${REMOTE_SERVER}/lab5/assignment/score/${assignment.score}`}
        >
          Update Assignment Score
        </a>
      </div>
	  <br/>
	  <div>
        <input
          type="checkbox"
          id="wd-assignment-completed"
          checked={assignment.completed}
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })
          }
        />
        <a
          id="wd-update-assignment-completed"
          className="btn btn-secondary"
          href={`${REMOTE_SERVER}/lab5/assignment/completed/${assignment.completed}`}
        >
          Update Assignment Completed
        </a>
      </div>
	  <br/>

	  {/* Module */}
	  <h4>Module Object</h4>
      <a
        id="wd-retrieve-module"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/module`}
      >
        Get Module
      </a>
      <a
        id="wd-retrieve-module-name"
        className="btn btn-secondary"
        href={`${REMOTE_SERVER}/lab5/module/name`}
      >
        Get Module Name
      </a>
	  <br/>
	  <div>
        <input
          className="form-control"
          defaultValue={module.name}
          onChange={(e) => setModule({ ...module, name: e.target.value })}
        />
        <a
          id="wd-update-module-name"
          className="btn btn-primary"
          href={`${REMOTE_SERVER}/lab5/module/name/${module.name}`}
        >
          Update Module Name
        </a>
      </div>
	  <br/>
	  <div>
        <input
          className="form-control"
          defaultValue={module.description}
          onChange={(e) =>
            setModule({ ...module, description: e.target.value })
          }
        />
        <a
          id="wd-update-module-description"
          className="btn btn-secondary"
          href={`${REMOTE_SERVER}/lab5/module/description/${module.description}`}
        >
          Update Module Description
        </a>
      </div>
    </div>
);}

