import Header from "./Header"
import Converter from "./Converter"
const Wrapper = ({ USD, EUR, UAH }) => 
<>
      <Header USD={USD} EUR={EUR} />
     <Converter USD={USD} EUR={EUR} UAH={UAH}/>

</>

export default Wrapper
