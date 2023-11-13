<!-- html -->
<template>
    <button class="btn btn-primary" @click="message='Hello MM22'">Touch me</button>
    <input type="text" class="form-control" :value="message" @change="message=$event.target.value">
    <input type="text" class="form-control" v-model="message">
    <h1>{{ message }}</h1>
    <button class="btn btn-danger" @click="counter++">Count is {{ counter }}</button>
    <button class="btn btn-success" :class="{'btn-danger': !btnState}" @click="btnState=!btnState">Toggle</button>
</template>
<!-- js -->
<script>
export default {
    data(){
        return{
            message: "Whaddup Vue",
            counter: 0,
            btnState: true
        }
    }
}
</script>
<!-- css -->
<style>

</style>