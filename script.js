const { createApp } = Vue;

createApp({
    data() {
        return {
            todoList: [
                {
                    text: 'Take out the garbage',
                    done: false,
                }, {
                    text: 'Take out the garbage',
                    done: false,
                }, {
                    text: 'Take out the garbage',
                    done: false,
                }, {
                    text: 'Take out the basura',
                    done: false,
                }, {
                    text: 'Take out the garbage',
                    done: true,
                }
            ],
        }
    },
    methods: {
        
    }
}).mount('#app');