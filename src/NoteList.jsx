import { MdClose } from "react-icons/md";

function NoteList() {
  return (
    <div className='note-container'>

     <NoteItem/>
        
    </div>
  )
};


function NoteItem(){
    
return(
    <div className="note-item">
    <div className="note-item__header">
       <div>
       <p className="title">W</p>
       <p className="desc">W</p>
       </div>
    <div className="actions">
        <button><MdClose className="CloseIcon"/></button>
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
