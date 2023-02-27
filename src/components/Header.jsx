import { Table, Col, Row } from 'antd'
import { Tabs } from 'antd'
function Header({ EUR, USD }) {
  const columns = [
    {
      title: <span style={{ fontSize: '18px' }}>Валюта</span>,
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: <span style={{ fontSize: '18px' }}>Курс до гривні</span>,
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


  return (
    <Row className='Header'>

      <Col xl={{ offset: 8, span: 8 }}
      md={{ offset: 6 }}
      sm={{ offset: 3}}
    xs={{ offset: 2}}
      >
        <h1> Курс валют відносно гривні (UAH) </h1>

        <Tabs defaultActiveKey="1" type="card" items={items} />
      </Col>
      
    </Row>
  )
}
export default Header
