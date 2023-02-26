import { Select, Space, Input, Row, Col } from 'antd'
import { useEffect, useState } from 'react'
import Header from './Header'
import { FaBeer, FaFlagUsa } from 'react-icons/fa'
import {
  RetweetOutlined
} from '@ant-design/icons';
const DefaultSelect = ({ defaultValue, USD, EUR, UAH, onChange }) => (
  <Select
    // placement={"topRight"}
    defaultValue={defaultValue}
    style={
      {
        // width: 120,
      }
    }
    onChange={onChange}
    options={[
      {
        value: USD,
        label: '$ USD Долар',
      },
      {
        value: EUR,
        label: '€ EUR Євро',
      },
      {
        value: UAH,
        label: '₴ UAH Гривня',
      },
    ]}
  />
)

const DefaultInput = ({ value, onChange }) => (
  <Input
    style={{
      display: 'flex',
    }}
    xl={{ size: 'large' }}
    xs={{ size: 'small' }}
    className="Input"
    value={value}
    type="number"
    onChange={onChange}
  />
)

const Converter = ({ USD, EUR, UAH }) => {
  const [current_currency1, setCurrency1] = useState(UAH)
  const [current_currency2, setCurrency2] = useState(EUR)
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)


  const handleCurrentCurrency1 = (value) => {
    setCurrency1(value)
    setNumber1((number2 * value / current_currency2).toFixed(2))
  }

  const handleCurrentCurrency2 = (value) => {
    setCurrency2(value)
    setNumber2((number1 * value / current_currency1).toFixed(2))
  }

  const handleNumber1 = (e) => {
    const value = parseFloat(e.target.value)
    setNumber1(value)
    setNumber2((value * current_currency2 / current_currency1).toFixed(2))
  }

  const handleNumber2 = (e) => {
    const value = parseFloat(e.target.value)
    setNumber2(value)
    setNumber1((value * current_currency1 / current_currency2).toFixed(2))
    
  }

  return (
    <>
      {' '}
      <Header USD={USD} EUR={EUR} />
      <Row>
        <Col span={8}> </Col>
        <Col span={6}>
          <h2> Currency Converter </h2>
        </Col>
        {/* <Col span={8}> </Col> */}
      </Row>
      <Row>
        <Col span={8}></Col>

        <Col>
          <Col>
            <DefaultSelect
              defaultValue={'₴ UAH Гривня'}
              USD={USD}
              UAH={UAH}
              EUR={EUR}
              onChange={handleCurrentCurrency1}
            />
           
          </Col>
         
          <Col>
            <DefaultInput value={number1} onChange={handleNumber1} />
           
          </Col>
          
        </Col>
        {/* <Col span={2}> */}
        <Col span={2}>
        <Col>
            <RetweetOutlined style={{ fontSize: '30px', color: '#08c' }}/>
          </Col>
        </Col>
          {/* </Col> */}
        <Col>
          <DefaultSelect
            defaultValue={'€ EUR Євро'}
            USD={USD}
            UAH={UAH}
            EUR={EUR}
            onChange={handleCurrentCurrency2}
          />

          <Col>
            <DefaultInput value={number2} onChange={handleNumber2} />
          </Col>
        </Col>
      
        <Col span={8}></Col>
      </Row>
    </>
  )
}

export default Converter
