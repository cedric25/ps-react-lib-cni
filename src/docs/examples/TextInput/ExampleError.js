import React from 'react';
import TextInput from 'ps-react-lib-cni/TextInput'

/** Error TextInput */
export default function ExampleError() {
  return (
    <TextInput
      htmlId="example-error"
      label="First Name"
      name="firstname"
      onChange={() => {}}
      required
      error="First name is required."
    />
  )
}
