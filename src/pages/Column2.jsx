import './Column2.css'

export default function Column2() {
  return (
    <div className="column-2">
      <div className="title">
        <span className="label">
        In Progress
        </span>
        <div className="caret-down">
          <img className="icon" src="assets/vectors/Icon19_x2.svg" />
        </div>
      </div>
      <div className="text-cell">
        <span className="work-on-side-project">
        Work on side project
        </span>
      </div>
      <div className="text-cell-1">
        <span className="learn-react">
        Learn React
        </span>
      </div>
      <div className="text-cell-2">
        <span className="organize-files">
        Organize files
        </span>
      </div>
      <div className="text-cell-3">
        <span className="write-article">
        Write article
        </span>
      </div>
    </div>
  )
}