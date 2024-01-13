// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import image from './images/image.jpg'

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => {
  const bgColor = hexaColor()
  const styles = {
    height: '100px',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    fontFamily: 'Montserrat',
    margin: '2px auto',
    borderRadius: '5px',
    width: '75%',
    border: '2px solid black',
  }
  return (
    <div style={styles}>
      <h2>{bgColor}</h2>
    </div>
  )
}

// Header Component
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>Welcome to My personal portfolio </h1>
      <h2>Studying in CIT</h2>
      <h3>Web Developer</h3>
      <p>Harshitha S R</p>
      <small>Jan 13, 2024</small>
    </div>
  </header>
)

// User Card Component
const UserCard = () => (
  <div className='user-card'>
    <img src={image} alt=' image' />
    <h2>Harshitha S R</h2>
  </div>
)

// TechList Component
const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript']
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted
}
const buttonStyles = {
  padding: '10px 20px',
  background: 'rgb(0, 255, 0)',
  border: 'none',
  borderRadius: 5,
}

const Button = () => <button style={buttonStyles}> action </button>

// Main Component
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <p>Intrested Domain :</p>
      <ul>
        <TechList />
      </ul>
      <UserCard />
      <div>
       
      </div>
    </div>
  </main>
)

// Footer Component
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p> © Copyright 2024</p>
    </div>
  </footer>
)

// The App, or the parent or the container component
const App = () => (
  <div className='app'>
    <Header />
    <Main />
    <Footer />
  </div>
)

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)
