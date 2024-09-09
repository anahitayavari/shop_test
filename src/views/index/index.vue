<script>

import index_slider from "@/views/index/index_slider.vue";
import index_banners from "@/views/index/index_banners.vue";
import index_new_products from "@/views/index/index_new_products.vue";

export default {
  name: "index",
  components:{
    "index_slider":index_slider,
    "index_banners":index_banners,
    "new_products":index_new_products
  }
}
</script>

<template>
  <div class="row">
   <div class="col-md-8 col-sm-12">
     <index_slider></index_slider>
   </div>
    <div class="col-md-4 q-pa-sm">
      <index_banners></index_banners>
    </div>
    <div class="col-md-12 q-mt-md q-pa-sm">
      <new_products></new_products>
    </div>

  </div>
</template>

<style scoped>

</style>