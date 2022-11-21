import React from 'react';
// import { useParams } from "react-router-dom";
import CheckBoxField from '../component/checkBoxField';
import TextField from '../component/textField';
import SelectField from '../component/selectField';
import { useNavigate } from 'react-router-dom';

const EmployeePage = ({ arrRole, emplChange, onChange, onUpdateEmployee }) => {
    // const { employeeId } = useParams();
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateEmployee()
        navigate(-1)
    }
    const maskPhone=['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    const maskData=[ /[1-9]/, /\d/, '.', /\d/, /\d/,'.', /\d/, /\d/, /\d/, /\d/];

    if (emplChange){
        return (
            <div className='container mt-5'>
                <button className="btn btn-primary btn-sm" onClick={()=>navigate(-1)}>
                    <i className="bi bi-caret-left"></i>
                    Назад
                </button>
                <div className='col-md-6 offset-md-3 shadow p-4'>
                    <h6>Форма редактирования данных сотрудника</h6>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Имя" 
                            name="name" 
                            value={emplChange.name} 
                            onChange={onChange} />
                        <TextField
                            maskValue={maskPhone}
                            guideValue = {true}
                            label="Телефон" 
                            name="phone" 
                            value={emplChange.phone} 
                            onChange={onChange} />
                        <TextField
                            maskValue={maskData}
                            guideValue = {true}
                            label="Дата рождения" 
                            name="birthday" 
                            value={emplChange.birthday} 
                            onChange={onChange} />
                        <SelectField
                            label="Выбери должность"
                            name="role"
                            defaultOption="Choose..."
                            options={arrRole}
                            onChange={onChange}
                            value={emplChange.role}/>
                        <CheckBoxField
                            value={emplChange.isArchive}
                            onChange={onChange}
                            name="isArchive"
                        >
                            В архиве
                        </CheckBoxField>
                        <button
                            type="submit"
                            className="btn btn-primary w-100 mx-auto">
                            Обновить
                        </button>
                    </form>
                    
                </div>
                
            </div>
        
    );
    } else {return "Loading..."}
    
}
 
export default EmployeePage;