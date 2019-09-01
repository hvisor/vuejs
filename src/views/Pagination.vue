<template>
    <div>
        <h1 class="title">Pagination</h1>
        <nav class="pagintation">
            <ul class="pagination-list">
                <li v-for="p in pageTotal" :key="p">
                    <router-link :to="'/pagination?p=' + p" :class="className(p)">{{ p }}</router-link>
                </li>
            </ul>
        </nav>
        <pre>{{ albums }}</pre>
    </div>
</template>

<script>
import axios from 'axios'

const limit = 9
const url = 'https://jsonplaceholder.typicode.com/albums'

export default {
    watch: {
        '$route.query.p'() {
            this.getAlbums(this.$route.query.p)
        }
    },

    mounted() {
        this.getAlbums(this.$route.query.p)
    },

    methods: {
        async getAlbums(page = 1) {
            this.pageCurrent = parseInt(page)

            const res = await axios.get(url + '?_limit=' + limit + '&_page=' + page)
            this.albums = res.data
            this.pageTotal = Math.ceil(parseInt(res.headers['x-total-count']) / limit)
        },

        className(page) {
            console.log(page, this.pageCurrent)
            return ['pagination-link', { 'is-current': page === this.pageCurrent }]
        }
    },
    data() {
        return {
            albums: [],
            pageTotal: 0,
            pageCurrent: 1
        }
    }
}
</script>