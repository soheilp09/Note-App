import { MdClose } from "react-icons/md";

function NoteList({notes,onDelete}) {
  return (
    <div className='note-container'>

     {notes.map((item)=>(
        <NoteItem key={item.id} item={item} onDelete={onDelete}/>
     ))}
        
    </div>
  )
};


function NoteItem({item,onDelete}){
    
return(
    <div className="note-item">
    <div className="note-item__header">
       <div>
       <p className="title">{item.title}</p>
       <p className="desc">{item.description}</p>
       </div>
    <div className="actions">
        <button onClick={()=>onDelete(item.id)}><MdClose className="CloseIcon"/></button>
        <input type="checkbox" name="" id="" />
    </div>
    </div>
    <div className="note-item__footer">
        {new Date().toLocaleDateString("en-US")}
    </div>
</div>
)
}

export default NoteList
