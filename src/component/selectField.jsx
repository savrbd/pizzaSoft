import React from "react";

const SelectField = ({
    label,
    value,
    onChange,
    defaultOption,
    options,
    name
}) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    return (
        <div className="mb-3">
            <label htmlFor="validationCustom04" className="form-label">
                {label}
            </label>
            <select
                className="form-select"
                id="validationCustom04"
                name={name}
                value={value}
                onChange={handleChange}
            >
                <option disabled value="">
                    {defaultOption}
                </option>
                {options &&
                    options.map((option) => (
                        <option value={option} key={option}>
                            {option}
                        </option>
                    ))}
            </select>
        </div>
    );
};

export default SelectField;