import React from 'react'
import Form from './components/Form'



function App() {
  return (
    <>
    <div className="flex justify-center items-center w-full h-screen bg-gradient-to-r from-slate-600 to-slate-900">
        <div className=" w-2/3 h-4/6 border border-white border-1 rounded-xl">
            <h1 className="font-bold text-center text-lg text-white mt-4">Weather App</h1>
            <div className='w-full'>
              <Form/>
              
            </div>
        </div>
    </div>
    </>
  )
}

export default App
