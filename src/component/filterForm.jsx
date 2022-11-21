import React from 'react';
import CheckBoxField from './checkBoxField';
import Dropdown from './dropdown';
import { Link } from 'react-router-dom';

const FilterForm = ({arrRole, onFilter, onFilterIsArchive, selectedProf, OnDeleteFilter, AddNewEmployee}) => {
    return (
        <>
            <h5>фильтрация</h5>
            <div className='d-flex flex-row justify-content-center'> 
                <h6>должность</h6>
                <Dropdown arr={arrRole} onFilter={onFilter} value={'role'}/>
            </div>
            <div className='d-flex flex-row justify-content-center '> 
                <h6 className='m-1'>cтатус</h6>
                <CheckBoxField  children={"в архиве"} onChange={onFilterIsArchive} value= {selectedProf.isArchive} name="isArchive"/>
            </div>
            <button type="button" className="btn btn-secondary btn-sm m-1" onClick = {OnDeleteFilter}>Сброс фильтров и сортировки</button>
            <p>Сортировка при нажатии по заголовку</p>
            <Link to = {`/newEmployee`}>
                <button type="button" className="btn btn-primary btn-sm m-1" >
                    Добавление нового сотрудника
                </button>
            </Link>
            
        </>
        

    );
}
 
export default FilterForm;