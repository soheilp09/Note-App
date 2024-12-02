

import AddNewNote from './AddNewNote'
import './App.css'
import NoteList from './NoteList'


function App() {


  return (
    <div>
      <div className='note-header'>noteHeader</div>
      <div className='note-app'>
        <AddNewNote/>
        <NoteList/>


      </div>

    </div>
  )
}

export default App
