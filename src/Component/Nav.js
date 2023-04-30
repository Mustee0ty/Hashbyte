import { useState } from "react"
import { NavIcons } from "../data"
import { Link } from "react-router-dom"

const Nav = () => {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <section className="absolute mx-auto flex items-center justify-center shadow-lg bottom-0 w-[365px] h-[89px] bg-[#FFFFFF]">
      <div className="flex flex-row justify-evenly items-center align-middle bg-white w-[365px] h-full">
        {NavIcons.map((icons) => {
          const { id, icon, url } = icons
          return (
            <div
              className="h-[50px] w-[50px] flex justify-center items-center hover:bg-gradient-to-r from-navPrimary to-navSecondary hover:rounded-full hover:translate-y-[-17px] transition-transform duration-300"
              key={id}
            >
              <Link to={url}>
                <img className="h-[20px] w-[20px] " src={icon} alt="" />
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Nav
