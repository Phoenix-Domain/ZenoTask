import './App.css'
import Header from './components/Headers/Header'
import Form from './components/Sections/Form'

function App() {
  return (
    <>
      <Header 
        size={1}
        content='ZenoTask'
      />

      <Form />
    </>
  )
}

export default App
