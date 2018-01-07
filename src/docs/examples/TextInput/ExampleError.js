import React from 'react';
import TextInput from 'ps-react/TextInput'

/** Error TextInput */
export default function ExampleError() {
  return (
    <TextInput
      htmlId="example-error"
      label="First Name"
      name="firstname"
      required
      error="First name is required."
    />
  )
}
