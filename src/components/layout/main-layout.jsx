import React from 'react'
import { Header } from '../header/header'
import { Footer } from '../footer/footer'

function MainLayout({children}) {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default MainLayout