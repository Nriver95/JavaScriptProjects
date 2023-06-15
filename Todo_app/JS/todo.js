/* this function gets the task from input */
function get_todos(){
    /*This creates an array of tasks that are inputed*/
    var todos=new Array;
    /*this pulls the task that was saved in the web browser memory*/
    var todos_str = localStorage.getItem('todo');
    /*If the input is not null then JSON.parse will communicate with the web browser to make the task a JavaScript object.*/
    if (todos_str !== null) {
        todos=JSON.parse(todos_str);
    }
    return todos;
}

/*This function adds the inputed task to the get__todos function array*/
function add(){
    /*this takes the inputed task and creates a variable of it*/
    var task = document.getElementById('task').value;

    var todos = get_todos();
    /*This adds a new task at the end of the array*/
    todos.push(task);
    /* this converts the task input to a JSON string*/
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";

    return false;
}

/*this function keeps the tasks permanently displayed on the screen*/
function show(){
/*sets the task that was retrieved as a variable*/
var todos = get_todos();

/*this sets up each task as an unordered list*/
var html ='<ul>';
/*displays a task to the list in the order that it was inputed*/
for (var i = 0; i < todos.length; i++) {
    /*displays the task as a list and creates the button with the "x"*/
    html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html+='</ul>';
    /*this displays the task as a list*/
    document.getElementById('todos').innerHTML = html;
}
/*this displays the inputed task when the 'Add Item' button is clicked*/
document.getElementById('add').addEventListener('click', add);
/*this will keep the inputs displayed permanantly on the screen*/
show();

/* this allows you to remove an item from the list */
function remove(){
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    /*tells show() how to display an item was removed*/
    show();

    return false;
}

/*This tells the browser how to display the todo array after an item was removed*/
var buttons = document.getElementsByClassName('remove');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', remove);
}