

import { useState } from 'react'
import AddNewNote from './AddNewNote'
import './App.css'
import NoteList from './NoteList'


function App() {

  const [notes,setNotes] = useState([]);


  
  return (
    <div>
      <div className='note-header'>noteHeader</div>
      <div className='note-app'>
        <AddNewNote setNotes={setNotes}/>
        <NoteList notes={notes}/>


      </div>

    </div>
  )
}

export default App
