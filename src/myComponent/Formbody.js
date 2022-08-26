import React,{useState}  from 'react'

export const Formbody = ({addtodo,mode}) => {
     
    const [title, setTitle] = useState(""); 
     
    const [desc, setDesc] = useState("");
     
    const submit=(e)=>{ 
        e.preventDefault(); 
        if(!title || !desc)
        { alert("**invalid inputs**");}
        else{
        addtodo(title,desc);
        setDesc(" ");
        setTitle(" ");
        }
    }      

    return (        
        <div className="container" style={(mode==='Dark Mode')?({background:'rgb(0 187 255)',color:'black',marginBottom:'7px'}):
        ({background:'rgb(0 37 147)',color:'white',marginBottom:'7px'})}>
            <form onSubmit={submit}>
                <h3 style={{ paddingTop: '8px' }}>TO-DO-LISTS:</h3>
                <h6 className="mb-3">you can add tasks here</h6>
                <div className="mb-2">
                    <label htmlFor="title" className="form-label">Enter Your Task Head:</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="Title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Enter Your Task Description:</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="Desc" />
                </div>
                <button type="submit" className="btn btn-dark btn-sm mb-3">Add</button>
            </form>
        </div> 
    )
  
}

