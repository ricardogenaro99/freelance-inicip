import React, { useId } from "react";
import { ContainerInputLabel } from "./styles";

function InputLabel({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  const id = useId();

  return (
    <ContainerInputLabel htmlFor={id}>
      {label && <span className="label-form">{label}</span>}
      <input
        className="input-form"
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </ContainerInputLabel>
  );
}

export default InputLabel;
