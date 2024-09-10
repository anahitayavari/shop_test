<script>
export default {
  name: "product_item_one",
  props:["id","title","description","price","sale","image"],
  created(){
    if(this.title){
    this.url = this.title.replace(" ", "-")
    }
  },
  data(){
    return{
      url : null,
    }
  }
}
</script>

<template>
  <router-link :to="{name :'product_show', params : {id : id , title : url}}">
    <q-img :src="image">
      <div class="absolute-bottom text-h6">
        {{ title }}
      </div>
    </q-img>
  </router-link>
  <q-card class="my-card">



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