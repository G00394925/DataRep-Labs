let Tasks = [];

//b.
let addTask = (task)=>{
    Tasks.push(task);
    console.log(task + " added successfully");
    return Tasks.length;
}

addTask("Walk");
addTask("Run");
addTask("Jump");

//c.
let listAllTasks = (task) => {
    
    Tasks.forEach(task=>{
        console.log(task);
    })
}

listAllTasks();

//d.
let deleteTask = (task) => {
    let index = Tasks.indexOf(task);
    if(index > -1)
    {
        Tasks.splice(index, 1);
        console.log(task + " has been deleted from my Tasks");
    }
    else{
        console.log(task + " not found in array");
    }
    return Tasks.length;
}

deleteTask("Jump");
listAllTasks();