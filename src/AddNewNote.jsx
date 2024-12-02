import { useState } from "react"


function AddNewNote({setNotes}) {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");


    function handelSubmit(e) {
        e.preventDefault();
        const NewNote={
            title,
            description,
            id: Date.now(),
            completed: false,
            creaditAt: new Date().toISOString()
        };
        setNotes((prev)=>[...prev,NewNote]);
        setTitle("");
        setDescription("");
        
    
    }
    
  return (
    <div className="add-new-note">
            <h1>Add New Note</h1>
        <form onSubmit={handelSubmit} className="note-form">
            <input value={title}  onChange={(e)=>setTitle(e.target.value)} className="text-field" type="text" placeholder="Note title..." />
            <input  value={description} onChange={(e)=>setDescription(e.target.value)} className="text-field" type="text" placeholder="Note description..." />
            <button type="submit"  className="btn btn--primary">Add New Note</button>
        </form>
      
    </div>
  )
}

export default AddNewNote
