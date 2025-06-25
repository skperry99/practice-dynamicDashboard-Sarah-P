import './App.css'
import Member from './components/premium'
import Greeting from './components/greeting'
import TaskList from './components/tasks'

function App() {

  return (
    <>
      <div>
        <Greeting />
        <Member />
        <TaskList />
      </div>
    </>
  )
}

export default App
