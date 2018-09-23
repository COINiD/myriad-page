import React, { PureComponent } from 'react'
import HeaderSection from './sections/HeaderSection'
import PledgeSection from './sections/PledgeSection'
import GoalsSection from './sections/GoalsSection'
import PlatformsSection from './sections/PlatformsSection'
import './assets/styles/shared/app.css'

class App extends PureComponent {
  state = {
    pledged: 4,
    goal: 5,
    goals: [
      {
        amount: 2,
        title: 'Pointy Hill',
        includes: ['1 Platform', 'Social media posting'],
      },
      {
        amount: 3,
        title: 'Mount Everest',
        includes: ['2 Platforms', 'Social media posting', 'Press release'],
      },
      {
        amount: 4,
        title: 'Moon',
        includes: ['3 Platforms', 'Social media posting', 'Press release', 'Promotional material'],
      },
    ],
  }

  render() {
    const { goal, goals, pledged } = this.state

    return (
      <div className="App">
        <HeaderSection />
        <PledgeSection goal={goal} pledged={pledged} />
        <GoalsSection goals={goals} pledged={pledged} />
        <PlatformsSection />
      </div>
    )
  }
}

export default App
