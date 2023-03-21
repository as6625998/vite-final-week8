<template>
 <NavProduct></NavProduct>
<div class="bg-light py-5">
  <div class="container mt-md-5 mt-3 mb-7">
      <div class="row">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><RouterLink  style='text-decoration:none' class="text-dark" to="/">首頁</RouterLink></li>
              <li class="breadcrumb-item active" aria-current="page">有機蔬果</li>
            </ol>
          </nav>

        <div class="col-md-3">
          <ul class="list-group fs-5">
            <li value="所有商品" class="list-group-item list-group-item-action list-group-item-success py-3"
            @click="getCategory('所有商品')"
            :class="{ active: category === '所有商品'}"
            >所有商品
          </li>
            <li value="葉菜" class="list-group-item list-group-item-action list-group-item-success py-3"
            @click="getCategory('葉菜')"
            :class="{ active: category === '葉菜'}"
            >新鮮葉菜</li>
            <li value="根莖瓜果" class="list-group-item list-group-item-action list-group-item-success py-3"
            @click="getCategory('根莖瓜果')"
            :class="{ active: category === '根莖瓜果'}"
            >根莖瓜果</li>
            <li value="蕈菇" class="list-group-item list-group-item-action list-group-item-success py-3"
            @click="getCategory('蕈菇')"
            :class="{ active: category === '蕈菇'}"
            >新鮮蕈菇</li>
            <li value="水果" class="list-group-item list-group-item-action list-group-item-success py-3"
            @click="getCategory('水果')"
            :class="{ active: category === '水果'}"
            >當季水果</li>
          </ul>
        </div>
        <div class="col-md-9">
          <div class="row g-3">
            <div class="col-lg-6" v-for="product in products" :key="product.id">
              <div class="card mb-4 rounded-3">
                <div class="card-img-container p-0 rounded-top">
                <router-link :to="`/product/${product.id}`">
                  <img :src="product.imageUrl" class="card-img-top object-fit-cover p-0" :alt="product.id">
                </router-link>
              </div>
                <div class="card-body px-3 pt-3">
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
            </div>
          </div>
        </div>
      </div>
    </div>

    <PaginationView
    :pages="pagination"
    @emit-page="getProducts"
  ></PaginationView>
</div>
</template>
<script>
import { RouterLink } from 'vue-router'
import { mapActions } from 'pinia';
import PaginationView from '@/components/PaginationView.vue'
import NavProduct from '@/components/fornt/NavProduct.vue'
import cardStore from '@/stores/cart';

const {VITE_URL, VITE_PATH} = import.meta.env;

export default {
  data(){
    return{
      products:[],
      pagination: {},
      category: '所有商品',
      currentPage: 1
    }
  },
  components:{
    RouterLink,
    PaginationView,
    NavProduct
  },
  methods: {
    getProducts(page = 1, category = ''){
      if (this.$route.query.page) {
        page = this.$route.query.page
        this.$route.query.page = ''
      }

      this.currentPage = page
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/products?page=${page}&category=${category}`)
      .then((res) => {
        this.products=res.data.products
        this.pagination = res.data.pagination
        console.log(res.data)
      })
    },
    getCategory (category) {
      this.category = category
      if (category === '所有商品') {
        this.getProducts()
      } else {
        this.getProducts(1, category)
      }
    },
    ...mapActions(cardStore,['addToCart'])
  },
  mounted() {
    this.getProducts()
  },
}

</script>
