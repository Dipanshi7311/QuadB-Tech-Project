import './ToDolistLight.css'
import { Link } from 'react-router-dom'

export default function ToDolistLight() {
  return (
    <div className="to-dolist-light">
      <div className="web-app-nav-bar">
        <div className="container">
          <div className="menu">
            <Link to="/ToDoNavlistLight"><img className="icon" src="assets/vectors/Icon112_x2.svg" /></Link>
          </div>
          <div className="logo">
            <div className="logomark">
              <img className="union" src="assets/vectors/Union1_x2.svg" />
            </div>
            <div className="do-it">
            DoIt
            </div>
          </div>
        </div>
        <div className="header">
          <div className="search">
            <img className="icon-1" src="assets/vectors/Icon29_x2.svg" />
          </div>
          <div className="app-grid">
          <Link to="/ToDoblockLight">
            <img className="icon-2" src="assets/vectors/Icon17_x2.svg" />
          </Link>
          </div>
          <div className="rimoon-clear-line">
            <Link to="/ToDolistDark"><img className="vector" src="assets/vectors/Vector134_x2.svg" /></Link>
          </div>
        </div>
      </div>
      <div className="container-1">
        <div className="table">
          <div className="title">
            <span className="label">
            To Do
            </span>
            <div className="caret-down">
              <img className="icon-3" src="assets/vectors/Icon64_x2.svg" />
            </div>
          </div>
          <div className="text-cell">
            <div className="add-atask">
            Add A Task
            </div>
            <div className="frame-2">
              <div className="container-2">
                <img className="claritynotification-line" src="assets/vectors/ClaritynotificationLine1_x2.svg" />
                <div className="birepeat">
                  <img className="vector-3" src="assets/vectors/Vector168_x2.svg" />
                </div>
                <div className="iconoircalendar">
                  <img className="vector-4" src="assets/vectors/Vector49_x2.svg" />
                </div>
              </div>
              <div className="menu-item">
                <span className="label-1">
                ADD TASK
                </span>
              </div>
            </div>
          </div>
          <div className="text-cell-1">
            <div className="frame-4">
              <div className="checkboxes">
                <div className="container-3">
                </div>
              </div>
              <span className="buy-groceries">
              Buy groceries
              </span>
            </div>
            <div className="phstar">
              <img className="vector-5" src="assets/vectors/Vector127_x2.svg" />
            </div>
          </div>
          <div className="text-cell-2">
            <div className="frame-5">
              <div className="checkboxes-1">
                <div className="container-4">
                </div>
              </div>
              <span className="finish-project-report">
              Finish project report
              </span>
            </div>
            <div className="phstar-1">
              <img className="vector-6" src="assets/vectors/Vector87_x2.svg" />
            </div>
          </div>
          <div className="text-cell-3">
            <div className="frame-6">
              <div className="checkboxes-2">
                <div className="container-5">
                </div>
              </div>
              <span className="call-the-bank">
              Call the bank
              </span>
            </div>
            <div className="phstar-2">
              <img className="vector-7" src="assets/vectors/Vector140_x2.svg" />
            </div>
          </div>
          <div className="text-cell-4">
            <div className="frame-7">
              <div className="checkboxes-3">
                <div className="container-6">
                </div>
              </div>
              <span className="schedule-dentist-appointment">
              Schedule dentist appointment
              </span>
            </div>
            <div className="phstar-3">
              <img className="vector-8" src="assets/vectors/Vector42_x2.svg" />
            </div>
          </div>
          <div className="text-cell-5">
            <div className="frame-8">
              <div className="checkboxes-4">
                <div className="container-7">
                </div>
              </div>
              <span className="plan-weekend-trip">
              Plan weekend trip
              </span>
            </div>
            <div className="phstar-4">
              <img className="vector-9" src="assets/vectors/Vector62_x2.svg" />
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
                    <img className="icon-4" src="assets/vectors/Icon118_x2.svg" />
                  </div>
                </div>
                <span className="read-abook">
                Read a book
                </span>
              </div>
              <div className="phstar-5">
                <img className="vector-10" src="assets/vectors/Vector120_x2.svg" />
              </div>
            </div>
            <div className="text-cell-7">
              <div className="frame-11">
                <div className="checkboxes-6">
                  <div className="check-small-1">
                    <img className="icon-5" src="assets/vectors/Icon88_x2.svg" />
                  </div>
                </div>
                <span className="clean-the-house">
                Clean the house
                </span>
              </div>
              <div className="phstar-6">
                <img className="vector-11" src="assets/vectors/Vector53_x2.svg" />
              </div>
            </div>
            <div className="text-cell-8">
              <div className="frame-12">
                <div className="checkboxes-7">
                  <div className="check-small-2">
                    <img className="icon-6" src="assets/vectors/Icon2_x2.svg" />
                  </div>
                </div>
                <span className="prepare-presentation">
                Prepare presentation
                </span>
              </div>
              <div className="phstar-7">
                <img className="vector-12" src="assets/vectors/Vector131_x2.svg" />
              </div>
            </div>
            <div className="text-cell-9">
              <div className="frame-13">
                <div className="checkboxes-8">
                  <div className="check-small-3">
                    <img className="icon-7" src="assets/vectors/Icon58_x2.svg" />
                  </div>
                </div>
                <span className="update-blog">
                Update blog
                </span>
              </div>
              <div className="phstar-8">
                <img className="vector-13" src="assets/vectors/Vector129_x2.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}