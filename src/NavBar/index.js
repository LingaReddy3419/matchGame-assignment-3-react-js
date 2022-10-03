import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {score, time} = this.props

    return (
      <nav className="nav-bar-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="image-logo"
        />
        <ul className="score-container">
          <li>
            <p className="score-nav">
              Score: <span className="span-score">{score}</span>
            </p>
          </li>

          <li className="score-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer-icon"
            />
            <p className="span-score">{time} Sec</p>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
