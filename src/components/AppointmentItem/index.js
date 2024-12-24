import {parse, format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {item, onClickStar} = props
  console.log(item)
  const {id, title, isStarred, date} = item
  const starUrl = `https://assets.ccbp.in/frontend/react-js/appointments-app/${
    isStarred ? 'filled-' : ''
  }star-img.png`

  const onClickStarBtn = () => {
    onClickStar(id)
  }
  const parsedDate = new Date(date)
  const formattedDate = format(parsedDate, 'dd MMMM yyyy, EEEE')

  return (
    <li className="list-container">
      <div className="list-header">
        <p className="list-title">{title}</p>
        <button
          className="btn"
          data-testid="star"
          type="button"
          onClick={onClickStarBtn}
        >
          <img className="star" alt="star" src={starUrl} />
        </button>
      </div>
      <p className="date">{formattedDate}</p>
    </li>
  )
}

export default AppointmentItem
