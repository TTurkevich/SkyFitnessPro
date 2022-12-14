import { createSlice } from '@reduxjs/toolkit'
import { loadCourses } from './coursesActions'

const initialState = {
  status: 'idle',
  error: null,
  list: [],
}

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCourses.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loadCourses.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.payload
      })
      .addCase(loadCourses.fulfilled, (state, action) => {
        state.status = 'received'
        state.list = Object.values(action.payload)
      })
  },
})

export const coursesReducer = coursesSlice.reducer

//selectors

export const selectCoursesInfo = (state) => ({
  status: state.courses.status,
  error: state.courses.error,
  qty: state.courses.list.length,
})

export const selectCourses = (state) => state.courses.list
