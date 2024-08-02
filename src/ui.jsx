import React from 'react'
import { MdOutlineSearch } from "react-icons/md";


const ui = () => {
  return (
    <>
    <div className="sm:flex sm:w-screen">
      <nav className="h-20 w-full bg-white p-4 px-10 flex align-center justify-between sm:block sm:h-screen sm:w-72 border">
        <div className="font-extrabold text-[#f33f40] text-3xl">WatchLists</div>
        {/* nav search button starts here  */}
        <div className="relative sm:">
          <input className="pl-10 py-2 rounded-3xl w-80 border-2 border-orange-500 outline-none font-medium sm:w-full sm:rounded-md" 
            type="text" name="search" 
            id="search" 
            placeholder="Search" 
          />
            <div className="absolute inset-y-0 pl-3 left-0 pointer-events-none top-2.5">
              <MdOutlineSearch className="w-6 h-6 text-orange-600" />
            </div>
        </div>
        {/* nav search button ends here  */}
        <div>
          <button className="bg-red-500 rounded-lg px-4 py-2">Login</button>
        </div>
      </nav>

      {/* main body right division starts here  */}
        <div className="w-screen">
          <div>

            {/* header sections starts here  */}
              <div className="m-10 p-4 border border-red-500 rounded-lg">
                <h1 className="font-semibold text-3xl">Welcome to <span className="text-red-500">Watchlists</span> </h1>
                <p className="mt-5">Browse movies, add them t watchlists and share them with friends.</p>
                <p>Just click the ---- to add a movie, the poster to see more details click to mark the movies as watched</p>
              </div>
            {/* header sections ends here  */}

            {/* search bar from here  */}
            <div className="px-10 flex flex-col sm:flex-row flex-wrap w-full">
              <div className="w-full sm:basis-3/4">
                <input className="w-full pl-10 p-2 border-2 outline-none rounded-t-lg sm:rounded-none sm:rounded-l-lg border-red-500" 
                  type="text" name="search" 
                  id="search" 
                  placeholder="Search" 
                />
              </div>
              <div className="sm:basis-1/4">
                <button className="py-2 font-bold bg-red-500 rounded-b-lg sm:rounded-none sm:rounded-r-lg h-full w-full">Search</button>
              </div>
            </div>
            {/* search bar from ends here  */}

            {/* card section from here  */}
            <div className="m-10 border flex justify-between flex-wrap">
              <div className="flex flex-col p-2 border max-w-44 h-96 rounded-lg m-2">
                <img className="w-40 h-48" src="https://th.bing.com/th/id/OIP.PtT6qwiH9diApRkYJJ4afgAAAA?pid=ImgDet&w=188&h=250&c=7" alt="Harry Potter"/>
                <div className="overflow-y-hidden">
                  <h2 className="font-bold">Harry Potter and the Goblet of Fire</h2>
                  <p className="font-semibold">(2012)</p>
                  <p className=" text-gray-500 text-clip">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis nisi repellat ex nobis voluptates numquam repellendus culpa ullam illo cupiditate!</p>
                </div>
              </div>

              <div className="flex flex-col p-2 border max-w-44 h-96 rounded-lg m-2">
                <img className="w-40 h-48" src="https://th.bing.com/th/id/OIP.PtT6qwiH9diApRkYJJ4afgAAAA?pid=ImgDet&w=188&h=250&c=7" alt="Harry Potter"/>
                <div className="overflow-y-hidden">
                  <h2 className="font-bold">Harry Potter and the Goblet of Fire</h2>
                  <p className="font-semibold">(2012)</p>
                  <p className=" text-gray-500 text-clip">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis nisi repellat ex nobis voluptates numquam repellendus culpa ullam illo cupiditate!</p>
                </div>
              </div>
              <div className="flex flex-col p-2 border max-w-44 h-96 rounded-lg m-2">
                <img className="w-40 h-48" src="https://th.bing.com/th/id/OIP.PtT6qwiH9diApRkYJJ4afgAAAA?pid=ImgDet&w=188&h=250&c=7" alt="Harry Potter"/>
                <div className="overflow-y-hidden">
                  <h2 className="font-bold">Harry Potter and the Goblet of Fire</h2>
                  <p className="font-semibold">(2012)</p>
                  <p className=" text-gray-500 text-clip">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis nisi repellat ex nobis voluptates numquam repellendus culpa ullam illo cupiditate!</p>
                </div>
              </div>
              
              <div className="flex flex-col p-2 border max-w-44 h-96 rounded-lg m-2">
                <img className="w-40 h-48" src="https://th.bing.com/th/id/OIP.PtT6qwiH9diApRkYJJ4afgAAAA?pid=ImgDet&w=188&h=250&c=7" alt="Harry Potter"/>
                <div className="overflow-y-hidden">
                  <h2 className="font-bold">Harry Potter and the Goblet of Fire</h2>
                  <p className="font-semibold">(2012)</p>
                  <p className=" text-gray-500 text-clip">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis nisi repellat ex nobis voluptates numquam repellendus culpa ullam illo cupiditate!</p>
                </div>
              </div>

              <div className="flex flex-col p-2 border max-w-44 h-96 rounded-lg m-2">
                <img className="w-40 h-48" src="https://th.bing.com/th/id/OIP.PtT6qwiH9diApRkYJJ4afgAAAA?pid=ImgDet&w=188&h=250&c=7" alt="Harry Potter"/>
                <div className="overflow-y-hidden">
                  <h2 className="font-bold">Harry Potter and the Goblet of Fire</h2>
                  <p className="font-semibold">(2012)</p>
                  <p className=" text-gray-500 text-clip">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis nisi repellat ex nobis voluptates numquam repellendus culpa ullam illo cupiditate!</p>
                </div>
              </div>
            </div>
            {/* card section ends here  */}
            
          </div>
        </div>
        
    </div>
    </>
  )
}

export default ui