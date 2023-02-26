import { Space, Table, Tag, Col, Row } from 'antd'
import { Tabs } from 'antd'
function Header({ EUR, USD }) {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Currency',
      dataIndex: 'currency',
      key: 'currency',
    },
  ]
  const data = [
    {
      key: '1',
      name: 'EUR',
      currency: (1 / EUR).toFixed(2),
    },
    {
      key: '2',
      name: 'USD',
      currency: (1 / USD).toFixed(2),
    },
    ]
const dataEur = data?.[0]
  const items = [
    {
      key: '1',
      label: `Усі валюти`.toUpperCase(),
      children: (
        <Table columns={columns} dataSource={data} pagination={false} />
      ),
    },
    {
      key: '2',
      label: `Євро`.toUpperCase(),
        children: <Table columns={columns} dataSource={[data[0]]} pagination={false} />
    },
    {
      key: '3',
      label: `Долар`.toUpperCase(),
      children: <Table columns={columns} dataSource={[data[1]]} pagination={false} />
    },
  ]

  console.log('data 0 ',dataEur)

  return (
    <Row className='Header'>
      <Col span={8}></Col>

      <Col span={8}>
        <h1> Курс валют відносно гривні (UAH) </h1>

        <Tabs defaultActiveKey="1" type="card" items={items} />
      </Col>
      <Col span={8}></Col>
    </Row>
  )
}
export default Header