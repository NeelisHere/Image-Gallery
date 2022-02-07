import React,{useEffect} from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { v4 } from 'uuid'
import ImageCard from './ImageCard'

const Gallery = () => {
    const images=useStoreState((store)=>store.images)
    return (
        <div className="container mx-auto">
            <div className='grid grid-cols-3 gap-4'>
                {console.log(images)}
                {
                    images.map((image)=>{
                        return(<ImageCard key={v4()} image={image}/>)
                    })
                }
            </div>
        </div>
    )
}

export default Gallery
