function Todoname(){
    return(
        <div class="container text-center">
        <div class="row">
          <div class="col-4">
            <input type="text" placeholder="enter task" />
          </div>
          <div class="col-2">
            <input type="date" />
          </div>
          <div class="col-2">
            <button className="btn btn-primary">Add</button>
          </div>
        </div>
        
      </div>
    )
}
export default Todoname