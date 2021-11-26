import React from "react";
import InputField from "./InputField";


export default class InputFields extends React.Component {
    handleChange = (e) => {
        const { maxLength, value, name } = e.target;
        const [fieldName, fieldIndex] = name.split("-");
    
        let fieldIntIndex = parseInt(fieldIndex, 10);
    
        // Check if no of char in field == maxlength
        if (value.length >= maxLength) {
    
        // It should not be last input field
        if (fieldIntIndex < 3) {
    
            // Get the next input field using it's name
            const nextfield = document.querySelector(
            `input[name=field-${fieldIntIndex + 1}]`
            );
    
            // If found, focus the next field
            if (nextfield !== null) {
            nextfield.focus();
            }
        }
        }
    };
    
    render() {
        return (
        <div style={{ padding: 30 }}>
            <InputField name="field-1" length="1"
                    handleChange={this.handleChange} />
            <InputField name="field-2" length="1"
                    handleChange={this.handleChange} />
            <InputField name="field-3" length="1"
                    handleChange={this.handleChange} />
        </div>
        );
    }
    }