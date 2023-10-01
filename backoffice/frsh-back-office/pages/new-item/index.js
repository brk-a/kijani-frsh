import termsOptions from '@/app/dump/termsOptions'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import { useState } from 'react'
import { Button, Col, Form, FormFeedback, FormGroup, FormText, Input, Label, Row } from 'reactstrap'


const NewItem = () => {
  /**states */
  const [supplierName, setSupplierName] = useState("")
  const [shippingAddress, setShippingAddress] = useState("")
  const [terms, setTerms] = useState("")


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
        console.info(data.message)
      } else {
        console.info('responseNotOk: Invalid response', data.error)
      }
    } catch (error) {
      console.info(error);
    }

    setSupplierName("")
    setShippingAddress("")
    setTerms("")
  }

  /**return */
  return (
    <div className='flex flex-col items-center justify-center m-4 p-4 w-full'>
      <div className='flex flex-row items-center justify-center  h-[70px] m-auto p-4'>
        <h2>Create purchase order</h2>
      </div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={4}>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="orderDate">
                    Order date
                  </Label>
                  <Input
                    id="orderDate"
                    name="orderDate"
                    placeholder="date placeholder"
                    type="date"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="orderDate">
                    Delivery date
                  </Label>
                  <Input
                    id="orderDate"
                    name="orderDate"
                    placeholder="date placeholder"
                    type="date"
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for='supplierName'>Supplier's name</Label>
              <Input bsSize='sm'
                // invalid
                // valid
                type='text'
                id='supplierName'
                value={supplierName}
                placeholder="Supplier's Name"
                onChange={(e) => setSupplierName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for='shippingAddress'>Shipping address</Label>
              <Input bsSize='sm'
                // invalid
                // valid
                type='textarea'
                rows="5"
                id='shippingAddress'
                value={shippingAddress}
                placeholder='Enter physical address'
                onChange={(e) => setShippingAddress(e.target.value)}
              />
            </FormGroup>
            {/* </Col> */}
            <FormGroup>
              <Label for='terms'>Terms</Label>
              <Input bsSize='sm'
                // invalid
                // valid
                name="select"
                type="select"
                id='terms'
                value={terms}
                placeholder='Select Terms'
                onChange={(e) => setTerms(e.target.value)}
              >
                {termsOptions.map(term => (
                  <option key={term.id} value={term.value}>{term.initials} - {term.full}</option>
                ))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">
                Choose file
              </Label>
              <Input
                id="purchaseOrder"
                name="purchaseOrder"
                type="file"
                accept='.csv'
              />
              <FormText>
                .csv file only
              </FormText>
            </FormGroup>
            <Button type="submit" bsSize='sm' color='primary' block>
              Place order
            </Button>
          </Col>
          {/* <PurchaseOrderBody /> */}
        </Row>
      </Form>
    </div>
  )
}

export default NewItem