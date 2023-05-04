import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamDetails} = this.props
    const {id, name, teamImageUrl} = teamDetails

    return (
      <Link to={`/team-matches/:${id}`} className="item-link">
        <li className="team-card">
          <img src={teamImageUrl} alt={`${name}`} className="team-image" />
          <p className="team-card-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
