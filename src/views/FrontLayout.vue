<template>
  <header class="d-flex flex-column bg-light ">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container">
        <RouterLink class="navbar-brand" to="/"><img src="../components/icons/Logo.jpg" alt=""></RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0 d-flex ms-auto fs-4 fw-bold">
            <li class="nav-item ms-5">
              <RouterLink class="nav-link " to="/products">有機蔬果</RouterLink>
            </li>
            <li class="nav-item ms-5">
              <RouterLink class="nav-link " to="/menu">有機食譜</RouterLink>
            </li>
            <li class="nav-item ms-5">
              <RouterLink class="nav-link " to="/question">常見問題</RouterLink>
            </li>
            <li class="nav-item ms-5">
              <RouterLink class="nav-link position-relative" to="/cart"><i class="bi bi-bag-check"></i>
                <span class="position-absolute translate-middle badge rounded-pill bg-danger">
                  {{carts.length}}
                </span> 
              </RouterLink>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
    <RouterView></RouterView>
  <footer class="bg-light py-3 ">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between mb-4">
          <ul class="d-flex list-unstyled mb-0 h3">
            <li><a href="https://www.instagram.com/" class="text-dark me-4"><i class="bi bi-instagram"></i></a></li>
            <li><a href="https://www.facebook.com/" class="text-dark me-4"><i class="bi bi-facebook"></i></a></li>
            <li><a href="https://line.me/zh-hant/" class="text-dark me-4"><i class="bi bi-line"></i></a></li>
          </ul>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-dark">
          <div class="mb-md-0 mb-1">
            <p class="mb-0"> 02-3456-7890</p>
            <p class="mb-0"> service@mail.com</p>
          </div>
          
          <p class="mb-0">無商業用途，僅供學習需要</p>
         
            <RouterLink to="/login" class="mb-0">
            <img src="../components/icons/Logo.jpg" alt=""></RouterLink>
        </div>
      </div>
  </footer>
</template>

<script>
import { mapActions, mapState } from "pinia";
import {RouterView, RouterLink} from "vue-router"
import cartStore from "../stores/cart";

export default {
  components:{
    RouterView,
    RouterLink,
  },
  computed : {
    ...mapState(cartStore, ['carts'])
  },
  methods: {
    ...mapActions(cartStore,['getCart'])
  },
  mounted() {
    this.getCart()
  },
}

</script>