import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, FormFeedback, FormGroup, FormText, Input, Label } from 'reactstrap'


const Login = () => {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for='username'>Username</Label>
          <Input bsSize='lg' invalid valid type='text' id='username' value={username} placeholder='username'/>
          {/* <FormFeedback valid tooltip>Name is available</FormFeedback> */}
          <FormFeedback invalid tooltip>Invalid username</FormFeedback>
          {/* <FormText>name</FormText> */}
        </FormGroup>
        <FormGroup>
        <Label for='password'>Password</Label>
          <Input bsSize='lg' invalid type='password' id='password' value={password} placeholder='password'/>
          {/* <FormFeedback valid tooltip></FormFeedback> */}
          <FormFeedback invalid tooltip>Invalid password</FormFeedback>
          {/* <FormText></FormText> */}
        </FormGroup>
      </Form>
    </div>
  )
}

export default Login