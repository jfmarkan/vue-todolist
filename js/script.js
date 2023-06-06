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
        }
    },
    methods: {
        addNewToDoElement(toDoElement) {
            this.todoList.push({
              text: toDoElement,
              done: false,
            });
        },

        markComplete(){
            this.todoItem.done = !this.todoItem.done
        }
    }
}).mount('#app');