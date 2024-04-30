( ()=>{

        //toDo list Array
        let toDoList = [];

        let form = document.querySelector('.form');
        let input = form.querySelector('.form_input');
        let ul = document.querySelector('.toDoList');
        
        form.addEventListener('submit', (e) =>{
            e.preventDefault();

            let toDoItem = input.value;
            let itemID = String(Date.now());
            addToDoItem(itemID, toDoItem);
            addItemToArray(itemID,toDoItem);
            input.value ="";
        });

        ul.addEventListener('click', (e) => {
            let id = e.target.getAttribute('toDoId');
            console.log(id)
            if(!id) return;
            removeItemFromDOM(id);
            removeItemFromArray(id);
        });

        function removeItemFromDOM(id){
            ul.removeChild(document.querySelector(`[toDoId="${id}"]`));
        }

        function removeItemFromArray(id){
            let index = toDoList.findIndex(item => item.itemID == id);
            if(index != -1){
                toDoList.splice(index, 1);
                console.log('Item deleted!!')
            }
        }



        function addToDoItem(itemID, todoItem ){
            let li = document.createElement('li');
            li.setAttribute('toDoId', itemID);
        
            li.textContent = todoItem;
            // Add the new list item element to the unordered list
        
            ul.appendChild(li);
        }

        function addItemToArray(itemID, toDoItem){
    
            toDoList.push({itemID, toDoItem});
            console.log(toDoList);
        }
})();

