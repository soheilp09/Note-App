

import { useState } from 'react'
import AddNewNote from './AddNewNote'
import './App.css'
import NoteList from './NoteList'
import NoteHeader from './NoteHeader';
import NoteStatus from './NoteStatus';


function App() {

  const [notes,setNotes] = useState([]);


function handeldelete(id){
const filterdNotes =   notes.filter((item)=>item.id != id);
setNotes(filterdNotes)
};

function handelToggle(id) {

 const newNote =  notes.map((item)=>item.id === id ?{...item,completed: !item.completed} : item)
 setNotes(newNote)

};


  return (
    <div className='container'>
      <NoteHeader notes={notes.length}/>
      <div className='note-app'>
        <AddNewNote setNotes={setNotes}/>
        
       <div className='note-container'>
       <NoteStatus notes={notes}/>
       <NoteList notes={notes} onDelete={handeldelete} onToggle={handelToggle}/>
       </div>
      </div>

    </div>
  )
}

export default App
