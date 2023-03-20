import React from 'react'
import { NavIcons } from '../data'
import { Link } from 'react-router-dom'



const Nav = () => {
  return (
    <section className='absolute bottom-0 w-[365px] h-[89px] '>
      <div  className='flex flex-row'>
        {
          NavIcons.map((icons) => {
            const { id,icon,url } = icons;
            return (
            <div key={id}>
              <Link to={url}>
                <img src={icon} alt="" />
              </Link>
            </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Nav