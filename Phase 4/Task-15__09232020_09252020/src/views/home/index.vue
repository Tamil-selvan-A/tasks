<template>
  <div class="home">
    <!--========== BANNER ==========-->
    <div class="banner d-flex justify-content-center align-items-center container">
      <div>
        <h2 class="text-white">WELCOME TO INDIAN HOTEL</h2>
        <a class="btn btn-danger font-weight-bold my-5" href="#">REGISTER NOW</a>
      </div>
    </div>
    <!--========== END BANNER ==========-->
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.banner {
  background: url('../../assets/images/banner.jpg') center/cover no-repeat;
  height: 100vh;
}
.navbar {
  background: rgba($color: #000000, $alpha: 0.5);
}
</style>
