<!-- html -->
<template>
    <div class="container">
        <div class="input-group my-3">
            <input type="text" class="form-control" v-model="message" @keydown.enter="add()">
            <button class="btb btn-primary" @click="add()">Add</button>
        </div>
        <ul>
            <li v-for="item in items">
                <div v-if="item.isDone" class="form-check form-switch">
                    <label>
                        <input type="checkbox" class="form-check-input">
                        {{ item.name }}
                    </label>
                </div>
            </li>
        </ul>
    </div>
</template>
<!-- js -->
<script>
export default {
    data(){
        return{
            message: "Whaddup Vue",
            items: [
                {name:'Piim', isDone: false},
                {name:'Sai', isDone: true},
                {name:'Viin', isDone: false},
                {name:'Leib', isDone: true},
            ]
        }
    },
    methods: {
        add() {
            if(this.message !== ''){
                this.items.push({name: this.message.trim(), isDone: false});
                this.message=''  
            }
        }
    },
    computed: {
        doneItems(){
            return this.items.filter(item => item.isDone)
        },
        toDoItems(){
            return this.items.filter(item => !item.isDone)
        }
    }
}
</script>
<!-- css -->
<style>

</style>