
import { useState } from 'react'
import AddNewNote from './AddNewNote'
import './App.css'
import NoteList from './NoteList'
import NoteHeader from './NoteHeader';
import NoteStatus from './NoteStatus';


function App() {

  const [notes,setNotes] = useState([]);
  const [sort,setSort] = useState("latest");


  //HandelDelete
function handeldelete(id){
const filterdNotes =   notes.filter((item)=>item.id != id);
setNotes(filterdNotes)
};

//ToggleComponent
function handelToggle(id) {

 const newNote =  notes.map((item)=>item.id === id ?{...item,completed: !item.completed} : item)
 setNotes(newNote)

};

//SortNotes
let sortedNotes = notes;
if(sort === "earliest")sortedNotes.sort((a,b)=>new Date(a.creaditAt) - new Date(b.creaditAt))
  if(sort === "latest")sortedNotes.sort((a,b)=>new Date(b.creaditAt) - new Date(a.creaditAt))
    if(sort === "completed")sortedNotes.sort((a,b)=>new Date(a.completed) - new Date(b.completed))



  return (
    <div className='container'>
      <NoteHeader setSort={setSort} sort={sort} notes={notes.length}/>

      <div className='note-app'>
        <AddNewNote setNotes={setNotes}/>

       <div className='note-container'>
       <NoteStatus notes={notes}/>
       <NoteList notes={sortedNotes} onDelete={handeldelete} onToggle={handelToggle}/>
       </div>

      </div>

    </div>
  )
}

export default App
