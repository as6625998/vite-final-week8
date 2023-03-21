<template>
  <NavProduct></NavProduct>

  <div class="container">
    <div class="row">
    <section class="col-lg-6 my-5 p-5 mb-5 mb-lg-0">
      <h2 class="py-4">訂購內容</h2>
      <table class="table align-middle">
        <tbody>
          <tr class="border-bottom"></tr>
          <tr  v-for="orderProduct in orderProducts" :key="orderProduct.id">
            <td class="d-flex align-items-center py-4">
              <img :src="orderProduct.product.imageUrl" class="object-fit-cover d-block" width="120" height="120" alt="item.product.title">
              <div class="d-flex flex-column flex-md-row justify-content-between w-75 mx-4">
                <div class="d-flex flex-column">
                  <p class="mb-1 py-2 ">{{ orderProduct.product.title }}</p>
                  <p class="mb-1 py-2 ">NT${{ orderProduct.product.price }} / {{ orderProduct.product.unit }}</p>
                  <p class="mb-1 py-2 ">數量：{{ orderProduct.qty }}</p>
                </div>
                <p class="mb-0 fs-4 text-success mt-auto">NT${{ orderProduct.final_total }} </p>
              </div>
            </td>
            
          </tr>
        </tbody>
      </table>
    </section>

    <div class="col-lg-6">
        <div class="my-5 p-5 rounded-2 bg-light border border-2">
          <h2 class="fs-lg py-4 border-bottom border-dark border-opacity-10">
            訂單資訊
          </h2>

          <ul class="mb-6 ps-0">
            <li
              class="d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"
            >
              <p class="fw-regular d-md-none">
                訂單金額： NT$ {{ orderInfo.total }}
              </p>
              <p class="fw-regular d-none d-md-block col-4">訂單金額：</p>
              <p class="col d-none d-md-block col">NT$ {{ orderInfo.total }}</p>
            </li>
            <li
              class="d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"
            >
              <p class="fw-regular d-md-none">訂單編號： {{ orderInfo.id }}</p>
              <p class="fw-regular d-none d-md-block col-4">訂單編號：</p>
              <p class="col d-none d-md-block col">
                {{ orderInfo.id }}
              </p>
            </li>
            <li
              class="d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"
            >
              <p class="fw-regular d-md-none">
                下單時間： {{ formatDate(orderInfo.create_at) }}
              </p>
              <p class="fw-regular d-none d-md-block col-4">下單時間：</p>
              <p class="col d-none d-md-block col">
                {{ formatDate(orderInfo.create_at) }}
              </p>
            </li>
            <li
              class="d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"
            >
              <p class="fw-regular d-md-none">
                寄送地址： {{ orderUser.address }}
              </p>
              <p class="fw-regular d-none d-md-block col-4">寄送地址：</p>
              <p class="col d-none d-md-block col">
                {{ orderUser.address }}
              </p>
            </li>
            <li
              class="d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"
            >
              <p class="fw-regular d-md-none">
                顧客姓名： {{ orderUser.name }}
              </p>
              <p class="fw-regular d-none d-md-block col-4">顧客姓名：</p>
              <p class="col d-none d-md-block col">
                {{ orderUser.name }}
              </p>
            </li>
            <li
              class="d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"
            >
              <p class="fw-regular d-md-none">聯絡電話： {{ orderUser.tel }}</p>

              <p class="fw-regular d-none d-md-block col-4">聯絡電話：</p>
              <p class="col d-none d-md-block col">
                {{ orderUser.tel }}
              </p>
            </li>
            <li
              class="d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"
            >
              <p class="fw-regular d-md-none">
                電子信箱： {{ orderUser.email }}
              </p>
              <p class="fw-regular d-none d-md-block col-4">電子信箱：</p>
              <p class="col d-none d-md-block col">
                {{ orderUser.email }}
              </p>
            </li>
            <li
              class="d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"
            >
              <p class="fw-regular d-md-none">
                客戶備註： {{ orderInfo.message }}
              </p>
              <p class="fw-regular d-none d-md-block col-4">客戶備註：</p>
              <p class="col d-none d-md-block col">
                {{ orderInfo.message }}
              </p>
            </li>
          </ul>
          <button
            type="button"
            class="btn btn-primary text-light w-100"
            @click.prevent="payOrder">
            確認付款
          </button>
        </div>
      </div>
    <!-- 訂單連絡資訊 end -->
  </div>
  </div>
</template>
<script>
import NavProduct from '@/components/fornt/NavProduct.vue'
import {mapState, mapActions } from 'pinia';
import cardStore from '@/stores/cart';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data(){
    return{
      orderId: "",
      orderInfo: {},
      orderUser: {},
      orderProducts: [],
    }
  },
  components: {
    NavProduct
  },
  computed: {
    ...mapState(cardStore, ['carts', 'total', 'final_total'])
  },
  methods: {
    ...mapActions(cardStore,['getCart']),
    formatDate(timestamp) {
      const date = new Date(timestamp * 1000);
      return date.toLocaleString();
    },
    getAllOrder() {
      this.$http
        .get(`${VITE_URL}/v2/api/${VITE_PATH}/orders`)
        .then((res) => {
          console.log(res);
        })
    },
    getOrder() {
      this.orderId = this.$route.params.id;
      this.$http
        .get(`${VITE_URL}/v2/api/${VITE_PATH}/order/${this.orderId}`)
        .then((res) => {
            this.orderInfo = res.data.order;
            this.orderUser = res.data.order.user;
            this.orderProducts = res.data.order.products;
         
        })
    },
    payOrder() {
      this.orderId = this.$route.params.id;
      this.$http
        .post(`${VITE_URL}/api/${VITE_PATH}/pay/${this.orderId}`)
        .then((res) => {
          this.$router.push(`/paysuccess/${this.orderId}`);
          // Toast.fire({
          //   icon: "success",
          //   title: `${res.data.message}`,
          // });
          console.log(res);
          // this.$router.push(`/complete/${this.orderId}`);
        })
        // .catch((error) => {
        //   Toast.fire({
        //     icon: "error",
        //     title: `${error.response.data.message}`,
        //   });
        // });
    },
    
  },
  mounted() {
    this.getOrder();
}
}
</script>