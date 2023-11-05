'use client'
import { useState } from "react"
import { HiMenu, HiMenuAlt3, HiChevronDown } from "react-icons/hi"

const Main = () => {
  const [drawerState, setDrawerState] = useState(false)
  const [menuState, setMenuState] = useState(false)
  const [searchState, setSearchState] = useState(true)
  const tempLocName = {
    city: 'Amsterdam',
    country: 'Holland'
  }
  const handleEscape = (e) => {
    if (e.key === 'Enter') {
      setSearchState(false)
    } else if (e.key === 'Escape') {
      setSearchState(false)
    }
  }

  const hoursList = [];

  for (let hour = 0; hour <= 23; hour++) {
    const formattedHour = hour.toString().padStart(2, '0');
    hoursList.push(`${formattedHour}:00`);
  }
  return (
    // Main wrapper grid
    <div className="flex flex-col h-screen items-center relative bg-blue-500 overflow-hidden">
      {searchState ?
        <>
          <input
            className="w-4/5 h-12 absolute z-40 top-8 left-auto rounded-full pl-4 outline-none placeholder-black"
            placeholder={`Search place`}
            autoFocus
            onFocus={() => { setSearchState(true) }}
            onBlur={() => { setSearchState(false) }}
            onKeyDown={handleEscape}
          />
          <div
            className="absolute w-full h-full bg-white/20 backdrop-blur-lg z-30">
          </div>
        </>
        : null}
      {/*Menu page*/}
      <div className={`h-screen w-full absolute top-0 left-0 bg-white z-10
        ${menuState ? 'translate-x-0' : 'translate-x-full'} transition grid place-items-center`}>
        <h1>about page</h1>
      </div>
      {/*Location & menu*/}
      <div className="w-screen text-lg h-32 flex z-20 items-center justify-between relative">
        <div className="flex mx-auto relative justify-center items-center ">
          <h1 className="font-bold">{tempLocName.city}</h1>
          <span className="mr-1 ml-0.5 font-normal">,</span>
          <h1 className="font-normal">{tempLocName.country}</h1>
          {!menuState ?
            <span
              className="flex flex-col w-[120%] items-end absolute text-lg cursor-pointer"
              onClick={() => { setSearchState(true) }}
            >
              <HiChevronDown />
            </span>
            : null
          }
        </div>
        <span onClick={() => { setMenuState(!menuState) }}
          className="absolute right-4 cursor-pointer text-2xl transition-colors" >
          {menuState ? <HiMenuAlt3 /> : <HiMenu />}
        </span>
      </div>
      {/*Wrapper*/}
      <div className="h-full w-full relative border-2 border-orange-400">
        {/*Current, hourly and weekly weather*/}
        <div className="h-2/3 bg-sky-100 flex flex-col items-center">
        </div>
        {/* Additional information section*/}
        <div className={`w-screen h-full rounded-t-3xl absolute top-2/3 ${drawerState ?
          '-translate-y-2/3' : 'translate-y-0'} transition bg-white`}>
          <h1 className="text-xl text-center px-4 py-2 border-2 rounded-full border-black w-24 mx-auto mt-4 cursor-pointer"
            onClick={() => { setDrawerState(!drawerState) }}
          >
            {drawerState ? "Down" : "Up"}
          </h1>
        </div>
      </div>
    </div>
  )
}
export default Main
