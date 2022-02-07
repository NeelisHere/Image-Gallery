import React,{ useState,useEffect } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'
const Input = () => {
    const [subject,setSubject]=useState('')
    const fetchImages=useStoreActions((store)=>store.fetchImages)
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        fetchImages(subject)
        setSubject('')
    }
    return (
        <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
            <div className='text-xl font-semibold text-teal-500 ml-20 mb-10'>
                <h1>Neel's Image Gallery</h1>
            </div>
            <form onSubmit={handleSubmit} className="w-full max-w-sm">
                <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                    <input type="text" 
                        value={subject}
                        placeholder="Search Image..."
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        onChange={(e)=>setSubject(e.target.value)}/>

                    <input type="submit" 
                           className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                           value="Search" />
                </div>
            </form>
        </div>
    )
}

export default Input
