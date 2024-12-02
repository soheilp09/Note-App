import { MdClose } from "react-icons/md";

function NoteList({notes,onDelete,onToggle}) {
  return (
    <div className='note-container'>

     {notes.map((item)=>(
        <NoteItem key={item.id} item={item} onDelete={onDelete} onToggle={onToggle}/>
     ))}
        
    </div>
  )
};


function NoteItem({item,onDelete,onToggle}){
    
return(
    <div className={`note-item ${item.completed ? "completed" : ""}`}>
    <div className="note-item__header">
       <div>
       <p className="title">{item.title}</p>
       <p className="desc">{item.description}</p>
       </div>
    <div className="actions">
        <button onClick={()=>onDelete(item.id)}><MdClose className="CloseIcon"/></button>
        <input onChange={()=>onToggle(item.id)} type="checkbox" name=""  id="" />
    </div>
    </div>
    <div className="note-item__footer">
        {new Date().toLocaleDateString("en-US")}
    </div>
</div>
)
}

export default NoteList
