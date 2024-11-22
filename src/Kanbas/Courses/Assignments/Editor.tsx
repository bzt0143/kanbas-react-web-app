import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAssignment, updateAssignment as updateReduxAssignment } from "./reducer";
import { createAssignment, updateAssignment, getAssignments } from "./client";

export default function AssignmentEditor() {
  const { cid, id } = useParams(); // `cid` for courseId, `id` for assignmentId
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  // State for the assignment being edited
  const [assignment, setAssignment] = useState({
    title: "Untitled Assignment",
    description: "",
    points: 0,
    dueDate: "",
    availableFromDate: "",
    availableUntilDate: "",
  });

  // Fetch assignment data if editing an existing assignment
  useEffect(() => {
    if (id) {
      const fetchAssignment = async () => {
        const existingAssignment = await getAssignments();
        if (existingAssignment) {
          setAssignment(existingAssignment);
        }
      };
      fetchAssignment();
    }
  }, [id]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAssignment((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Save action
  const handleSave = async () => {
    if (id) {
      // Update existing assignment
      const updatedAssignment = await updateAssignment(id, assignment);
      dispatch(updateReduxAssignment(updatedAssignment));
    } else {
      // Create a new assignment
      const newAssignment = await createAssignment({ ...assignment, course: cid });
      dispatch(addAssignment(newAssignment));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`); // Navigate back to assignments screen
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      {/* Assignment Name */}
      <div className="mb-4">
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input
          id="wd-name"
          name="title"
          value={assignment.title}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <textarea
          id="wd-description"
          name="description"
          className="form-control"
          rows={8}
          value={assignment.description}
          onChange={handleChange}
        />
      </div>

      {/* Points and Assignment Group */}
      <div className="row mb-4">
        <div className="col-md-6 row">
          <label htmlFor="wd-points" className="col-md-3 col-form-label">
            Points
          </label>
          <div className="col-md-9">
            <input
              id="wd-points"
              name="points"
              type="number"
              value={assignment.points}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
      </div>

      {/* Assign and Due Dates */}
      <div className="row mb-4">
        <div className="col-md-6 row">
          <label htmlFor="wd-display-grade-as" className="col-md-3 col-form-label">
            Assign
          </label>
          <div className="col-md-9">
            <div className="card p-4 mb-4">
              <div className="row mb-4">
                <div className="col-12 mb-3">
                  <label htmlFor="wd-assign-to" className="form-label">
                    Assign To
                  </label>
                  <select id="wd-assign-to" className="form-control">
                    <option>Everyone</option>
                    <option>Specific Students</option>
                  </select>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-12 mb-3">
                  <label htmlFor="wd-available-from" className="form-label">
                    Available From
                  </label>
                  <input
                    id="wd-available-from"
                    name="availableFromDate"
                    type="date"
                    value={assignment.availableFromDate}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="wd-available-until" className="form-label">
                    Until
                  </label>
                  <input
                    id="wd-available-until"
                    name="availableUntilDate"
                    type="date"
                    value={assignment.availableUntilDate}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="wd-due-date" className="form-label">
                    Due
                  </label>
                  <input
                    id="wd-due-date"
                    name="dueDate"
                    type="date"
                    value={assignment.dueDate}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="text-end">
        <button
          onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments`)}
          className="btn btn-secondary me-2"
        >
          Cancel
        </button>
        <button onClick={handleSave} className="btn btn-success">
          Save
        </button>
      </div>
    </div>
  );
}

