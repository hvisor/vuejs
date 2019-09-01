<template>
    <div>
        <h1>User</h1>
         <p>
            <button  @click="getUsers()" class="button">Get Users</button>
        </p>
        <hr>
        <p v-for="each in users" :key="each">
            <router-link :to="'/user/' + each">User: {{ each }}</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com/users'

export default {
    data() {
        return {
            users: []
        }
    },
    methods: {
        getUsers() {
            axios.get(url)
        }
    }
}
</script>