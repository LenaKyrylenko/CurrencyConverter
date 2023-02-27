import { Row, Col } from 'antd'
import { useState } from 'react'
import { RetweetOutlined } from '@ant-design/icons'
import DefaultInput from '../helpers/Input'
import DefaultSelect from '../helpers/Select'
const Converter = ({ USD, UAH, EUR }) => {
  const [currentCurrency1, setCurrency1] = useState(UAH)
  const [currentCurrency2, setCurrency2] = useState(EUR)
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)

  const handleOption1Change = (value) => {
    setCurrency1(value)
    setNumber1(((number2 * value) / currentCurrency2).toFixed(2))
  }

  const handleOption2Change = (value) => {
    setCurrency2(value)
    setNumber2(((number1 * value) / currentCurrency1).toFixed(2))
  }

  const handleInput1Change = (e) => {
    const value = parseFloat(e.target.value)
    setNumber1(value)
    setNumber2(((value * currentCurrency2) / currentCurrency1).toFixed(2))
  }

  const handleInput2Change = (e) => {
    const value = parseFloat(e.target.value)
    setNumber2(value)
    setNumber1(((value * currentCurrency1) / currentCurrency2).toFixed(2))
  }
  return (
    <>
      <Row>
        <Col
          xl={{ offset: 8, span: 8 }}
          md={{ offset: 6, span: 16 }}
          sm={{ offset: 3 }}
          xs={{ offset: 3 }}
        >
          <h1> Конвертер валют в обох напрямках</h1>
        </Col>
      </Row>
      <Row>
        <Col
          xl={{ offset: 8 }}
          md={{ offset: 6 }}
          sm={{ offset: 3 }}
          xs={{ offset: 2 }}
        >
          <Col>
            <DefaultSelect
              defaultValue={'₴ UAH Гривня'}
              USD={USD}
              UAH={UAH}
              EUR={EUR}
              onChange={handleOption1Change}
            />
          </Col>

          <Col>
            <DefaultInput value={number1} onChange={handleInput1Change} />
          </Col>
        </Col>
        <Col xl={{ span: 2 }}>
          <Col>
            <RetweetOutlined
              style={{ fontSize: '30px', color: '#1677ff', margin: '0 10px' }}
            />
          </Col>
        </Col>
        <Col xl={{}}>
          <DefaultSelect
            defaultValue={'€ EUR Євро'}
            USD={USD}
            UAH={UAH}
            EUR={EUR}
            onChange={handleOption2Change}
          />

          <Col>
            <DefaultInput value={number2} onChange={handleInput2Change} />
          </Col>
        </Col>
      </Row>
    </>
  )
}

export default Converter
