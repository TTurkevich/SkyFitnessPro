import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadCourses } from '../../store/courses/coursesActions'
import {
  selectCourses,
  selectCoursesInfo,
} from '../../store/courses/coursesSlice'
import { selectUser } from '../../store/user/userSlice'
import { loadWorkouts } from '../../store/workouts/workoutsActions'

import ButtonUp from '../../components/Main/ButtonUp'
import CoursesCarts from '../../components/CoursesCarts'
import Modal from '../../components/Modal'
import Login from '../Modal/Login'
import Signup from '../Modal/Signup'
import { Loader } from '../Loader'

import cn from 'classnames'
import classes from './index.module.css'
import NavigateBlock from '../Ui/NavigateBlock'

const Main = () => {
  const dispatch = useDispatch()
  const [isModalVisible, setModalVisible] = useState(false)
  const [register, setRegister] = useState(false)
  const { status, error, qty } = useSelector(selectCoursesInfo)
  const { login } = useSelector(selectUser)

  const openCloseModal = () => {
    setModalVisible(!isModalVisible)
    setRegister(false)
  }

  const showSignup = () => {
    setRegister(true)
  }

  useEffect(() => {
    if (!qty) {
      dispatch(loadCourses())
      dispatch(loadWorkouts())
    }
  }, [qty, dispatch])

  const courses = useSelector(selectCourses)

  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <NavigateBlock
          login={login}
          colorLogo="white"
          colorName="white"
          onClick={openCloseModal}
        />
        <div className={cn(classes.container, classes.body)}>
          <div className={classes.content}>
            <div className={classes.text}>
              <div className={classes.subtitle}>
                Онлайн-тренировки для занятий дома
              </div>
              <div className={classes.title}>
                Начните заниматься спортом и улучшите качество жизни
              </div>
            </div>
            <div className={classes.sticker}>
              <img src="image/main/sticker.png" alt="" />
            </div>
          </div>
        </div>
      </header>
      <main className={classes.main}>
        {error && <p>{error}</p>}
        {status === 'loading' && <Loader />}
        {status === 'received' && <CoursesCarts courses={courses} />}
      </main>
      <footer className={cn(classes.container, classes.footer)}>
        <ButtonUp />
      </footer>
      {isModalVisible && (
        <Modal onClick={openCloseModal}>
          {!register ? <Login showSignup={showSignup} /> : <Signup />}
        </Modal>
      )}
    </div>
  )
}

export default Main
