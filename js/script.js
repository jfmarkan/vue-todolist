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
                },
            ],
            newToDo: '',
        }
    },
    methods: {
        addNewToDoElement(toDoElement) {
            if (this.newToDo !== ""){
                this.todoList.push({
                    text: toDoElement,
                    done: false,
                });
                this.newToDo = "";
            }
        },

        removeToDoElement(toDoElementIndex) {
            if( toDoElementIndex >= this.todoList.length || toDoElementIndex < 0) {
                console.log('Invalid index');
            } else {
                this.todoList.splice(toDoElementIndex, 1);
            }
        },

        updateStatus(elementIndex){
            this.todoList[elementIndex].done = !this.todoList[elementIndex].done
        },
    }
}).mount('#app');