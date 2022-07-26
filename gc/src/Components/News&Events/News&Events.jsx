import React from 'react'
import MenuIndex from '../Menu/MenuIndex'
import TopMenu from '../TopMenu/TopMenu'
import SecondButton from '../SecondButton/SecondButton'
import Footer from '../Footer/Footer'
function NewsEvents() {
  return (
    <div className='home'>
      <div className="topmenu">
        <TopMenu/>
      </div>
      <div className="menuContainer">
        <MenuIndex/>
      </div>
      {/* <div className="image">
        <Image/>
      </div> */}
      <div className="bottom2">
        <SecondButton/>
      </div>
      <div className="bottom2">
        <Footer/>
      </div>
      </div>
  )
}

export default NewsEvents