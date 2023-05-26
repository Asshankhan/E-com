<template>
<div>
    <Services></Services>
    <Products></Products>
    <Footer></Footer>
</div>
</template>

<script>
import Footer from '../components/footer.vue'
import Products from '../components/products.vue'
import Services from '../components/services.vue'

export default {
    components: {
         Services , Footer , Products
    }

}
</script>
