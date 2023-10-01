import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import { useState } from 'react'
import { Button, Col, Form, FormFeedback, FormGroup, FormText, Input, Label, Row } from 'reactstrap'


const Register = () => {
  /**states */
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [staffID, setStaffID] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordAgain, setPasswordAgain] = useState("")

  /**hooks */
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, username, password, passwordAgain }),
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

    setFirstName("")
    setLastName("")
    setEmail("")
    setStaffID("")
    setUsername("")
    setPassword("")
    setPasswordAgain("")
  }

  /**return */
  return (
    <div className='flex flex-col items-center justify-center w-full m-auto p-4 '>
      <div className='flex flex-row items-center justify-center w-full h-[70px] m-4 p-4'>
        <h2>Register</h2>
      </div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for='firstName'>First name</Label>
              <Input bsSize='sm'
                // invalid
                // valid
                type='text'
                id='firstName'
                value={firstName}
                placeholder='First Name'
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for='lastName'>Last name</Label>
              <Input bsSize='sm'
                // invalid
                // valid
                type='text'
                id='lastName'
                value={lastName}
                placeholder='Last Name'
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <FormGroup>
              <Label for='email'>Email</Label>
              <Input bsSize='sm'
                // invalid
                // valid
                type='email'
                id='email'
                value={email}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormText>Your work email</FormText>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for='staffID'>Employee ID</Label>
              <Input bsSize='sm'
                // invalid
                // valid
                type='text'
                id='staffID'
                value={staffID}
                placeholder='Employee ID'
                onChange={(e) => setStaffID(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for='username'>Preferred username</Label>
              <Input bsSize='sm'
                // invalid
                // valid
                type='text'
                id='username'
                value={username}
                placeholder='Preferred username'
                onChange={(e) => setUsername(e.target.value)}
              />
              <FormFeedback valid tooltip>Name is available</FormFeedback>
              <FormFeedback invalid tooltip>Name is already taken</FormFeedback>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for='password'>Password</Label>
              <Input bsSize='sm'
                // invalid
                type='password'
                id='password'
                value={password}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormFeedback valid tooltip></FormFeedback>
              <FormFeedback invalid tooltip>Invalid password</FormFeedback>
              {/* <FormText></FormText> */}
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for='passwordAgain'>Re-type password</Label>
              <Input bsSize='sm'
                // invalid
                type='password'
                id='passwordAgain'
                value={passwordAgain}
                placeholder='Re-type password'
                onChange={(e) => setPasswordAgain(e.target.value)}
              />
              <FormFeedback valid tooltip></FormFeedback>
              <FormFeedback invalid tooltip>Invalid password</FormFeedback>
              {/* <FormText></FormText> */}
            </FormGroup>
          </Col>
        </Row>
        <Row className='my-4'>
          <Col md={2}>
            <Button type="submit" bsSize='lg' color='primary' block>
              Register
            </Button>
          </Col>
        </Row>
      </Form>
      <div className='h-[70px] m-4 p-4'>
        <span>Already registered?</span>&emsp;
        <span>
          <Link href="/login">Log In</Link>
        </span>
      </div>
    </div>
  )
}

export default Register