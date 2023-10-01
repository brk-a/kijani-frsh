import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Col, Form, FormFeedback, FormGroup, FormText, Input, Label, Row } from 'reactstrap'

const headers = [
  "No.",
  "Item",
  "Quantity",
  "Unit price",
  "Total price"
]
const createRow = (num) => (
  <>
    {
      headers.map((header, i) => (
        <Row key={i}>
      <Col md={6}>
        <Label
          className='visually-hidden'
        ></Label>
        <Input
          name=""
          type=''
          id=''
          value=''
          placeholder=''
          onChange={() => {}}
        />
      </Col>
    </Row>
      ))
    }
  </>
)
const PurchaseOrderBody = () => {
  return (
    <div>
      <Table
      >
        <thead>
          <tr>
            <th>
              No.
            </th>
            <th>
              Item
            </th>
            <th>
              Quantity
            </th>
            <th>
              Unit price
            </th>
            <th>
              Total price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              {setIndex(index+1)}
            </th>
            <td>
              {SettingsRemote(item)}
            </td>
            <td>
              {setQuantity(quantity)}
            </td>
            <td>
              {setUnitPrice(unitPrice)}
            </td>
            <td>
              {setTotalPrice(totalPrice)}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default PurchaseOrderBody