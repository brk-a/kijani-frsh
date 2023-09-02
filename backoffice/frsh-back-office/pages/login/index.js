import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Col, Form, FormFeedback, FormGroup, FormText, Input, Label, Row } from 'reactstrap'
import Link from 'next/link'
import { useState } from 'react'

const Login = () => {
  /**states */
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
 

  /**hooks */
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({username, password}),
      })

      const data = await response.json()
      if (response.ok) {
        console.log(data.message)
      } else {
        console.log('responseNotOk: Invalid response', data.error)
      }
    } catch (error) {
      console.log(error);
    }

    setUsername("")
    setPassword("")
  }

  /**return */
  return (
    <div className='flex flex-col items-center justify-center m-4 p-4'>
      <div className='flex flex-row items-center justify-center w-full h-[70px] m-4 p-4'>
        <h2>Log In</h2>
      </div>
      <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for='username'>Username or Employee ID</Label>
              <Input bsSize='lg'
                  // invalid
                  // valid
                  type='text'
                  id='username'
                  value={username} 
                  placeholder='Username or ID'
                  onChange={(e) => setUsername(e.target.value)}
                />
              {/* <FormFeedback valid tooltip>Name is available</FormFeedback> */}
              <FormFeedback invalid tooltip>Invalid username</FormFeedback>
              {/* <FormText>name</FormText> */}
            </FormGroup>
            <FormGroup>
            <Label for='password'>Password</Label>
            <Input bsSize='lg'
                  // invalid
                  tooltip
                  type='password'
                  id='password'
                  value={password}
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                />
              {/* <FormFeedback valid tooltip></FormFeedback> */}
              <FormFeedback invalid tooltip>Invalid password</FormFeedback>
              {/* <FormText></FormText> */}
            </FormGroup>
            <Button type="submit" bsSize='lg' color='primary' block>
              Log In
            </Button>
      </Form>
      <div className='h-[70px] m-4 p-4'>
        <span>Not registered?</span>&nbsp;
        <span>
          <Link href="/register">Register</Link>
        </span>
      </div>
      <div className='h-[70px] m-4 p-4'>
        <span>
          <Link href="">Forgot account details</Link>
        </span>
      </div>
    </div>
  )
}

export default Login