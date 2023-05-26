<template>
    <section class="single-product py-5">
      <div class="container">
        <div class="row">
          <div class="col-10 mx-auto col-lg-4 my-5 text-center">
            <div class="single-product-img-container" 
            v-for="catwise in cate" :key='catwise.id'
           >
            <img :src="catwise.image" alt="" class="img-fluid">
         
          <!-- info -->
          <div class="col-10 col-lg-8 mx-auto px-lg-5 single-product-info my-5">
            <!-- ratings -->
            <!-- end of ratings -->
            <h2 class="text-uppercase my-2">
              {{catwise.title}}
            </h2>
            <h2 class="text-uppercase my-2">
              ${{ catwise.price }}
            </h2>
            <p class="lead text-muted">
             {{ catwise.description }}
            </p>
               </div>
          
          </div>
            <!-- <button class="btn btn-yellow my-2 mx-2" @click="addtocart(catwise)">
              Add To Cart
            </button> -->
            <!-- end of cart buttons -->
          </div>
        </div>
      </div>

      <div class="dropdown">
            <button class="dropbtn">Shop by categories</button>
            <div
              class="dropdown-content"
              v-for="categry in Category"
              :key="categry.cate"
            >
              <router-link :to="'/product/category/' + categry  ">{{
                categry
              }}</router-link>
            </div>
          </div>

    </section>
</template>

<script>
export default {
  data(){
    return{
      cate:[],    
       Category: [],
      }
  },
  mounted() {
this.showProduct()
this.showCategory()
  },
    methods:{
    showProduct(){
      let productcateg = this.$route.params.item;
      this.$store.dispatch("electronicItem", productcateg).then((response) => {
        this.cate= response.data;      
        console.log("sdfgv",response)
        })
        },
            showCategory() {
      this.$store.dispatch("showcategories").then((response) => {
        this.Category = response.data;
      });
    },
    },

}
</script>