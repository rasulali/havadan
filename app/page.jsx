'use client'
import { useState } from "react"

const Main = () => {
  const [drawerState, setDrawerState] = useState(false)
  return (
    // Main wrapper grid
    <div className="flex flex-col h-screen justify-center bg-gray-200 relative overflow-hidden">
      {/*Current, hourly and weekly weather*/}
      <div className="h-2/3">
      </div>
      {/* Additional information section*/}
      <div className={`w-screen h-4/5 rounded-t-3xl absolute bottom-0 ${drawerState ?
        'translate-y-0' : 'translate-y-2/3'} transition bg-white`}>
        <h1 className="text-xl text-center px-4 py-2 border-2 rounded-full border-black w-24 mx-auto mt-4 cursor-pointer"
          onClick={() => { setDrawerState(!drawerState) }}
        >
          {drawerState ? "Down" : "Up"}
        </h1>
      </div>
    </div>
  )
}
export default Main
