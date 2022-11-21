import React from 'react';
import { Link } from 'react-router-dom';

const TableBody = ({ employees, onEmployeeEdit }) => {
    
       return (
        <tbody>
            {employees.map((empl)=>{return (
                <tr key={empl.id}>
                <th scope="row">{empl.id}</th>
                <td>
                    <div onClick={()=>onEmployeeEdit(empl.id)}>
                        <Link to = {`/${empl.id}`}>
                        {empl.name}
                        </Link>
                    </div>
                </td> 
                <td>{empl.role}</td>
                <td>{empl.phone}</td>
                <td>{empl.birthday}</td>
                </tr>
            )})}
        </tbody>
    ); 
    
    
}
 
export default TableBody;