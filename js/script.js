const { createApp } = Vue;

createApp({
    data() {
        return {
            todoList: [
                {
                    text: 'Go to the Supermarket',
                    done: false,
                }, {
                    text: 'Take the dog out',
                    done: false,
                }, {
                    text: 'Pay the bills',
                    done: false,
                }, {
                    text: 'Take out the garbage',
                    done: false,
                }, {
                    text: 'Phone my mom',
                    done: true,
                }
            ],
            newToDo: '',
            defaultStatus=false;
        }
    },
    methods: {
        addNewToDoElement(toDoElement, defaultStatus){
            this.todoList.text.push(toDoElement);
            this.todoList.done.push(this.defaultStatus);
        }
    }
}).mount('#app');