import axios from "axios";

const API = `${process.env.REACT_APP_REMOTE_SERVER}/api/assignments`;

export const createAssignment = async (assignment: any) => {
  const response = await axios.post(API, assignment);
  return response.data;
};

export const getAssignments = async () => {
  const response = await axios.get(API);
  return response.data;
};

export const updateAssignment = async (aid: any, updatedAssignment: any) => {
  const response = await axios.put(`${API}/${aid}`, updatedAssignment);
  return response.data;
};

export const deleteAssignment = async (aid:any) => {
  const response = await axios.delete(`${API}/${aid}`);
  return response.data;
};
