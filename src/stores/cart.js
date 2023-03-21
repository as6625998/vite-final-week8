import { defineStore } from 'pinia'
import axios from 'axios';
import Swal from 'sweetalert2'

const {VITE_URL,VITE_PATH} = import.meta.env

const cardStore = defineStore('cart ', {
  state: () => {
    return {
      carts: [],
      total: 0,
      final_total: 0,
      }
  },

  actions: {
//取得購物車列表
   getCart(){
    axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`)
    .then(res => {
      this.carts = res.data.data.carts;
      this.total = res.data.data.total;
      this.final_total = res.data.data.final_total;
      console.log(res)
    })
   },
   //加入購物車
   addToCart(product_id, qty=1){
    const data = {
      data : {
        product_id,
        qty
      }
    }
    axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/cart`, data)
    .then(res => {
      console.log(res);
      this.getCart() //更新購物車數量
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: '已加入購物車'
      })
    })
   },
   //更新購物車
    updataCartItem (item) {
      // 購物車的id , 產品的id
      const data = {
        product_id: item.product.id, // 展開選取項目
        qty: item.qty
      }
      this.loadingItem = item.id
      axios.put(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${item.id}`, { data })
        .then(res => {
          console.log('更新購物車:', res.data)
          this.getCart()
          this.loadingItem = false
        })
    },
    //刪除品項
    deleteItem (item) {
      this.loadingItem = item.id
      axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${item.id}`)
        .then(res => {
          console.log(res.data.message)
          this.getCart()
          this.loadingItem = false
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'error',
            title: '已刪除品項'
          })
        })
    },
    //刪除全部品項
    deleteAllCarts () {
      axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/carts`)
        .then((res) => {
          console.log(res.data.message)
          this.getCart()
          Swal.fire({
            title: '已清除所有品項',
            icon: 'error',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        })
    },
  },
});

export default cardStore