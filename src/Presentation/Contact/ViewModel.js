import React, { useState } from 'react'

const ContactViewModel = () => {
  // const [error, setError] = useState("")
  const [values, setValues] = useState({
    full_name: "",
    phone: "",
    email: ""
  })

  function onChange(value, prop) {
    console.log("changing", value, prop)
    setValues({...values, [prop]: value})
  }

  async function emailEnquiry() {
    // const { result, error } = await createProductUseCase(values)
    // setError(error)
    // post to email form
  }

  return {
    ...values,
    onChange,
    emailEnquiry
  }
}

export default ContactViewModel
