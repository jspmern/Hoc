import React, { useEffect, useState } from 'react'

function hignerOrder(WrapperComp,entity) {
  return function()
  {
    let [term,setTerms]=useState('')
    let [filter,setFilter]=useState([])
    let [todo,setTodo]=useState([])
    async function getItem()
    {
        let url=`https://jsonplaceholder.typicode.com/${entity}`
        let res= await fetch(url)
        let data=await res.json()
        setFilter(data)
        setTodo(data)
    }
    //searching
    function searchHandler(e)
    {
        setTerms(e.target.value)
        let filterData=todo.filter((item)=>{
            return item.title.toLowerCase().trim().includes(e.target.value.toLowerCase().trim())
        })
        setFilter(filterData)
    }
    useEffect(()=>{
        getItem()
    },[])
    return(
        <>
        <input type='text' placeholder='enter your text for search' onChange={(e)=>{searchHandler(e)}}  value={term}/>
         <WrapperComp  data={filter}  entity={entity}/>
        </>
    )
  }
}

export default hignerOrder