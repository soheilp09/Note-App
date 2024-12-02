

import { useState } from 'react'
import AddNewNote from './AddNewNote'
import './App.css'
import NoteList from './NoteList'
import NoteHeader from './NoteHeader';


function App() {

  const [notes,setNotes] = useState([]);


function handeldelete(id){
const filterdNotes =   notes.filter((item)=>item.id != id);
setNotes(filterdNotes)

}
  
  return (
    <div>
      <NoteHeader notes={notes.length}/>
      <div className='note-app'>
        <AddNewNote setNotes={setNotes}/>
        <NoteList notes={notes} onDelete={handeldelete}/>


      </div>

    </div>
  )
}

export default App
