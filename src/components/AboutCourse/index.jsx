import classes from './index.module.css'
import PhoneInHandIcon from '../../components/Icons/PhoneHandIcon/PhoneInHandIcon'
import ButtonMain from '../../components/Ui/ButtonMain'
import Logo from '../../components/Ui/Logo'
import { selectCourses } from '../../store/courses/coursesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Login from '../Modal/Login'
import Signup from '../Modal/Signup'
import { useState } from 'react'
import Modal from '../../components/Modal'
import { newCourse } from '../../store/profile/profileActions'
import { selectUser } from '../../store/user/userSlice'

const AboutCourse = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const title = useParams()
  const courseList = useSelector(selectCourses)
  const course = courseList?.filter((course) => course.pathName === title.title)
  const backGrndImg = `/image/background/${course[0].pathName}.png`

  const [isModalVisible, setModalVisible] = useState(false)
  const [register, setRegister] = useState(false)
  const { id } = useSelector(selectUser)

  const openCloseModal = () => {
    setModalVisible(!isModalVisible)
  }

  const showSignup = () => {
    setRegister(true)
  }

  const addCourse = () => {
    const idCourse = course[0]._id
    const name = course[0].name
    const pathName = course[0].pathName
    dispatch(
      newCourse({ id: id, idCourse: idCourse, name: name, pathName: pathName })
    )
    navigate('/profile')
  }

  return (
    <div className={classes.wrapper}>
      <Logo />
      <div className={classes.container}>
        <div
          className={classes.title__box}
          style={{ backgroundImage: `url(${backGrndImg})` }}
        >
          <h1 className={classes.title}>{course[0].name}</h1>
        </div>
        <div className={classes.foryou}>
          <h2 className={classes.heading}>Подойдет для вас, если:</h2>
          <ol className={classes.foryou__list}>
            {course[0].for_you.reasons.map((reason, i) => (
              <li key={i} className={classes.foryou__list_item}>
                {reason}
              </li>
            ))}
          </ol>
        </div>
        <div className={classes.directions}>
          <h1 className={classes.heading}>Направления:</h1>
          <ul className={classes.directions__list}>
            {course[0].directions.map((direction, i) => (
              <li key={i} className={classes.directions__list_item}>
                {direction}
              </li>
            ))}
          </ul>
        </div>

        <div className={classes.results}>
          <p className={classes.results__text}>{course[0].description}</p>
        </div>

        <div className={classes.application}>
          <div className={classes.application__left}>
            <p className={classes.application__text}>
              Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
              выбором направления и тренера, с которым тренировки принесут
              здоровье и радость!
            </p>
            <ButtonMain
              content="Записаться на тренировку"
              //onClick={openCloseModal}
              onClick={addCourse}
            />
          </div>
          <div className={classes.application__right}>
            <PhoneInHandIcon />
          </div>
        </div>
      </div>

      {isModalVisible && (
        <Modal onClick={openCloseModal}>
          {!register ? <Login showSignup={showSignup} /> : <Signup />}
        </Modal>
      )}
    </div>
  )
}

export default AboutCourse