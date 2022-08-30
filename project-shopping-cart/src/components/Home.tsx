import { useEffect, useState } from "react"

export function Home(){

    const [items, setItems] = useState([])

    const fetchItems = async ()=>{
        const data = await fetch("https://fortnite-api.theapinetwork.com/store/get")
        const items = await data.json()
        setItems(items)
        console.log(items.data)
    }
    
    useEffect(() =>{
        fetchItems()
    },[])

    return (
        <div className="d-flex justify-content-around">
            {/* {items.map((item) =>{
                return (

                )
            })} */}
        </div>
    )
}