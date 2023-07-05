import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
      <h2 className='heading'> Welcome to fake store, everything is fake</h2>

      <section>
        <h3>Fake Products</h3>
        <Products/>
      </section>
    </div>
  )
}

export default Home

