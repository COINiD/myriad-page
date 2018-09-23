import React, { PureComponent } from 'react'
import CollectionSection from './sections/CollectionSection'
import GoalsSection from './sections/GoalsSection'
import HeaderSection from './sections/HeaderSection'
import PlatformsSection from './sections/PlatformsSection'
import PledgeSection from './sections/PledgeSection'
import './assets/styles/shared/app.css'

class App extends PureComponent {
  state = {
    coins: [{ ticker: 'BTC', address: 'XXXX' }, { ticker: 'XMY', address: 'TTT' }],
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
    const {
      coins, goal, goals, pledged,
    } = this.state

    return (
      <div className="App">
        <HeaderSection />
        <PledgeSection goal={goal} pledged={pledged} />
        <GoalsSection goals={goals} pledged={pledged} />
        <PlatformsSection />
        <CollectionSection coins={coins} />
      </div>
    )
  }
}

export default App
