import React from 'react'
 
const List = ({items,state,setState}) => {
  return (  
    <div>
       <ul>
     {
      items.map((items,i)=>(
        <li className={state==i?'bg-blue-500 text-white':''} onClick={()=>setState(i)}>{items}</li>
      ))
     }
     </ul>
    </div>
  )
}

export default List
