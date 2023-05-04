import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      competingLogo,
      umpires,
      result,
      manOfTheMatch,
      date,
      venue,
      firstInnings,
      secondInnings,
    } = latestMatch

    return (
      <div className="latest-match-card-container">
        <h1 className="latest-match-heading">Latest Match</h1>
        <div className="latest-match-card">
          <div className="latest-match-detail-team">
            <p>{competingTeam}</p>
            <p>{date}</p>
            <p>{venue}</p>
            <p>{result}</p>
          </div>
          <img
            src={competingLogo}
            alt={`latest match ${competingTeam}`}
            className="latest-match-logo"
          />
        </div>
        <div className="latest-match-detail-info">
          <div className="match-info-team">
            <p className="latest-match-detail-label">First Innings</p>
            <p className="latest-match-detail-value">{firstInnings}</p>
          </div>
          <div className="match-info-team">
            <p className="latest-match-detail-label">Second Innings</p>
            <p className="latest-match-detail-value">{secondInnings}</p>
          </div>
          <div className="match-info-team">
            <p className="latest-match-detail-label">Man Of The Match</p>
            <p className="latest-match-detail-value">{manOfTheMatch}</p>
          </div>
          <div className="match-info-team">
            <p className="latest-match-detail-label">Umpires</p>
            <p className="latest-match-detail-value">{umpires}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
