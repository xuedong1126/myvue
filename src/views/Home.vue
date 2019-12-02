<template>
  <div class="wrap">
    <div class="main">
      <router-view/>
    </div>
    <div class="footer">
      <router-link to="/wrode">wrode</router-link> 
      <router-link to="/about">About</router-link>
      <router-link to="/cart">cart</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name:"home"

}
</script>

<style lang="scss">
  .wrap{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column
  }
  .header,.footer{
    width: 100%;
    height: 45px;
    background: #eeeeee;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a{
      text-decoration: none;
      &.router-link-active{
        color: crimson;
      }
    }
  }
  .main{
    width: 100%;
    flex: 1;
    overflow: hidden;
  }
</style>