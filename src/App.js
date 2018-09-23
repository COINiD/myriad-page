import React, { PureComponent } from 'react'
import { sum, values } from 'lodash-es'
import moment from 'moment-timezone'
import CollectionSection from './sections/CollectionSection'
import GoalsSection from './sections/GoalsSection'
import HeaderSection from './sections/HeaderSection'
import PlatformsSection from './sections/PlatformsSection'
import PledgeSection from './sections/PledgeSection'
import ExchangeHelper from './utils/exchangeHelper'
import './assets/styles/shared/app.css'

class App extends PureComponent {
  state = {
    coins: [
      { ticker: 'BTC', address: '1NDpZ2wyFekVezssSXv2tmQgmxcoHMUJ7u' },
      {
        ticker: 'XMY',
        address: 'MAgQdk6hSbux64MqPFFoV3NWTkEAn245R2',
      },
    ],
    balances: {
      BTC: 0.0,
      XMY: 0.0,
    },
    endDate: moment.tz('2018-10-08 12:00', 'Europe/Stockholm'),
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

  insights = {
    BTC: [
      'https://btc-bitcore1.coinid.org/api',
      'https://btc-bitcore2.coinid.org/api',
      'https://btc-bitcore3.coinid.org/api',
    ],
    XMY: ['https://myriadexplorer.com/api'],
  }

  exchangeHelpers = {}

  componentDidMount() {
    const { coins } = this.state
    coins.map((coin) => {
      const { address, ticker } = coin

      if (ticker !== 'BTC') {
        this.exchangeHelpers[ticker] = ExchangeHelper(ticker)
        // this.exchangeHelpers[ticker].on('syncedexchange', this.onSyncedExchange)
      }

      this.fetchAddressBalance({ address, ticker })
    })
  }

  convertToBTC = (ticker, balance) => {
    this.exchangeHelpers[ticker].convert(balance, 'BTC').then((btcBalance) => {
      const { balances } = this.state
      const newBalances = Object.assign({}, balances)
      newBalances[ticker] = btcBalance
      const pledged = sum(values(newBalances))
      console.log(newBalances, pledged)
      this.setState({ balances: newBalances, pledged })
    })
  }

  // onSyncedExchange = (ticker, exhangeInfo) => {
  //   console.log('tada', ticker)
  //   this.refreshFiatBalance(ticker, 5)
  // }

  fetchAddressBalance = ({ address, ticker }) => {
    if (this.insights[ticker].length > 0) {
      fetch(`${this.insights[ticker][0]}/addr/${address}/balance`, {
        headers: { 'Content-Type': 'text/plain' },
      })
        .then(response => response.text())
        .then(value => this.convertToBTC(ticker, value))
        .catch(error => console.log(error))
    }
    // const requests = this.insights[ticker][0].map(api => fetch(`${api}/addr/${address}/balance`))
    //
    // Promise.race(requests).then((response) => {
    //   console.log(response)
    // })
  }

  render() {
    const {
      coins, endDate, goal, goals, pledged,
    } = this.state

    return (
      <div className="wrapper">
        <HeaderSection />
        <PledgeSection goal={goal} pledged={pledged} endDate={endDate} />
        <GoalsSection goals={goals} pledged={pledged} />
        <PlatformsSection />
        <CollectionSection coins={coins} />
      </div>
    )
  }
}

export default App
