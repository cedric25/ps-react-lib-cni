import React from 'react';
import TextInputBEM from 'ps-react/TextInputBEM'

/** Error TextInput */
export default function ExampleError() {
  return (
    <TextInputBEM
      htmlId="example-error"
      label="First Name"
      name="firstname"
      required
      error="First name is required."
    />
  )
}
