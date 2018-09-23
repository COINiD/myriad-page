import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import '../assets/styles/components/goal.css'

class Goal extends PureComponent {
  static propTypes = {
    amount: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    includes: PropTypes.arrayOf(PropTypes.string.isRequired),
    pledged: PropTypes.number.isRequired,
  }

  static defaultProps = {
    includes: [],
  }

  render() {
    const {
      title, includes, amount, pledged,
    } = this.props

    const completed = pledged >= amount

    return (
      <div className="goal">
        <p className="goal__title">{title}</p>
        <p className={['goal__amount', completed ? 'goal__amount--completed' : null].join(' ')}>
          {`${amount} BTC`}
        </p>
        {includes.map((included, i) => (
          <p key={i} className="goal__included">{`- ${included}`}</p>
        ))}
      </div>
    )
  }
}

export default Goal
