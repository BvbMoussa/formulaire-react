import React from "react"


interface InputInterface {
  label:string;
  type:string;
  id:string;
  value:string;
  onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
  placeholder:string;
  inputError:string;
}  

const Input = ({label,type,id,value,onChange,placeholder,inputError}:InputInterface) =>{

    return (
        <div className="grid mb-4">
          <label htmlFor="email" className="mb-1">
            {label}:
          </label>
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            className="border p-2 rounded-md text-xl border-[#50dffb]"
            value={value}
            onChange={onChange}
          />
          {inputError && (
            <p className="text-red-500 text-sm">{inputError}</p>
          )}
        </div>
    )

}


export default Input

