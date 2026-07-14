import style from "./Todoitem.module.css"
function Todoitem({name, date}){
    
    return (
      <>
      <div class="row mb-5">
        <div className={`col-4 ${style['todospan']}`}>{name}</div>
        <div class="col-2">{date}</div>
        <div class="col-2">
            <button className="btn btn-danger">Delete</button>
        </div>
      </div>
      
      </>
    );
}
export default Todoitem