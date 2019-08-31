<template>
  <div>

<p v-for="(x,idx) in numbers" :key="idx">{{x}}</p>
<p>
<a href="https://google.com">Google</a>
</p>
<p>
<a :href="url">{{url}}</a>
</p>

      <h5>Hello</h5>
      <h3>Counter{{counter}}</h3>
     <span v-html="name">Counter</span>
     <div v-html="name"></div>
      <button @click="updateCouter">Update</button>
      <button @click="name='kaweewat'">Change Name</button>
  <input type="text" v-model="name"  >
  <input type="number" v-model="amount">
  <p>Amount:{{amount}}</p>
   <p>VAT Amount:{{vatAmount}}</p>
   <p>VAT :{{vat}}</p>

   <div v-if="show">
       <p >John</p>
   </div>
    <div v-if="!show">
       <p >Hidden</p>
   </div>
   <button @click="show=!show">Toggle</button>

  </div>
</template>

<script>
export default {
    computed:{
        vatAmount(){
            //return this.amount * 1.07
            return (this.vat + this.amount)
        },
        vat(){
            return (this.amount * 7)/100
        }
    },
    data(){
        return {
            url: 'www.hotmail.com',
            show:false,
            counter:1,
            name: 'John',
            amount: 100,
            numbers:[10,20,30,40,50]
        }
    },
    methods:{
        updateCouter(){
            this.counter++;
        }
    }
}
</script>

<style>

</style>