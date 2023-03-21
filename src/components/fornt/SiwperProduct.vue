<template>
  <swiper
    :modules="modules"
    :navigation="true"
    :centeredSlides="false"
    :loop="false" 
    :speed="700" 
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :breakpoints="{
      '0': {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      '375': {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      '576': {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 5,
      },
    }"
    >
    <swiper-slide v-for="product in products" :key="product.id">
      <div class="card" >
        <div class="siwper-product-img p-0 rounded-top">
        <router-link :to="`/product/${product.id}`">
          <img :src="product.imageUrl" class="card-img-top object-fit-cover p-0" :alt="product.id">
        </router-link>
      </div>
        <div class="card-body mx-2">
          <h5 class="card-title">
            <RouterLink class="text-success fs-2 fw-bold" 
              style=text-decoration:none 
              :to="`/product/${product.id}`">{{product.title}}
            <span class="badge rounded-pill align-middle bg-warning fs-7">{{ product.category }}</span>
            </RouterLink>
          </h5>
          <p class="card-text">價格: NT${{product.price}}元</p>
          <div class="d-grid ">
            <button type="button" class="btn btn-dark" @click="addToCart(product.id)">加入購物車</button>
          </div>
        </div>
      </div>
    </swiper-slide>
    
  </swiper>

</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper'
import { RouterLink } from 'vue-router'
import { mapActions } from 'pinia';
import cardStore from '@/stores/cart';

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
const {VITE_URL,VITE_PATH}=import.meta.env

export default {
  data () {
    return {
      modules: [Autoplay,Navigation],
      products:[]
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    RouterLink,
  },
  methods: {
    getProducts(){
      this.$http(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
      .then((res) => {
        this.products=res.data.products
      })
    },
    ...mapActions(cardStore,['addToCart'])
  },
  mounted() {
    this.getProducts()
  }
  
}
</script>
<style scoped>
.swiper {
  height: 500px;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  background-position: center center;
}
.siwper-product-img {
  overflow: hidden;
  position:relative;
}
.card-img-top{
  height: 100%;
  width: 100%;
  transition: transform 0.2s ease-in-out;
}
.card-img-top:hover {
  transform: scale(1.1);
}


</style>
