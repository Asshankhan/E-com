<template>
  <div>
    <!-- <Header></Header> -->
          <div class="banner d-flex align-items-center pl-3 pl-lg-5">
        <div>
          <h1 class="text-slanted text-capitalize mb-0">
            Minimalist
          </h1>
          <h1 class="text-lowercase font-weight-bold">
            interior style
          </h1>
          <a href="#" class="btn btn-yellow"> view collection </a>
        </div>
      </div>
    <Services></Services>
    
    <!-- <HomeCatoegory></HomeCatoegory> -->
    <Products></Products>
    <Footer></Footer>
  </div>
</template>

<script>
// import 'jquery'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/style.css'
import '@/assets/css/all.min.css'


import Footer from '../components/footer.vue'
// import Header from '../components/headContent.vue'
import Products from '../components/products.vue'
import Services from '../components/services.vue'
// import HomeCatoegory from '../components/homeCatoegory.vue'
// import Feature from '../components/feature.vue'
export default {
  components: { Products, Footer, Services },

}
</script>
