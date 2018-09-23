import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import PledgeBar from '../components/PledgeBar'
import '../assets/styles/sections/pledge.css'

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
    return (
      <div className="pledge container">
        <p className="pledge__title">Pledged</p>
        <PledgeBar pledged={pledged} goal={goal} />
        <em className="pledge__notice">Deadline for crowdfunding is October 5 2018</em>
      </div>
    )
  }
}

export default PledgeSection
