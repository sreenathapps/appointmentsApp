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
  return (
    <li className="list-container">
      <div className="list-header">
        <h1 className="list-title">{title}</h1>
        <button
          className="btn"
          data-testid="star"
          type="button"
          onClick={onClickStarBtn}
        >
          <img className="star" alt="star" src={starUrl} />
        </button>
      </div>
      <p className="date">{date}</p>
    </li>
  )
}

export default AppointmentItem
