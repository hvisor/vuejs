<template>
 <div>
   
<h1>App</h1>
<navbar/>
<router-view/>
<!-- <hello/><world/>
<hello/><world/> -->

 </div>
</template>



<script>
import Navbar from './components/navbar'
import Hello from './components/hello'
import World from './components/world'
export default{
  components:{
    // 'hello':Hello,
    // 'world':World,
    'navbar':Navbar
  }
}

</script>

