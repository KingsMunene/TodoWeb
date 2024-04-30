( ()=>{

        //toDo list Array
        let toDoList = [];

        let form = document.querySelector('.form');
        let input = form.querySelector('.form_input');
        let ul = document.querySelector('.list');
        
        form.addEventListener('submit', (e) =>{
            e.preventDefault();

            let toDoItem = input.value;
            let itemID = String(Date.now());
            
        });

})();


function addToDoItem(itemID, todoItem ){
    let li = document.createElement('li');
    li.setAttribute('id', todoItem)

    li = (itemID, todoItem)

    ul.addC
}