import React from 'react';
import TableBody from './tableBody';
import TableHeader from './tableHeader';
const Table = ({ employees, onSort, sortBy, onEmployeeEdit }) => {
    if (employees){
        return (
        <table className="table">
            <TableHeader onSort={onSort}/>
            <TableBody employees={employees} onEmployeeEdit={onEmployeeEdit}/>
            </table>
    );
    } else {
        return (
            <h2>Loading...</h2>
        )
    }
    
}
 
export default Table;