

function NoteStatus({notes}) {

 const AllNotes = notes.length;
 const completed =  notes.filter((item)=>item.completed === true).length;
 const Open = AllNotes - completed;

 if(!AllNotes) return <h2>No Notes Has Already Been Added.</h2>
  return (
 <ul className="note-status">
  <li>All <span >{AllNotes}</span></li>
  <li>Conpleted <span >{completed}</span></li>
  <li>Open <span >{Open}</span></li>
 </ul>
  )
}

export default NoteStatus
