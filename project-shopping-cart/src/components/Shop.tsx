import { useEffect, useState } from "react"


export function Shop(){

    const [items, setItems] = useState([])

    useEffect(()=>{
        fetchItems()
        console.log(items)
    },[])

    const fetchItems = async ()=>{
        const data = fetch("https://fortnite-api.theapinetwork.com/store/get")
        const items = (await data).json()
        setItems(await items)
    }

    return (
        <>
            <h1>Shop</h1>
        </>
    )
}