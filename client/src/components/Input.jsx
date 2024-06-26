import React from "react";
function Input(props)
{
    return(
        <input type={props.type} placeholder={props.placeholder} name={props.name} 
        value={props.value}
        onChange={props.onChange} />
    );

}
export default Input;