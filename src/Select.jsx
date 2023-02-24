import { Select, Space, Input, Row, Col } from 'antd'
import { useEffect, useState } from 'react'

const Converter = ({ USD, EUR, UAH }) => {
  const [current_currency1, setCurrency1] = useState(UAH)
  const [current_currency2, setCurrency2] = useState(EUR)
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)

  const handleCurrentCurrency1 = (value) => {
    setCurrency1(value)
    setNumber2((value * number1) / current_currency2)
    console.log('1   ', (value * number1) / current_currency2)
  }

  const handleCurrentCurrency2 = (value) => {
    setCurrency2(value)
    setNumber2((value * number1) / current_currency1)
  }

  const handleNumber1 = (e) => {
    const value = e.target.value
    setNumber1(value)
    setNumber2((value * current_currency2) / current_currency1)
  }

  const handleNumber2= (e) => {
    const value = e.target.value
    setNumber2(value)
    setNumber1((value * current_currency1) / current_currency2)
  }

  return (
    <>
          <Row>
              <Col span={3}></Col>
        <Col span={9}>
          <Select
            defaultValue="UAH"
            style={{
              width: 120,
            }}
            onChange={handleCurrentCurrency1}
            options={[
              {
                value: USD,
                label: 'USD',
              },
              {
                value: EUR,
                label: 'EUR',
              },
              {
                value: UAH,
                label: 'UAH',
              },
            ]}
          />
          <Input
            style={{
              display: 'flex',
            }}
            xl={{ size: 'large' }}
            xs={{ size: 'small' }}
            value={number1}
            type="number"
            onChange={handleNumber1}
          />
        </Col>
        <Col span={9}>
          <Select
            defaultValue="EUR"
            style={{
              width: 120,
            }}
            onChange={handleCurrentCurrency2}
            options={[
              {
                value: USD,
                label: 'USD',
              },
              {
                value: EUR,
                label: 'EUR',
              },
              {
                value: UAH,
                label: 'UAH',
              },
            ]}
          />
          <Input
            style={{
              display: 'flex',
            }}
            xl={{ size: 'large' }}
            xs={{ size: 'small' }}
    
            value={number2}
            type="number"
            onChange={handleNumber2}
          />
              </Col>
              <Col span={3}></Col>
      </Row>
    </>
  )
}

export default Converter
