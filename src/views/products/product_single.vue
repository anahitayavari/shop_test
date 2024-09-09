<script>
export default {
  name: "product_single",
  data(){
    return{
      products :
        {
          title : "picture1",
          description : "This not only documents your component, but will also warn other developers using your component in the browser console if they pass the wrong type. We will discuss more details about prop validation further down this page.",
          price : 150,
          sale : 140,
          image : "https://picsum.photos/200/200"
        },
      quantity : 1
    }
  },methods : {
    plus(){
      this.quantity+=1
    },
    negative(){
      this.quantity-=1
    }
  }
}
</script>

<template>
  <div class="q-mt-lg q-pa-lg q-ml-lg">
    <div class="row">
      <div class="col-md-5">
        <img :src="products.image" width="500" alt="" />
      </div>
      <div class="col-md-7">
        <div class="q-mt-md">
          <strong class="text-grey-9 font-16">product name : </strong>
          <strong class="text-indigo-8 q-ml-sm font-14">{{products.title}}</strong>
        </div>
        <div class="q-mt-md">
          <strong class="text-grey-9 font-16">product price :</strong>
          <strong class="text-indigo-8 font-14 q-ml-sm">${{products.price}}</strong>
        </div>
        <div class="q-mt-md">
          <strong class="text-grey-9 font-16">product sale :</strong>
          <strong class="text-indigo-8 font-14 q-ml-sm">${{products.sale}}</strong>
        </div>
        <div class="q-mt-md">
          <strong class="text-grey-9 font-16">Description :</strong>
          <strong class="text-indigo-8 font-14 q-ml-sm">{{products.description}}</strong>
        </div>
        <div class="q-mb-md q-mt-xl">
          <div class="row">
            <div class="col-md-4 q-pa-sm">
              <q-input dense rounded outlined v-model="quantity" style="text-align: center">
                <template v-slot:prepend>
                  <q-icon v-if="quantity>1" @click="negative" name="fas fa-minus" class="hands" />
                </template>
                <template v-slot:append>
                  <q-icon @click="plus" name="fas fa-plus" class="hands" />
                </template>
              </q-input>
            </div>
            <div class="col-md-8 q-pa-sm">
              <q-btn style="width: 50%"  color="pink-4" glossy rounded label="Add to Cart"></q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>
.hands{
  cursor: pointer;
}

</style>