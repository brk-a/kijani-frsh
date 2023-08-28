import Link from 'next/link'
import {useState} from 'react'
import {Form, FormGroup, Label, Input, Badge } from 'reactstrap'

const Login = () => {
  const [email, setEmail] = useState("")
  const [staff_id, setStaff_id] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = () => {}
  return (
    <div className='w-full h-full'>
      <div className='flex flex-col bg-slate-600 items-center justify-center'>
        <div className='relative flex flex-row justify-between bg-[#212529] py-6 px-12'>
            <h2 className='text-white text-3xl'>FRSH</h2>
        </div>
        <Form action="submit"
          onSubmit={handleSubmit}
          style={{display: "flex", flexDirection: "column", gap: "32px"}}
        >
          <FormGroup
            style={{display: "flex", flexDirection: "column", gap: "4px", width: "300px"}}
          >
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup
            style={{display: "flex", flexDirection: "column", gap: "4px", width: "300px"}}
          >
            <Label for='staff_id'>
              ID
            </Label>
            <Input
              bsSize="lg"
              invalid
              valid
              placeholder="Staff ID"
              name="staff_id"
              type="staff_id"
              id="staff_id"
              value={staff_id}
              onChange={(e) => setStaff_id(e.target.value)}
            />
          </FormGroup>
          <FormGroup
            style={{display: "flex", flexDirection: "column", gap: "4px", width: "300px",}}
          >
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <Badge
            style={{
              backgroundColor: "#212529",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              width: "200px",
              justifyContent: "center",
              justifyItems: "center",
              borderRadius: "50px",
            }}
            // color='primary'
            size="lg"
            pill
          >
            Sign in
          </Badge>
        </Form>
        <div
          style={{display: "flex", flexDirection: "row", gap: "4px", width: "300px", margin: "10px"}}
        >
          <span>New here?</span>
          <span><Link href='/register'>Register</Link></span>
        </div>
        <div
          style={{display: "flex", flexDirection: "row", gap: "4px", width: "300px", margin: "10px"}}
        >
          <span><Link href='/forgot'>Forgot account details</Link></span>
        </div>
      </div>
    </div>
  )
}

export default Login