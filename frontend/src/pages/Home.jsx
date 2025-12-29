import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/latestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import Newsletter from '../components/Newsletter'

export default function Home() {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <Newsletter/>
    </div>
  )
}
