<template>
   <div>
        <h1 class="title">Home</h1>
          <input class="input" type="text" ref="xxx" />
          <pre>{{ chooseDate }}</pre>
        <p>Counter: {{ $store.state.counter }}</p>
        <p>Counter: {{ $store.getters.doubleCounter }}</p>
        <button @click="$store.commit('mutateCounter',5)">Update</button>
    </div>
</template>




<script>
import 'pikaday/css/pikaday.css'
import moment from 'moment'
import Pikaday from 'pikaday'

export default {
  data() {
        return {
            chooseDate: Date.now()
        }
    },
mounted() {
  const self = this
         new Pikaday({
            field: this.$refs.xxx,
            toString(date) {
                return moment(date).format('DD/MM/YYYY')
            },
            onSelect(date) {
                console.log(this, self)
                self.chooseDate = moment(date).format('DD/MM/YYYY')
            },
            onSelect1: date => {
                console.log(this)
            }
        })
    }
}
</script>

<style>

</style>