export const getCurrentWorkouts = (currentUserCourses, workouts) => {
  const currentWorkouts = []

  for (const courseId in currentUserCourses) {
    currentUserCourses[courseId].workouts.map((userWo) =>
      workouts.map((wo) =>
        wo._id === userWo._id
          ? currentWorkouts.push({ ...userWo, finished: false })
          : ''
      )
    )
  }

  const selectWorkouts = currentWorkouts.map((wo) =>
    wo.progress &&
    wo.progress.some(
      (progress) => Number(progress.count) === Number(progress.exercisesDone)
    )
      ? wo.progress &&
        wo.progress.some(
          (progress) =>
            Number(progress.count) !== Number(progress.exercisesDone)
        )
        ? { ...wo, finished: false }
        : { ...wo, finished: true }
      : wo
  )

  return selectWorkouts
}
