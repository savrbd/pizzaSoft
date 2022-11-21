import React from 'react';

const TableHeader = ({ onSort }) => {
    return (
        <thead>
            <tr>
                <th scope="col">#</th>
                <th onClick={()=>onSort('name')} scope="col">Имя</th>
                <th scope="col">Должность</th>
                <th scope="col">Номер телефона</th>
                <th onClick={()=>onSort('birthday')} scope="col">Дата рождения</th>
            </tr>
        </thead>
    );
}
 
export default TableHeader;