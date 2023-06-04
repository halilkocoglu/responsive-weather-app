import './App.css'
import Container from './components/Container/Container'
import {WeatherProvider} from './contexts/WeatherContext'

function App() {

  return (
    <>
      <div className='app'>
        <WeatherProvider>
        <Container />
        </WeatherProvider>
      </div>
    </>
  )
}

export default App
