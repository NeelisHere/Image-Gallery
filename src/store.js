import { action,thunk } from "easy-peasy";
const KEY='24988252-d82d0500cfc0cc6e03a089f58'
const store={
    images:[],
    //---------------------------------
    setImages:action((state,data)=>{
        state.images=data
        // console.log(state.images)
    }),
    //-----------------------------------------------------------
    fetchImages:thunk(async(actions,subject)=>{
        const res=await fetch(
            `https://pixabay.com/api/?key=${KEY}&q=${subject}&image_type=photo&pretty=true`
        );
        const data=await res.json();
        // actions.setIsLoading(false)
        actions.setImages(data.hits);
    })
}
export default store;