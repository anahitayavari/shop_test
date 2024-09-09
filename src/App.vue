<script>
export default {
  name:"App",
  mounted() {

    console.log(this.$store.state.count);
    this.$store.commit('increment');

    console.log(this.$store.state.count);
    this.$store.commit('increment');

    console.log(this.$store.state.count);
    this.$store.commit('increment');
  }
}
</script>

<template>
  <q-layout view="hHh LpR fFr">
    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
          <q-icon class="float-right q-mt-md q-mr-md " size="30px" name="fas fa-cart-shopping"></q-icon>
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab  :to="{name : 'index'}" class="font-10"  label="Home" />
        <q-route-tab :to="{name : 'register'}" label="Register" />
        <q-route-tab :to="{name : 'login'}" label="Login" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>

</template>

<style scoped>

</style>