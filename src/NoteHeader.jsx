
function NoteHeader({notes,sort,setSort}) {
  return (
<div className='note-header'>
    <h2>My Notes({notes})</h2>

 <select onChange={(e)=>setSort(e.target.value)} value={sort}>
  <option   value="latest">Sort Based By Latest Notes</option>
  <option   value="earliest">Sort Based By Earliest Notes</option>
  <option   value="completed">Sort Based By Completed Notes</option>
 </select>
</div>
  )
}

export default NoteHeader
