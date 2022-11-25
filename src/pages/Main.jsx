import React, { useState } from 'react';
import Table from '../component/table';
import _ from "lodash";
import FilterForm from '../component/filterForm';

const Main = ({ employees, arrRole, onEmployeeEdit }) => {
    const [selectedProf, setSelectedProf] = useState({name: '', value: '', isArchive: false})
    const [sortBy, setSortBy] = useState({ iter: '', order: '' });
    const onFilter = (params) => {
        setSelectedProf((prevState) => ({ ...prevState, ...params}))
    };
    const handleFilterIsArchive = (target) => {
        setSelectedProf((prevState) => ({ ...prevState, [target.name]: target.value}))
    };
    const handleSort = (params) => {
        if (sortBy.iter === params) {
            setSortBy((prevState) => ({ ...prevState, order: prevState.order === "asc" ? "desc" : "asc"})); 
          } else {
            setSortBy({ iter: params, order: "asc"})
          }
    };
    const handleDeleteFilter = (params) => {
        setSelectedProf({name: '', value: '', isArchive: false});
        setSortBy({ iter: '', order: "asc" })
    }
    let filterEmployees = selectedProf.name
        ? employees.filter((item) => item[selectedProf.name] === selectedProf.value)
        : employees;
    if (selectedProf.isArchive){filterEmployees= employees.filter((item) => item.isArchive === selectedProf.isArchive)}
    
    const sortedMethod = (collection, field, sortOrder ) => {
        if (field==='name'){
            if (collection && sortOrder==="asc"){
                return  [...collection].sort((a,b)=>a[field].toLowerCase().trim()> b[field].toLowerCase().trim()? 1 : -1)
            } else if (collection && sortOrder==="desc"){ 
                return [...collection].sort((a,b)=>{return a[field].toLowerCase().trim()< b[field].toLowerCase().trim()? 1 : -1})
            } 
        } else if(field==='birthday'){
            if (collection && sortOrder==="asc"){
                return  [...collection].sort((a,b)=>
                 new Date(a[field].split('.').reverse().join('-')).getTime() > new Date(b[field].split('.').reverse().join('-')).getTime()? 1 : -1)
            } else if (collection && sortOrder==="desc"){ 
                return [...collection].sort((a,b)=> 
                new Date(a[field].split('.').reverse().join('-')).getTime() < new Date(b[field].split('.').reverse().join('-')).getTime()? 1 : -1)
            } 
        } else { 
                return collection}
        
    } 
    const sortedEmployees = sortedMethod(filterEmployees,sortBy.iter,sortBy.order )
    
    // const sortedEmployees = _.orderBy(filterEmployees,[sortBy.iter],[sortBy.order] )
    



    return (
        <>
            <FilterForm arrRole={arrRole} onFilter={onFilter} onFilterIsArchive={handleFilterIsArchive} selectedProf={selectedProf} OnDeleteFilter={handleDeleteFilter} />
            <Table employees={sortedEmployees} onSort={handleSort} onEmployeeEdit={onEmployeeEdit}/> 
        </>
       
    );
}
 
export default Main;