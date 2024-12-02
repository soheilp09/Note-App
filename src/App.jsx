

import { useState } from 'react'
import AddNewNote from './AddNewNote'
import './App.css'
import NoteList from './NoteList'
import NoteHeader from './NoteHeader';


function App() {

  const [notes,setNotes] = useState([]);


  
  return (
    <div>
      <NoteHeader notes={notes.length}/>
      <div className='note-app'>
        <AddNewNote setNotes={setNotes}/>
        <NoteList notes={notes}/>


      </div>

    </div>
  )
}

export default App
