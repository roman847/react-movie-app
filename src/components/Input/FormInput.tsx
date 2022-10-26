import React from "react";

interface IFormInputProps {
  id?: string;
  name?: string;
  value?: string;
  placeHolder?: string;
  type?: string;
  className?: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  accept?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}

const FormInput = ({
  id,
  placeHolder,
  type,
  name,
  value,
  onChange,
  onBlur,
  checked,
  label,
  className,
}: IFormInputProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        name={name}
        id={id}
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        checked={checked}
        className={className}
      />
    </div>
  );
};
export default FormInput;
