import AttendeeList from './components/Attendee-list'
import Header from './components/Header'
import './index.css'

function App() {

  return (
    <main className='p-5 space-y-5'>
      <Header/>
      <AttendeeList/>
    </main>
  )
}

export default App
