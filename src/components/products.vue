<template>
  <section id="products" class="products">
    <div class="container-fluid">
      <!-- Display the products on the current page -->
      <!-- <div v-for="product in productlist" :key="product.id"> -->
      <!-- Display product information here -->

      <!-- Pagination navigation -->
      <div>
        <button @click="prevPage" :disabled="currentPage === 1">
          Previous
        </button>
        <span>{{ currentPage }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">
          Next
        </button>
        <!-- </div> -->
      </div>
      <div class="row">
        <!-- product info -->
        <div class="col-10 mx-auto col-md-5 col-lg-3 text-capitalize my-3 px-5">
          <!-- products categories -->
          <div class="dropdown">
            <button class="dropbtn">Shop by categories</button>
            <div
              class="dropdown-content"
              v-for="categry in Category"
              :key="categry.cate"
            >
              <router-link :to="'/product/category/' + categry">{{
                categry
              }}</router-link>
            </div>
          </div>
        </div>
        <!-- end of product info -->
        <!-- product img -->
        <div class="col-10 mx-auto col-md-7 col-lg-9 my-3">
          <div class="row">
            <!-- single product -->

            <div
              class="col-10 mx-auto col-md-6 col-lg-4"
              v-for="product in productlist"
              :key="product.id"
            >
              <div class="featured-container p-5">
                <router-link :to="'/singleProduct' + '/' + product.id">
                  <img :src="product.image" alt="" class="img-fluid" />
                </router-link>
                <span
                  class="featured-search-icon"
                  data-toggle="modal"
                  data-target="#productModal"
                >
                </span>
                <button
                  class="featured-store-link text-capitalize"
                  @click="addToCart(product)"
                >
                  add TO cart
                </button>
              </div>
              <h6 class="text-capitalize text-center my-2">
                {{ product.title }}
              </h6>
              <h6 class="text-center">
                <span>{{ product.price }}</span>
              </h6>
            </div>
            <!-- end of single product -->
          </div>
        </div>
        <!-- end of product img -->
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      productlist: [],
      Category: [],
      products: [],          // Array of all products
      currentPage: 1, // Current page number
      itemsPerPage: 5, // Number of items to display per page
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.productlist.length / this.itemsPerPage);
    },
    displayedProducts() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.productlist.slice(startIndex, endIndex)
    },
  },
  methods: {
    ...mapMutations(["ADD_TO_CART"]),
    addToCart(product) {
      this.ADD_TO_CART(product);
      // sessionStorage.setItem("product",JSON.stringify(product))
      

      // Get the existing cart data from session storage
      let cartData = sessionStorage.getItem("product");

      // Check if cartData exists
      if (cartData) {
        // Parse the existing data from JSON
        let existingData = JSON.parse(cartData);

        // Add the new item to the existing data
        existingData.push(product);

        // Store the updated data back in session storage
        sessionStorage.setItem("product", JSON.stringify(existingData));
      } else {
        // If cartData doesn't exist, create a new array with the item
        let newData = [product];

        // Store the new data in session storage
        sessionStorage.setItem("product", JSON.stringify(newData));
      }
    },
    showProduct() {
      this.$store.dispatch("showproduct").then((response) => {
        this.productlist = response.data;
        console.log("showproduct", this.productlist);
      });
    },
    showCategory() {
      this.$store.dispatch("showcategories").then((response) => {
        this.Category = response.data;
        
      });
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },

  mounted() {
    this.showProduct();
    this.showCategory();
    this.prevPage();
    this.nextPage();
  },
};
</script>