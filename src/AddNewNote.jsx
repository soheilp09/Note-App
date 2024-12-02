import { useState } from "react"


function AddNewNote() {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    
  return (
    <div className="add-new-note">
            <h1>Add New Note</h1>
        <form className="note-form">
            <input value={title}  onChange={(e)=>setTitle(e.target.value)} className="text-field" type="text" placeholder="Note title..." />
            <input  value={description} onChange={(e)=>setDescription(e.target.value)} className="text-field" type="text" placeholder="Note description..." />
            <button  className="btn btn--primary">Add New Note</button>
        </form>
      
    </div>
  )
}

export default AddNewNote
