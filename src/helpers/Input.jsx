import {  Input} from 'antd'
const DefaultInput = ({ value, onChange }) => (
    <Input
      style={{
        display: 'flex',
        maxWidth: 190,
        minWidth: 100,
      }}
      size="large"
      className="Input"
      value={value}
      type="number"
      onChange={onChange}
    />
  )
export default DefaultInput