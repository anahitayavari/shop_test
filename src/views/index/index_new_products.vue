<script>
import product_item_one from "@/components/products/product_item_one.vue";
import Product_item_one from "@/components/products/product_item_one.vue";

export default {
  name: "index_new_products",
  data(){
return{
  products : [
    {
      id : 1 ,
      title : "picture1",
      description : "picture for me",
      price : 150,
      sale : 140,
      image : "https://picsum.photos/200/200"
    },
    {
      id : 2,
      title : "picture2",
      description : "picture for me",
      price : 160,
      sale : null,
      image : "https://picsum.photos/200/300"
    },
    {
      id : 3,
      title : "picture3",
      description : "picture for me",
      price : 170,
      sale : 160,
      image : "https://picsum.photos/200/300"
    },
    {
      id : 4,
      title : "picture4",
      description : "picture for me",
      price : 180,
      sale : null,
      image : "https://picsum.photos/200/300"
    },
  ]
}
  },
  components : {
    Product_item_one,
    "new_product_item" : product_item_one
  }
}
</script>

<template>
  <q-card>
    <q-card-section>
      <strong class="font-14 text-red q-ml-sm">our new products</strong>
      <div class="row">
        <div v-for="item in products" class="col-md-3 q-mb-md q-pa-xs">
          <product_item_one :id="item.id" :title="item.title" :description="item.description" :price="item.price" :sale="item.sale" :image="item.image"></product_item_one>

        </div>
      </div>
    </q-card-section>
  </q-card>


</template>

<style scoped>

</style>