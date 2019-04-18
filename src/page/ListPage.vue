<template>
  <section class="container">
    <header class="header"></header>
    <main class="main"></main>
    <footer class="footer"></footer>
  </section>
</template>

<script>
  export default {
    name: "ListPage"
  }
</script>

<style lang="less" scoped>
  .container {
    display: flex;
    flex-direction: column;
  }
  
  .header {
    height: 40px;
  }
  
  .main {
    flex: 1;
  }
  
  .footer {
    height: 53px;
  }
</style>
