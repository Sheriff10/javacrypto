import React from 'react'
import Header from '../Components/Header'
import Intro from '../Components/Intro'
import Card from '../Components/Card'
import About from '../Components/About'
import Tokenomics from '../Components/Tokenomics'
import Footer from '../Components/Footer'
import Roadmap from '../Components/Roadmap'
import TradeBot from '../Components/TradeBot'

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Card />
      <About />
      <TradeBot />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </>
  )
}
