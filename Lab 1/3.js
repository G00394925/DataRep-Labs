let Tasks = [];

//b.
let addTask = (task)=>{
    Tasks.push(task); // Add the task
    console.log(task + " added successfully");
    return Tasks.length;
}

// Add tasks
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
    let index = Tasks.indexOf(task); // Aquire index
    if(index > -1)
    {
        Tasks.splice(index, 1); // Delete the index and output message
        console.log(task + " has been deleted from my Tasks");
    }
    else
    { 
        console.log(task + " not found in array"); // If element isn't found in array
    }
    return Tasks.length;
}

deleteTask("Jump");
listAllTasks();