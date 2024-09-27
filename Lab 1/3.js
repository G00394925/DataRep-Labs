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
