<template>
  <NavProduct></NavProduct>
  <div class="container position-relative">
    <div class="row py-7">
      <div class="col-md-7">
        <img :src="product.imageUrl"  class="d-block w-100 object-fit-cover product-img" alt="">
      </div>
      <div class="col-md-5 ">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-white px-0 mb-0 pb-3">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-muted">首頁</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/products" class="text-muted">有機蔬菜</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">商品內容</li>
          </ol>
        </nav>
        <h2 class="fw-bold h1 mb-1">{{product.title}}</h2>
        <h5 class="py-5">{{ product.description }}</h5>
        <h5>規格: {{ product.content}}</h5>
        <p class="h4 fw-bold">價格: NT${{product.price}} /{{ product.unit }}</p>
        <div class="row align-items-center ">
          <div class="col-6 align-self-end">
            <div class="input-group my-3 bg-light rounded">
              <div class="input-group-prepend">
                <button class="btn btn-outline-dark border-0 py-2"  @click="dashQty">
                  <i class="bi bi-dash-lg"></i>
                </button>
              </div>
              <input  class="form-control border-0 text-center my-auto  bg-light" 
                readonly type="number" min="1" v-model="qty">
              <div class="input-group-append">
                <button class="btn btn-outline-dark border-0 py-2"  @click="plusQty">
                  <i class="bi bi-plus-lg"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-6">
            <button type="button" class="text-nowrap btn btn-dark w-100 py-2"
            @click="addToCart(product.id, qty)">
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
      
  </div>
  <div class="container">
    <h1 class="text-center pb-5 fw-bold">你可能會喜歡</h1>
    <SiwperProduct></SiwperProduct>
  </div>

</template>

<script>
import { mapActions } from 'pinia';
import { RouterLink } from 'vue-router'
import cardStore from '../../stores/cart';
import NavProduct from '@/components/fornt/NavProduct.vue'
import SiwperProduct from '@/components/fornt/SiwperProduct.vue'

const {VITE_URL, VITE_PATH} = import.meta.env;

export default {
  data(){
    return{
      product:{},
      qty:1
    }
  },
  components:{
    NavProduct,
    RouterLink,
    SiwperProduct
  },
  methods: {
    getProducts(){
      const { id } = this.$route.params;
      // id為網址參數，以解構放式將值取出
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/product/${id}`)
      .then((res) => {
        this.product = res.data.product 
      })
    },
    plusQty() {
      this.qty++;
    },
    dashQty() {
      if (this.qty > 1) {
        this.qty--;
      }
    },
    ...mapActions(cardStore,['addToCart'])
  },
  mounted() {
    this.getProducts();
  },
}

</script>