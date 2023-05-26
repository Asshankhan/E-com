<template>
  <section class="single-product py-5">
    <div class="container">
      <div class="row">
        <div class="col-10 mx-auto col-lg-4 my-5 text-center">
          <div class="single-product-img-container">
            <img :src="productdetail.image" alt="" class="img-fluid" />
          </div>
        </div>
        <!-- info -->
        <div class="col-10 col-lg-8 mx-auto px-lg-5 single-product-info my-5">
          <!-- ratings -->
          <!-- end of ratings -->
          <h2 class="text-uppercase my-2">
            {{ productdetail.title }}
          </h2>
          <h2 class="text-uppercase my-2">${{ productdetail.price }}</h2>
          <p class="lead text-muted">
            {{ productdetail.description }}
          </p>

          <button
            class="btn btn-yellow my-2 mx-2"
            @click="addtocart(productdetail)"
          >
            Add To Cart
          </button>
          <!-- end of cart buttons -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      productdetail: [],
    };
  },
  methods: {
    showProduct() {
      let ProductId = this.$route.params.id;
      this.$store.dispatch("oneProduct", ProductId).then((response) => {
        this.productdetail = response.data;
        console.log("sdfgv", response);
      });
    },
    ...mapMutations(["ADD_TO_CART"]),
    addtocart(productdetail) {
      console.log("addinmg");
      this.ADD_TO_CART(productdetail);
      // sessionStorage.setItem("product",JSON.stringify(this.productdetail))
      let cartData = sessionStorage.getItem("product");

      // Check if cartData exists
      if (cartData) {
        // Parse the existing data from JSON
        let existingData = JSON.parse(cartData);

        // Add the new item to the existing data
        existingData.push(productdetail);

        // Store the updated data back in session storage
        sessionStorage.setItem("product", JSON.stringify(existingData));
      } else {
        // If cartData doesn't exist, create a new array with the item
        let newData = [productdetail];

        // Store the new data in session storage
        sessionStorage.setItem("product", JSON.stringify(newData));
      }
    },
  },
  mounted() {
    console.log("showproduct");
    this.showProduct();
  },
};
</script>