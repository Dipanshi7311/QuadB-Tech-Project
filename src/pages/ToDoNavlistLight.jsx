import './ToDoNavlistLight.css'
import { Link } from 'react-router-dom'

export default function ToDoNavlistLight() {
  return (
    <div className="to-do-navlist-light">
      <div className="web-app-nav-bar">
        <div className="container">
          <div className="menu">
            <Link to="/ToDolistLight"><img className="icon" src="assets/vectors/Icon116_x2.svg" /></Link>
          </div>
          <div className="logo">
            <div className="logomark">
              <img className="union" src="assets/vectors/Union_x2.svg" />
            </div>
            <div className="do-it">
            DoIt
            </div>
          </div>
        </div>
        <div className="header">
          <div className="search">
            <img className="icon-1" src="assets/vectors/Icon82_x2.svg" />
          </div>
          <div className="app-grid">
          <Link to="/ToDoNavBlockLight">
            <img className="icon-2" src="assets/vectors/Icon24_x2.svg" />
          </Link>
          </div>
          <div className="rimoon-clear-line">
            <Link to="/ToDoNavlistDark"><img className="vector" src="assets/vectors/Vector130_x2.svg" /></Link>
          </div>
        </div>
      </div>
      <div className="container-1">
        <div className="frame-1">
          <div className="container-2">
            <div className="label">
            Hey, ABCD
            </div>
            <div className="sidebar">
              <div className="side-panel-menu">
                <div className="menu-item">
                  <div className="menu-1">
                    <img className="group" src="assets/vectors/Group9_x2.svg" />
                  </div>
                  <span className="label-1">
                  All Tasks
                  </span>
                </div>
                <div className="menu-item-1">
                  <div className="calendar">
                    <img className="icon-3" src="assets/vectors/Icon25_x2.svg" />
                  </div>
                  <span className="label-2">
                  Today
                  </span>
                </div>
                <div className="menu-item-2">
                  <div className="clock">
                    <img className="vector-3" src="assets/vectors/Vector154_x2.svg" />
                  </div>
                  <div className="label-3">
                  Important
                  </div>
                </div>
                <div className="menu-item-3">
                  <div className="clock-1">
                    <img className="vector-4" src="assets/vectors/Vector178_x2.svg" />
                  </div>
                  <span className="label-4">
                  Planned
                  </span>
                </div>
                <div className="menu-item-4">
                  <div className="clock-2">
                    <img className="group-1" src="assets/vectors/Group4_x2.svg" />
                  </div>
                  <div className="label-5">
                  Assigned to me 
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar-1">
              <div className="side-panel-menu-1">
                <div className="menu-item-5">
                  <div className="menu-2">
                    <img className="vector-8" src="assets/vectors/Vector21_x2.svg" />
                  </div>
                  <span className="label-6">
                  Add list
                  </span>
                </div>
              </div>
            </div>
            <div className="sidebar-2">
              <div className="side-panel-menu-2">
                <div className="rectangle-1117">
                </div>
                <div className="container-3">
                  <div className="container-4">
                    <span className="primary-text">
                    Today Tasks
                    </span>
                    <div className="group-2016">
                      <div className="rectangle-9">
                      </div>
                      <div className="rectangle-8">
                      </div>
                    </div>
                  </div>
                  <div className="group-2017">
                    <div className="vector-16">
                    </div>
                  </div>
                  <img className="container-6" src="assets/vectors/Container1_x2.svg" />
                  <div className="container-7">
                    <div className="group-2018">
                      <div className="ellipse-21">
                      </div>
                      <span className="product-1">
                      Pending
                      </span>
                    </div>
                    <div className="group-2068">
                      <div className="ellipse-211">
                      </div>
                      <span className="product-2">
                      Done
                      </span>
                    </div>
                  </div>
                </div>
                <span className="container">
                11
                </span>
              </div>
            </div>
          </div>
          <div className="profile">
            <div className="ageneric-user-avatar-with-asimple-design">
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="table">
            <div className="title">
              <span className="label-7">
              To Do
              </span>
              <div className="caret-down">
                <img className="icon-4" src="assets/vectors/Icon59_x2.svg" />
              </div>
            </div>
            <div className="text-cell">
              <div className="add-atask">
              Add A Task
              </div>
              <div className="frame-2">
                <div className="container-5">
                  <img className="claritynotification-line" src="assets/vectors/ClaritynotificationLine9_x2.svg" />
                  <div className="birepeat">
                    <img className="vector-11" src="assets/vectors/Vector162_x2.svg" />
                  </div>
                  <div className="iconoircalendar">
                    <img className="vector-12" src="assets/vectors/Vector112_x2.svg" />
                  </div>
                </div>
                <div className="menu-item-6">
                  <span className="label-8">
                  ADD TASK
                  </span>
                </div>
              </div>
            </div>
            <div className="text-cell-1">
              <div className="frame-4">
                <div className="checkboxes">
                  <div className="container-8">
                  </div>
                </div>
                <span className="buy-groceries">
                Buy groceries
                </span>
              </div>
              <div className="phstar">
                <img className="vector-13" src="assets/vectors/Vector101_x2.svg" />
              </div>
            </div>
            <div className="text-cell-2">
              <div className="frame-5">
                <div className="checkboxes-1">
                  <div className="container-9">
                  </div>
                </div>
                <span className="finish-project-report">
                Finish project report
                </span>
              </div>
              <div className="phstar-1">
                <img className="vector-14" src="assets/vectors/Vector54_x2.svg" />
              </div>
            </div>
            <div className="text-cell-3">
              <div className="frame-6">
                <div className="checkboxes-2">
                  <div className="container-10">
                  </div>
                </div>
                <span className="call-the-bank">
                Call the bank
                </span>
              </div>
              <div className="phstar-2">
                <img className="vector-15" src="assets/vectors/Vector194_x2.svg" />
              </div>
            </div>
            <div className="text-cell-4">
              <div className="frame-7">
                <div className="checkboxes-3">
                  <div className="container-11">
                  </div>
                </div>
                <span className="schedule-dentist-appointment">
                Schedule dentist appointment
                </span>
              </div>
              <div className="phstar-3">
                <img className="vector-16" src="assets/vectors/Vector145_x2.svg" />
              </div>
            </div>
            <div className="text-cell-5">
              <div className="frame-8">
                <div className="checkboxes-4">
                  <div className="container-12">
                  </div>
                </div>
                <span className="plan-weekend-trip">
                Plan weekend trip
                </span>
              </div>
              <div className="phstar-4">
                <img className="vector-17" src="assets/vectors/Vector193_x2.svg" />
              </div>
            </div>
            <div className="completed">
            Completed
            </div>
            <div className="frame-9">
              <div className="text-cell-6">
                <div className="frame-10">
                  <div className="checkboxes-5">
                    <div className="check-small">
                      <img className="icon-5" src="assets/vectors/Icon43_x2.svg" />
                    </div>
                  </div>
                  <span className="read-abook">
                  Read a book
                  </span>
                </div>
                <div className="phstar-5">
                  <img className="vector-18" src="assets/vectors/Vector152_x2.svg" />
                </div>
              </div>
              <div className="text-cell-7">
                <div className="frame-11">
                  <div className="checkboxes-6">
                    <div className="check-small-1">
                      <img className="icon-6" src="assets/vectors/Icon117_x2.svg" />
                    </div>
                  </div>
                  <span className="clean-the-house">
                  Clean the house
                  </span>
                </div>
                <div className="phstar-6">
                  <img className="vector-19" src="assets/vectors/Vector57_x2.svg" />
                </div>
              </div>
              <div className="text-cell-8">
                <div className="frame-12">
                  <div className="checkboxes-7">
                    <div className="check-small-2">
                      <img className="icon-7" src="assets/vectors/Icon3_x2.svg" />
                    </div>
                  </div>
                  <span className="prepare-presentation">
                  Prepare presentation
                  </span>
                </div>
                <div className="phstar-7">
                  <img className="vector-20" src="assets/vectors/Vector183_x2.svg" />
                </div>
              </div>
              <div className="text-cell-9">
                <div className="frame-13">
                  <div className="checkboxes-8">
                    <div className="check-small-3">
                      <img className="icon-8" src="assets/vectors/Icon42_x2.svg" />
                    </div>
                  </div>
                  <span className="update-blog">
                  Update blog
                  </span>
                </div>
                <div className="phstar-8">
                  <img className="vector-21" src="assets/vectors/Vector169_x2.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}