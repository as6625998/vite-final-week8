<template>
  <NavProduct></NavProduct>
  <div class="d-flex flex-column justify-content-center align-items-center py-8">
    <div class='text-secondary border border-5 border-success fs-8 rounded-pill p-5'>
      付款成功 <i class="bi bi-check-circle-fill text-success"></i>
    </div>
    <div class="d-flex justify-content-center py-5">
      <RouterLink to="/" type="button" class="btn btn-outline-danger py-4 fw-bold mx-5">前往首頁</RouterLink>
      <RouterLink to="/products" type="button" class="btn btn-primary py-4 fw-bold mx-5">繼續購物</RouterLink>
    </div>
  </div>
</template>
<script>
import NavProduct from '@/components/fornt/NavProduct.vue'

export default {
  components:{
    NavProduct
  },
}
</script>