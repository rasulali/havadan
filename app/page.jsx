'use client'
import { useState } from "react"
import {
  HiMenu, HiMenuAlt3, HiChevronDown, HiChevronUp, HiChevronLeft, HiChevronRight, HiArrowSmUp, HiArrowSmDown
} from "react-icons/hi"
import { WiSunset, WiSunrise, WiMoonrise, WiMoonset, WiStrongWind, WiSnow, WiRaindrop, WiHumidity, WiBarometer } from "react-icons/wi"

const Main = () => {
  const [drawerState, setDrawerState] = useState(false)
  const [menuState, setMenuState] = useState(false)
  const [searchState, setSearchState] = useState(false)
  const [next7days, setNext7days] = useState(false)
  const [moon_sun_rise, setMoon_sun_rise] = useState(false)
  const [moon_sun_set, setMoon_sun_set] = useState(false)

  const handleEscape = (e) => {
    if (e.key === 'Enter') {
      setSearchState(false)
    } else if (e.key === 'Escape') {
      setSearchState(false)
    }
  }

  return (
    // Main wrapper grid
    <div className="flex flex-col h-screen items-center relative overflow-hidden">
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
      <div className={`h-screen w-full absolute top-0 left-0 bg-white z-20
        ${menuState ? 'translate-x-0' : 'translate-x-full'} transition flex flex-col
        `}>
        <div className="w-full h-32 top-0 left-0 flex items-center">
          <span onClick={() => { setMenuState(false) }} className="text-2xl ml-4 cursor-pointer">
            <HiChevronLeft />
          </span>
        </div>
      </div>
      {/*next 7 days*/}
      <div
        className={`absolute w-full h-full bg-white z-10 top-0 left-0
          transition-transform ${next7days ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="h-32 flex items-center">
          <span
            onClick={() => { setNext7days(false) }}
            className="ml-4 text-2xl cursor-pointer">
            <HiChevronLeft />
          </span>
        </div>
      </div>
      {/*Location & menu*/}
      <div className="w-screen text-lg h-32 flex flex-shrink-0 items-center justify-between relative">
        <div className="flex mx-auto relative justify-center items-center z-10">
          <h1 className="font-bold">Amsterdam</h1>
          <span className="mr-1 ml-0.5 font-normal">,</span>
          <h1 className="font-normal">Holland</h1>
          {!next7days ?
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
          className="absolute right-4 cursor-pointer z-30 text-2xl transition-colors" >
          {menuState ? <HiMenuAlt3 /> : <HiMenu />}
        </span>
      </div>
      {/*Wrapper*/}
      <div className="h-full w-full relative">
        {/*Current, hourly and weekly weather*/}
        <div className="h-2/3 flex flex-col">
          <h1 className="mx-auto text-2xl font-bold">Today</h1>
          <p className="mx-auto text-lg -mt-1">Wen, 8 Nov</p>
          <div className="flex flex-col mx-auto items-center justify-center relative mt-6">
            <h1 className="text-8xl">17</h1>
            <span className="absolute text-2xl top-0 right-0 translate-x-6">&#8451;</span>
          </div>
          <div className="flex font-normal text-gray-600 mx-auto -mt-1 mb-1">
            <p className="pr-[0.5ch]">Feels like</p>
            <h1>16</h1>
            <span>&#176;</span>
          </div>
          <div className="flex text-lg mt-8 -mb-1 items-center">
            <p className="ml-4 font-medium cursor-pointer">Today</p>
            <p className="ml-4 font-medium cursor-pointer">Tomorrow</p>
            <span
              onClick={() => { setNext7days(true) }}
              className="text-sky-600 font-bold cursor-pointer flex ml-auto mr-4 items-center"
            >
              Next 7 days
              <span className="text-2xl">
                <HiChevronRight />
              </span>
            </span>
          </div>
          {/*divider*/}
          <div className="h-[4px] w-full my-4 bg-black/50" />
          <div className="h-full w-fit overflow-x-scroll overflow-y-hidden flex gap-2 items-center px-2 pb-4">
            <div className="flex flex-col items-center w-20 h-full">
              <p className="text-lg font-semibold mb-2">Now</p>
              <div className="h-28 w-4/5 rounded-full bg-neutral-50 flex flex-col justify-evenly items-center">
                <span className="text-3xl -mb-2 bg-transparent">
                  <WiSnow />
                </span>
                <span className="flex -mt-2">
                  <p className="text-lg">-17</p>
                  <span>&#176;</span>
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center w-20 h-full">
              <p className="text-lg mb-2">12:00</p>
              <div className="h-28 w-4/5 rounded-full backdrop-blur-md bg-gray-50/30 border-2 border-gray-100/30 flex flex-col justify-evenly items-center">
                <span className="text-3xl -mb-2 bg-transparent">
                  <WiSnow />
                </span>
                <span className="flex -mt-2">
                  <p className="text-lg">-17</p>
                  <span>&#176;</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Additional information drawer*/}
        <div className={`w-full h-full rounded-t-3xl absolute top-2/3 bg-white drop-shadow-xl ${drawerState ?
          '-translate-y-1/3' : 'translate-y-0'} transition`}>
          {/*Toggle button*/}
          <span
            onClick={() => { setDrawerState(!drawerState) }}
            className="text-2xl w-max aspect-square flex items-center justify-center mx-auto my-2 cursor-pointer"
          >
            {drawerState ? <HiChevronDown /> : <HiChevronUp />}
          </span>
          <div className="w-full h-[calc(66.66%-2.5rem)] grid grid-cols-2 grid-rows-4">
            {/*Sunrise & Moonrise*/}
            {moon_sun_rise ?
              < div
                onClick={() => { setMoon_sun_rise(!moon_sun_rise) }}
                className="flex flex-grow items-center relative">
                <span className="absolute top-4 left-1 text-2xl">
                  <WiSunrise />
                </span>
                <span className="text-4xl w-fit aspect-square mx-4">
                  <WiMoonrise />
                </span>
                <div className="flex flex-col -space-y-1">
                  <p className="uppercase text-md">Moonrise</p>
                  <p className="text-2xl font-bold">04:03</p>
                </div>
              </div>
              :
              <div
                onClick={() => { setMoon_sun_rise(!moon_sun_rise) }}
                className="flex flex-grow items-center relative">
                <span className="absolute top-4 left-1 text-2xl">
                  <WiMoonrise />
                </span>
                <span className="text-4xl w-fit aspect-square mx-4">
                  <WiSunrise />
                </span>
                <div className="flex flex-col -space-y-1">
                  <p className="uppercase text-md">Sunrise</p>
                  <p className="text-2xl font-bold">07:20</p>
                </div>
              </div>
            }
            {/*Sunset & Moonset*/}
            {moon_sun_set ?
              <div
                onClick={() => { setMoon_sun_set(!moon_sun_set) }}
                className="flex flex-grow items-center relative">
                <span className="absolute top-4 left-1 text-2xl">
                  <WiSunset />
                </span>
                <span className="text-4xl w-fit aspect-square mx-4">
                  <WiMoonset />
                </span>
                <div className="flex flex-col -space-y-1">
                  <p className="uppercase text-md">Moonset</p>
                  <p className="text-2xl font-bold">16:00</p>
                </div>
              </div>
              :
              <div
                onClick={() => { setMoon_sun_set(!moon_sun_set) }}
                className="flex flex-grow items-center relative">
                <span className="absolute top-4 left-1 text-2xl">
                  <WiMoonset />
                </span>
                <span className="text-4xl w-fit aspect-square mx-4">
                  <WiSunset />
                </span>
                <div className="flex flex-col -space-y-1">
                  <p className="uppercase text-md">Sunset</p>
                  <p className="text-2xl font-bold">17:28</p>
                </div>
              </div>

            }
            {/*Wind*/}
            <div className="flex flex-grow items-center ">
              <span className="text-4xl w-fit aspect-square mx-4">
                <WiStrongWind />
              </span>
              <div className="flex flex-col -space-y-1">
                <p className="uppercase text-md">Wind</p>
                <p className="text-2xl font-bold">11 km/h</p>
              </div>
            </div>
            {/*Precipitation*/}
            <div className="flex flex-grow items-center ">
              <span className="text-4xl w-fit aspect-square mx-4">
                <WiRaindrop />
              </span>
              <div className="flex flex-col -space-y-1">
                <p className="uppercase text-md">Precipitation</p>
                <p className="text-2xl font-bold">90 %</p>
              </div>
            </div>
            {/*Pressure*/}
            <div className="flex flex-grow items-center ">
              <span className="text-4xl w-fit aspect-square mx-4">
                <WiBarometer />
              </span>
              <div className="flex flex-col -space-y-1">
                <p className="uppercase text-md">Pressure</p>
                <p className="text-2xl font-bold">1015 hPa</p>
              </div>
            </div>
            {/*Humidity*/}
            <div className="flex flex-grow items-center ">
              <span className="text-4xl w-fit aspect-square mx-4">
                <WiHumidity />
              </span>
              <div className="flex flex-col -space-y-1">
                <p className="uppercase text-md">Humidity</p>
                <p className="text-2xl font-bold">70 %</p>
              </div>
            </div>
            {/*Polem, Aqi,Running*/}
            <div className="flex flex-col w-[200%] pl-4 py-1 justify-evenly">
              <span className="flex items-center">
                <p className="text-xl uppercase font-bold mr-8">aqi</p>
                <p className="text-xl uppercase font-semibold">41</p>
                <span className="text-xl">
                  <HiArrowSmDown style={{ color: "orange" }} />
                </span>
              </span>
              <div className="border w-screen -m-1" />
              <p className="text-xl uppercase font-bold">Pollen Index 0</p>
              <div className="border w-screen -m-1" />
              <p className="text-xl uppercase font-bold">Running Good</p>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}
export default Main
