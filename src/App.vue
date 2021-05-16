<template>
  <div id="app">
    <Navbar></Navbar>
    <CartSidebar></CartSidebar>
    <div class="container pt-5">
      <Inventory ></Inventory>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Inventory from './components/Inventory';
import CartSidebar from './components/CartSidebar';
import products from './data/products.js'
  export default {
    components:{
      Navbar,
      Inventory,
      CartSidebar

    },
    data(){
      return{
        items: []
      }
    },
    mounted(){
      this.items = products
      this.$store.commit('setItems', this.items)
    }
  }
</script>

<style>
  @import "assets/css/style.css";
  p{
    font-size: 12px;
  }
</style>