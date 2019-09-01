<template>
    <div>
        <h1 class="title">Search</h1>
        <div class="field">
            <input v-model="search" type="text" class="input" />
            <!-- <pre>{{ 'https://jsonplaceholder.typicode.com/users?q=' + search }}</pre> -->
            <pre>{{ users }}</pre>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'

const url = 'https://jsonplaceholder.typicode.com/users?q='

export default {
    created() {
        this.getSearchUsers = _.debounce(this.getSearchUsers, 1000)
    },

    watch: {
        search(newValue) {
            if (newValue !== '') {
                this.getSearchUsers(newValue)
            }
        }
    },

    data() {
        return {
            search: '',
            users: []
        }
    },

    methods: {
        async getSearchUsers(value) {
            try {
                const res = await axios.get(url + value)
                this.users = res.data
            } catch (err) {}
        }
    }
}
</script>