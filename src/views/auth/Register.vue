<script>
export default {
  name: "Register",
  data(){
    return{
      loading : false,
      item : {
        name : null,
        email : null,
        phone : null
      }

    }
  },
  methods : {
    Register(){
      this.loading=true;

    }
  }
}
</script>

<template>
<div class="row justify-center q-mt-lg-xs">
  <div class="col-md-7 col-sm-12 col-xs-12 row">
    <div class="col-md-6 q-mr-400">
      <img src="src/assets/images/register-picture.svg" width="400" alt="">
    </div>
    <div class="col-md-6">
      <h6 style="font-width:600; ">Register in shop</h6>
      <div class="q-mt-md">
        <q-input square standout v-model="item.name"  label="name" />

      </div>
      <div class="q-mt-md">
        <q-input square standout v-model="item.email" class="q-mt-5" label="email" />

      </div>
      <div class="q-mt-md">
        <q-input square standout v-model="item.phone" label="phone" />

      </div>
      <div class="q-mt-md">
        <q-btn class="bg bg-blue-5" @click="Register" :loading="loading">Register</q-btn>
      </div>
    </div>


  </div>
</div>
</template>

<style scoped>

</style>