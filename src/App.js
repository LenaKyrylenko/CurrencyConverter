import './App.scss'
import FetchData from './services/FetchData'
function App() {
  return (
    <div className="App">
      <FetchData url="https://open.er-api.com/v6/latest/UAH" />
    </div>
  )
}

export default App
