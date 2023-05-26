<template>
  <section class="totals py-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col text-uppercase text-center">
          <div class="row">
            <!-- single column  -->
            <div class="col-10 mx-auto col-md-2">
              <p class="text-uppercase">
                products
                <!-- {{cardData.title}} -->
              </p>
              <div>
                <!-- <router-link to="/cart"> {{countofcartproduct }}</router-link> -->
              </div>
            </div>
            <!-- end of single column -->
            <!-- single column -->
            <div class="col-10 mx-auto col-md-4">
              <p class="text-uppercase">name of products</p>
            </div>
            <!-- end of single column -->
            <!-- single column -->
            <div class="col-10 mx-auto col-md-2">
              <p class="text-uppercase">price</p>
            </div>
            <!-- end of single column -->
            <!-- single column -->
            <div class="col-10 mx-auto col-md-2">
              <p class="text-uppercase">quantity</p>
            </div>
            <!-- end of single column -->
            <!-- single column -->
            <div class="col-10 mx-auto col-md-2">
              <p class="text-uppercase">total</p>
            </div>
            <!-- end of single column -->
          </div>
          <hr />
          <!-- end of columns -->
          <div
            class="row my-3 align-items-center"
            v-for="p in mycartlist"
            :key="p.id"
          >
            <!-- all about product -->
            <div class="col-10 mx-auto col-md-2 my-3">
              <img :src="p.image" alt="" class="img-fluid" />
            </div>
            <div class="col-10 mx-auto col-md-4">
              <p class="text-uppercase">{{ p.title }}</p>
            </div>
            <div class="col-10 mx-auto col-md-2">
              <p class="text-uppercase">{{ p.price }}</p>
            </div>
            <div class="col-10 mx-auto col-md-2">
              <div class="d-flex justify-content-center align-items-center">
                <input v-model="p.quantity" type="number" min="1" max="6" />
              </div>
            </div>
            <div class="col-10 mx-auto col-md-2">
              <p class="text-uppercase">math</p>
            </div>
            <!-- end of all about product -->
            <!-- all about product -->
            <div class="col-10 mx-auto col-md-2 my-3">
              <img
                src="img/img-products/product-2.png"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="col-10 mx-auto col-md-4">
              <!-- <p class="text-uppercase">comfortable chair</p> -->
            </div>
            <div class="col-10 mx-auto col-md-2">
              <!-- <p class="text-uppercase">100.00$</p> -->
            </div>

            <!-- end of all about product -->
            <!-- all about product -->
            <div class="col-10 mx-auto col-md-2 my-3">
              <img
                src="img/img-products/product-3.png"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="col-10 mx-auto col-md-4">
              <p class="text-uppercase"></p>
            </div>
          </div>
          <!-- buttons -->
          <div class="row my-3">
            <div
              class="col-sm-6 mx-auto col d-flex justify-content-center flex-wrap"
            >
              <router-link to="/" class="nav-link"
                >Continue Shopping</router-link
              >
              <router-link
                type="button"
                to="/login"
                class="btn btn-yellow ml-2 my-2"
              >
                checkout
              </router-link>
            </div>
          </div>
          <!-- cart total -->
          <div class="row">
            <div class="col mx-auto col-sm-8 col-md-6 col-lg-4 my-3">
              <div class="card card-body bg-secondary text-uppercase">
                <div class="card-title text-white">
                  <h6>cart total</h6>
                </div>
                <div class="row">
                  <!-- single row -->
                  <div class="col-6">SUB TOTOAL</div>
                  <div class="col-6">$900.00</div>
                </div>
              </div>
            </div>
          </div>
          <!-- end of buttons -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      cardData: [],
      mycartlist: [],
    };
  },

  computed: {
    ...mapMutations(["ADD_TO_CART"]),
    ...mapGetters(['mycartlist']),
  },
  methods: {
    getStoredData() {
      let storedData = sessionStorage.getItem("product");
      let cardData = JSON.parse(storedData);
      this.mycartlist = cardData;
    },
  },
  mounted() {
    this.getStoredData();
  },
};
</script>