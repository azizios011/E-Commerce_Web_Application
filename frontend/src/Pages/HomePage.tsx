import React from 'react'
import Header from '../components/base/home/Header'
import Hero from '../components/base/home/Hero'
import ProductGrid from '../components/base/home/ProductGrid'
import Footer from '../components/base/home/Footer'

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage