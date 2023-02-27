import { Select} from 'antd'
function DefaultSelect({ defaultValue, USD, EUR, UAH, onChange }) {
    return (
      <Select
        defaultValue={defaultValue}
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
        style={{
          minWidth: 100,
          maxWidth: 140,
        }}
      />
    )
}
export default DefaultSelect