import { createSlice } from '@reduxjs/toolkit';
import { enrollments } from './Database';

const initialState = {
  enrollments: enrollments, // Use the imported data as the initial state
};

const enrollmentsSlice = createSlice({
  name: 'enrollments',
  initialState,
  reducers: {
    enrollCourse: (state, { payload: { userId, courseId } }) => {
      const newEnrollment = {
        _id: new Date().getTime().toString(), // Generate a unique _id
        user: userId,
        course: courseId,
      };
      state.enrollments = [...state.enrollments, newEnrollment];
    },
    unenrollCourse: (state, { payload: { userId, courseId } }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) =>
          !(enrollment.user === userId && enrollment.course === courseId)
      );
    },
    setEnrollments: (state, { payload: enrollments }) => {
      state.enrollments = enrollments;
    },
  },
});

export const { enrollCourse, unenrollCourse, setEnrollments } = enrollmentsSlice.actions;

export default enrollmentsSlice.reducer;
