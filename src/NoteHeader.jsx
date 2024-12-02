
function NoteHeader({notes,sort,setSort}) {
  return (
<div className='note-header'>
    <h2>My Notes({notes})</h2>

 <select onChange={(e)=>setSort(e.target.value)} value={sort}>
  <option   value="latest">Latest</option>
  <option   value="earliest">Earliest</option>
  <option   value="completed">Completed</option>
 </select>


</div>
  )
}

export default NoteHeader
