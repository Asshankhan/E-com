<template>
     <header id="header" class="header">
      <!-- navbar -->
      <nav class="navbar navbar-expand-lg navbar-light">
        <router-link to="/" class="navbar-brand">
          <img src="../assets/img/logo.png" alt="company logo" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item mx-2 nav-active">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item mx-2">
              <router-link to="/product" class="nav-link">Products</router-link>
            </li>
          </ul>
        </div>
        <div class="navbar-icons d-none d-lg-flex">
          <!-- single icon -->
          <div class="navbar-icon mx-2"><i class="fas fa-search"></i></div>
          <!-- end of single icon -->
          <!-- single icon -->
          <router-link to="/cart" class="navbar-icon mx-2 navbar-cart-icon">
            <i class="fas fa-shopping-cart"></i>
            <span>{{countofcartproduct}}</span>
            <!-- <div class="cart-items"></div> -->
          </router-link>
          <!-- end of  single icon -->
        </div>
      </nav>
      <!-- end of navbar -->

    </header>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
name:'Header',
computed:{
      ...mapGetters([
      'countofcartproduct'
    ])
}
}
</script>

