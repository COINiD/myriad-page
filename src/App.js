import React from 'react'
import HeaderSection from './sections/HeaderSection'
import PledgeSection from './sections/PledgeSection'
import './assets/styles/shared/app.css'

const App = () => (
  <div className="App">
    <HeaderSection />
    <PledgeSection goal={5} pledged={2.021} />
  </div>
)

export default App
