export const Task=(props)=>{
    return (<div className="item" style={{backgroundColor:props.completed ? 'yellow':'white'}}>
    <h2>{props.taskName}</h2>
   <button className="btn" onClick={()=>props.CompleteTask(props.id)}>Complete</button>
<button className="btn" onClick={()=>props.deleteTask(props.id)}>X</button>
</div>
)
}