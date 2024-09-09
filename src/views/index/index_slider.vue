<script>

export default {
  name: "index_slider",
  data(){
   return{
     slide : 1
   }
  }

}
</script>

<template>
  <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
      autoplay

  >
    <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
    <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
    <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
    <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
  </q-carousel>

</template>

<style scoped>

</style>