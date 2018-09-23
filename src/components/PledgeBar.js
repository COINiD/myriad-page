import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import '../assets/styles/components/pledge-bar.css'

class PledgeSection extends PureComponent {
  static propTypes = {
    pledged: PropTypes.number,
    goal: PropTypes.number.isRequired,
  }

  static defaultProps = {
    pledged: 0.0,
  }

  render() {
    const { pledged, goal } = this.props

    const progressPercent = (pledged / goal) * 100

    return (
      <div className="pledge-bar">
        <div className="pledge-bar__progress" style={{ width: `${progressPercent}%` }} />
        <p className="pledge-bar__title">{`Pledged ${pledged} BTC`}</p>
      </div>
    )
  }
}

export default PledgeSection