import React from 'react'
import {Button, Form, FormGroup, Label, Input } from 'reactstrap'

const Login = () => {
  return (
    <>
    <div className='relative flex flex-row justify-between bg-[#212529] py-6 px-12'>
        <h2 className='text-white text-3xl'>FRSH</h2>
    </div>
    <Form>
      <FormGroup>
        <Label for='email'>
          Email
        </Label>
        <Input
          bsSize="lg"
          invalid
          valid
          placeholder="email"
          name="email"
          type="email"
          id="email"
        />
      </FormGroup>
      <FormGroup>
        <Label for='staff_id'>
          Staff ID
        </Label>
        <Input
          bsSize="lg"
          invalid
          valid
          placeholder="staff_id"
          name="staff_id"
          type="staff_id"
          id="staff_id"
        />
      </FormGroup>
      <FormGroup>
        <Label for='password'>
          Password
        </Label>
        <Input
          bsSize="lg"
          invalid
          valid
          placeholder="password"
          name="password"
          type="password"
          id="password"
        />
      </FormGroup>
      <Button
        block
        color="primary"
        size="lg"
      >
        Sign in
      </Button>
    </Form>
    </>
  )
}

export default Login