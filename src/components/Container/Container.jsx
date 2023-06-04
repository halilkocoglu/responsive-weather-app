import './container.css'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Section from './Section/Section'



function Container() {
  return (
    
    <div className='container'>
        <Header />
        <Section />
        <Footer />
    </div>
  )
}

export default Container