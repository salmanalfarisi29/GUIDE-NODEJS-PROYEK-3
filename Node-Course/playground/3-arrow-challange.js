const tasks = {
    task: [{
        text:'Grocery shopping'
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    }, {
        text:'Film course'
        completed : false
    }]
    getTasksToDo(){
        return this.tasks.filter((task) => task.completed === false)
    }
}