// Write your code here
import {Component} from 'react'
import {v4 as uiidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    appointments: [],
    title: '',
    date: '',
    displayStarred: false,
  }

  onSubmitAppointment = event => {
    event.preventDefault()
    console.log("Hi i'm Submit Btn")
    this.setState(prevState => {
      const {title, date, appointments} = prevState
      const newAppointment = {id: uiidv4(), title, date, isStarred: false}
      return {
        appointments: [...appointments, newAppointment],
        title: '',
        date: '',
      }
    })
  }

  onClickStarredButton = () => {
    this.setState(prevState => ({
      displayStarred: !prevState.displayStarred,
    }))
  }

  toggleStar = id => {
    this.setState(prevState => ({
      appointments: prevState.appointments.map(each => {
        if (id === each.id) {
          return {...each, isStarred: !each.isStarred}
        }
        return each
      }),
    }))
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  render() {
    const {appointments, title, date, displayStarred} = this.state

    const filteredAppointments = displayStarred
      ? appointments.filter(each => each.isStarred)
      : appointments

    return (
      <div className="bg-container">
        <div className="card">
          <div className="form-container">
            <div className="appointments-container">
              <h1 className="title">Add Appointment</h1>
              <form
                className="appointments-form-container"
                onSubmit={this.onSubmitAppointment}
              >
                <label htmlFor="title" className="label">
                  TITLE
                </label>
                <input
                  id="title"
                  type="text"
                  className="title-input"
                  value={title}
                  placeholder="Title"
                  onChange={this.onChangeTitle}
                />
                <label htmlFor="date" className="label">
                  DATE
                </label>
                <input
                  placeholder="Date"
                  id="date"
                  type="date"
                  className="date-input"
                  value={date}
                  onChange={this.onChangeDate}
                />
                <button type="submit" className="submit-button">
                  Add
                </button>
              </form>
            </div>
            <img
              className="icon"
              alt="appointments"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
            />
          </div>
          <br />
          <div className="appointments-list">
            <div className="header">
              <h1 className="title">Appointments</h1>
              <button
                className="starred-btn"
                type="button"
                onClick={this.onClickStarredButton}
              >
                Starred
              </button>
            </div>
            <ul className="appointment-items">
              {filteredAppointments.map(each => (
                <AppointmentItem
                  key={each.id}
                  onClickStar={this.toggleStar}
                  item={each}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
