let Tasks = [];

//b.
let addTask = (task)=>{
    Tasks.push(task);
    console.log(task + " added successfully");
    return Tasks.length;
}

addTask("Test");