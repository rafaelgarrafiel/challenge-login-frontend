import React, { InputHTMLAttributes, useEffect, useRef } from 'react'
import { useField } from "@unform/core";

import Tooltip from "../components/Tooltip";

interface InputProps  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

import { Container } from "../styles/components/Input";

const Input: React.FC<InputProps> = ({ name, ...rest}) => {

  const inputRef = useRef(null)

  const {
    fieldName,
    error,
    defaultValue,
    registerField
  } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Container isError={!!error}>
      <input defaultValue={defaultValue} ref={inputRef} {...rest} />
      {error && (
        <Tooltip title={error} />
      )}
    </Container>
  )
}

export default Input
