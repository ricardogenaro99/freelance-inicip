import React, { useId } from "react";
import { ContainerInputLabel } from "./styles";

function TextareaLabel({
  label,
  name,
  placeholder,
  value,
  onChange,
  required,
}) {
  const id = useId();

  return (
    <ContainerInputLabel htmlFor={id}>
      {label && <span className="label-form">{label}</span>}
      <textarea
        className="input-form"
        name={name}
        id={id}
        rows="6"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      ></textarea>
    </ContainerInputLabel>
  );
}

export default TextareaLabel;
