import React from 'react';
 const Dropdown = ({ arr, value, onFilter }) => {
    return (
        <div className="dropdown" >
            <div className="dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false"></div>
                <ul className="dropdown-menu">
                    {arr.map((item)=>{return (
                        <li key={item}><div className="dropdown-item" onClick={()=>onFilter({"name" : value, "value":item})}>{item}</div></li>
                    )})}
                                
                </ul>
        </div>
        
    )
 }
  
 export default Dropdown;