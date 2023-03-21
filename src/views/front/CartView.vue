<template>
   <VueLoading :active="loadingItem" :z-index="1060"></VueLoading>
   <NavProduct></NavProduct>
  <div class="container py-7">
    <div class="row g-5">
  <!-- 購物車列表 --> 
      <div class="col-md-7">
        <h1 class="text-center py-5">購物清單列表</h1>
        
        <div v-for="item in carts" :key="item.id" class="border-top row py-3">
          <div class="col-1 d-flex align-items-center justify-content-center">
            <button type="button" class="btn btn-outline-danger btn-sm"
            :disabled="item.id === loadingItem"
            @click="deleteItem(item)">x
            </button>
          </div>
          
          <div class="col-4 d-flex align-items-center justify-content-center">
            <img :src="item.product.imageUrl" class="d-block object-fit-cover" width="120" height="120" alt=""
            >
          </div>
          
          <div class="col-7 d-flex justify-content-between flex-column">
            <div class="col text-success fs-5 fw-bolder">
              {{ item.product.title }}
            </div>
            
            <div class=" input-group py-2" >
              <div class="input-group-prepend">
                <button class="btn btn-outline-dark"  @click="dashQty(item)"
                :class="{disabled: item.qty == 1}">
                  <i class="bi bi-dash-lg"></i>
                </button>
              </div>
                <input class="form-control text-center" 
                  readonly 
                  type="number"
                  min="1" 
                  v-model="item.qty">
                <div class="input-group-append">
                <button class="btn btn-outline-dark"  @click="plusQty(item)">
                  <i class="bi bi-plus-lg"></i>
                </button>
              </div>
            </div>
              <small class="pt-2">價格：
                NT${{ item.final_total }}
             </small>
          </div>
        </div>
        
        <hr>
          <div class="d-flex justify-content-between align-items-center">
            <button class="btn btn-outline-danger" type="button"
            @click="deleteAllCarts()" :disabled="carts?.length === 0">清空購物車</button>
            <span class="text-end">總金額:NT${{ total }}</span>
          </div>
    </div>

        <v-form ref="form" class="col-md-5 bg-light rounded-3 py-5" v-slot="{ errors }" @submit="createOrder">
          <h1 class="text-center">訂單聯絡資料</h1>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <v-field id="email" name="email" type="email" class="form-control"
                     :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email"
                     rules="email|required" v-model="form.user.email"></v-field>
            <error-message name="email" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="name" class="form-label">收件人姓名</label>
            <v-field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
                     placeholder="請輸入姓名" rules="required" v-model="form.user.name"></v-field>
            <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="tel" class="form-label">收件人電話</label>
            <v-field id="tel" name="電話" type="text" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
                     placeholder="請輸入電話" :rules="{
                      numeric: true,
                      required: true,
                      min: 8,
                      regex: /^(09)([0-9]{2})([0-9]{6})$|^(0)([0-9]{1})([0-9]{6,8})$/
                }" v-model="form.user.tel"></v-field>
            <error-message name="電話" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="address" class="form-label">收件人地址</label>
            <v-field id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }"
                     placeholder="請輸入地址" rules="required" v-model="form.user.address"></v-field>
            <error-message name="地址" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea id="message" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
          </div>
          <div class="text-end">
            <button type="submit" class="btn btn-danger"
              >送出訂單</button>
          </div>
        </v-form>
      </div>
    </div>

  
</template>

<script>
import {mapState, mapActions } from 'pinia';
import cardStore from '@/stores/cart';
import NavProduct from '@/components/fornt/NavProduct.vue'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  components:{
    NavProduct
  },
data () {
  return {
    loadingItem: false,
    form: {
      user: {
        name: '',
        email: '',
        tel: '',
        address: ''
      }
    },
    message: '',
    orderId: ''
  }
},
methods: {
  ...mapActions(cardStore,['addToCart','updataCartItem','deleteItem','deleteAllCarts','getCart']),
  createOrder () {
    const order = this.form
    this.$http.post(`${VITE_URL}/v2/api/${VITE_PATH}/order`, { data: order })
    .then((res) => {
      this.$refs.form.resetForm()
      this.orderId = res.data.orderId;
      this.$router.push(`/cartcheck/${this.orderId}`);
      this.getCart()
    }).catch((err) => {
      alert(err.response.data.message)
    })
  },
  plusQty(item) {
      const data = {
        product_id: item.product_id,
        qty: item.qty + 1,
      };
      // loading.loadingItem = item.id;
      this.$http.put(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${item.id}`, {data,}) //{data:data}同名可以縮寫
        .then((res) => {
          console.log(res);
          this.getCart();
          // loading.loadingItem = "";
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
    dashQty(item) {
      const data = {  
        product_id: item.product_id,
        qty: item.qty - 1,
      };
      // loading.loadingItem = item.id;
      this.$http.put(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${item.id}`, {data, }) //{data:data}同名可以縮寫
        .then((res) => {
          console.log(res);
          this.getCart();
          // loading.loadingItem = "";
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
    
},
computed: {
    ...mapState(cardStore, ['carts', 'total', 'final_total'])
},
mounted () {
  this.getCart()
}
}
</script>
