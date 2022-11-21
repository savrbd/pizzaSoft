import React from "react";
import MaskedInput from 'react-text-mask'

const TextField = ({ label, type, name, value, onChange, maskValue, guideValue }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    if (guideValue){
       return (
        <div className="mb-3">
            <label htmlFor={name}>{label}</label>
            <div className="input-group has-validation">
                <MaskedInput
                    mask={maskValue}
                    guide={guideValue}
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
        </div>
    ); 
    } else {
        return(
            <div className="mb-3">
            <label htmlFor={name}>{label}</label>
            <div className="input-group has-validation">
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
        </div>
        )
    }
    
};

export default TextField;