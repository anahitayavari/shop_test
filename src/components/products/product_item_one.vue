<script>
export default {
  name: "product_item_one",
  props:["title","description","price","sale","image"]
}
</script>

<template>
  <q-card class="my-card">
    <q-img :src="image">
      <div class="absolute-bottom text-h6">
        {{ title }}
      </div>
    </q-img>

    <q-card-section>
     <div>
       <strong class="text-grey-9">price :</strong>
       <strong class="text-green-9">{{ price }}</strong>
     </div>

      <div v-if="sale">
        <strong class="text-grey-9">sale :</strong>
        <strong class="text-green-9">{{ sale }}</strong>
      </div>

      <div>
        <strong class="text-grey-9">description :</strong>
        <strong class="text-green-9">{{description}}</strong>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped>

</style>