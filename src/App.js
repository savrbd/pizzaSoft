import './App.css';
import React, { useEffect, useState } from 'react';
// import data from './employees.json';
import Main from './pages/Main';
import { Route, Routes } from "react-router-dom";
import EmployeePage from './pages/employeePage';
import getRandomInt from './component/utils/getRandomInt'
import { useDispatch, useSelector } from 'react-redux';
import { createEmployee, getEmployees, loadEmployees, updateEmployee } from './store/employees';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadEmployees());
  }, []);
  const employees=useSelector(getEmployees());
  // const [employees, setEmployees]= useState();
  // useEffect(() => {
  //   setEmployees(data)
  // },  []);
  const arrRole = ["driver", "waiter", "cook"]
  const cc = {
    id: "",
    name: "",
    isArchive: false,
    role: "",
    phone: "",
    birthday: ""};
  const [emplChange,setEmplChange]= useState(cc);
  const onEmployeeEdit = (params) => {
    setEmplChange(employees.filter((item)=>{ return item.id === Number(params)})[0])
  };
  const handleChange = (target) => {
    setEmplChange((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }
  const handleUpdateEmployee = () => {
    if (emplChange.id){
      let newEmployees = [...employees];
      newEmployees[newEmployees.findIndex((item)=>{return item.id=== emplChange.id})]= emplChange;
      // setEmployees(newEmployees);
      dispatch(updateEmployee(emplChange))
      setEmplChange(cc)
    } else {
      let newEmployees = [...employees];
      newEmployees.push({...emplChange, id: getRandomInt(100,1000) });
      // setEmployees(newEmployees)
      dispatch(createEmployee({...emplChange, id: getRandomInt(100,1000) }))
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main employees={employees} arrRole={arrRole} onEmployeeEdit={onEmployeeEdit}/>} />
        <Route path=":employeeId" element={<EmployeePage arrRole={arrRole} emplChange={emplChange} onChange={handleChange} onUpdateEmployee={handleUpdateEmployee}/> }/>
        <Route path="/newEmployee" element={<EmployeePage emplChange={emplChange} onUpdateEmployee={handleUpdateEmployee} arrRole={arrRole} onChange={handleChange}/>} />
      </Routes>
    </div>
  );
}

export default App;
