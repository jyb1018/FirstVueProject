<template>

  <div class="menu">
    
    <a v-for="(item, idx) in 메뉴들 " :key="idx">{{idx}}) {{item}}</a>
  </div>


  <!-- <div v-for="(item, idx) in products" :key="idx" class="section">
    <h4>{{item}}</h4>
    <p>{{prices[idx]}}</p>
  </div>
   -->
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      메뉴들 : ['Home', 'Products', 'About'],
      products: ['천호동원룸', '강호동원룸', '아몰랑'],
      prices: ['50만원', '60만원', '70만원'],
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>
