import './Column3.css'

export default function Column3() {
  return (
    <div className="column-3">
      <div className="title">
        <span className="label">
        Done
        </span>
        <div className="caret-down">
          <img className="icon" src="assets/vectors/Icon53_x2.svg" />
        </div>
      </div>
      <div className="text-cell">
        <span className="morning-workout">
        Morning workout
        </span>
      </div>
      <div className="text-cell-1">
        <span className="email-client">
        Email client
        </span>
      </div>
      <div className="text-cell-2">
        <span className="grocery-shopping">
        Grocery shopping
        </span>
      </div>
      <div className="text-cell-3">
        <span className="cook-dinner">
        Cook dinner
        </span>
      </div>
    </div>
  )
}