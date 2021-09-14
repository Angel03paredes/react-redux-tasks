import React from "react";
import {Link} from "react-router-dom"

const Navigation = ()=>{
    return (
        <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
           
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                  <Link to="/" className="text-white text-xl" >Task-App</Link>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                 
                  <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
      
                  <Link to="/add" className=" text-gray-100 bg-purple-900 hover:bg-purple-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add Task</Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      
       
      </nav>
    )
}

export default Navigation;