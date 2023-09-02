import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Col, Form, FormFeedback, FormGroup, FormText, Input, Label, Row } from 'reactstrap'


const Register = () => {
  return (
    <div>
      <Form action="submit" >
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for='firstName'>First name</Label>
              <Input bsSize='lg' invalid valid type='text' id='firstName' value={firstName} placeholder='First Name'/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='lastName'>Last name</Label>
              <Input bsSize='lg' invalid valid type='text' id='lastName' value={lastName} placeholder='Last Name'/>
            </FormGroup>
          </Col>
        <FormGroup>
          <Label for='email'>Email</Label>
          <Input bsSize='lg' invalid valid type='email' id='email' value={email} placeholder='Email'/>
          <FormText>Your work email</FormText>
        </FormGroup>
        <FormGroup>
          <Label for='username'>Preferred username</Label>
          <Input bsSize='lg' invalid valid type='text' id='username' value={username} placeholder='Prefered username'/>
          <FormFeedback valid tooltip>Name is available</FormFeedback>
          <FormFeedback invalid tooltip>Name is already taken</FormFeedback>
        </FormGroup>
        <Col md={6}>
        <FormGroup>
        <Label for='password'>Password</Label>
          <Input bsSize='lg' invalid type='password' id='password' value={password} placeholder='Password'/>
          <FormFeedback valid tooltip></FormFeedback>
          <FormFeedback invalid tooltip>Invalid password</FormFeedback>
          {/* <FormText></FormText> */}
        </FormGroup>
        </Col>
        <FormGroup>
        <Label for='passwordAgain'>Re-type password</Label>
          <Input bsSize='lg' invalid type='password' id='passwordAgain' value={passwordAgain} placeholder='Re-type password'/>
          <FormFeedback valid tooltip></FormFeedback>
          <FormFeedback invalid tooltip>Invalid password</FormFeedback>
          {/* <FormText></FormText> */}
        </FormGroup>
        <Button>
          Register
        </Button>
        </Row>
      </Form>
    </div>
  )
}

export default Register