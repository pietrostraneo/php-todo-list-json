const { createApp } = Vue;

createApp({
    data() {
        return {
            apiurl: 'server.php',
            todoList: [],
            taskInput: ''
        }
    },
    mounted() {
        this.getTodolist();
    },
    methods: {
        addTasks() {
            const data = {
                taskInput: this.taskInput
            }

            axios.post(this.apiurl, data, {
                headers: { 'Content-type': 'multipart/form-data' }
            }).then((response) => {
                this.taskInput = ''
                this.todoList = response.data
            })
        },
        getTodolist() {
            axios.get(this.apiurl).then((response) => {
                this.todoList = response.data
            })
        }
    },
}).mount('#app')
