<template>
  <NavProduct></NavProduct>
  <div class="container">
    <h1 class="text-center py-5">常見問題Q&A</h1>
    <div class="pb-5">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" 
            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <h4>運送方式</h4>
            </button>
          </h2> 
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <ul>
                <li> 運送皆為冷藏配送。</li>
                <li>周一至周五中午12點前完成訂購，當日下午13:00~17:00開始配送。</li>
                <li>週六、日、其他國定假日依各地政府公告颱風假等皆不配送。</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <h4>付款方式</h4>
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <ul>
                <li>目前只接收貨到付款</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <h4>退換貨方式</h4>
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            <ul>
              <li>請在收到產品後24小時內，透過網頁下方的聯絡客服或客服專線與我們聯繫，我們將協助您處理退貨事宜。</li>
              <li>若退換貨的原因是產品本身的瑕疵，我們將負擔所有退換貨所產生的運費成本，並儘速完成退款作業；若退換貨原因並非產品本身的瑕疵，我們會在商家收到退回的商品後，儘快把款項退還給您。</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    
</template>
<script>
import NavProduct from '@/components/fornt/NavProduct.vue'

export default {
  components:{
    NavProduct
  }
}
</script>