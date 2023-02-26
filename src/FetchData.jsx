import { useEffect, useState } from 'react'
import Header from './Header'
import Converter from './Converter'

function FetchData({ url }) {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        },
      )
  }, [])
  console.log('items ', items)
  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <>
     
      <Converter
        USD={items?.rates?.USD}
        EUR={items?.rates?.EUR}
        UAH={items?.rates?.UAH}
        />
        </>
    )
  }
}
export default FetchData
