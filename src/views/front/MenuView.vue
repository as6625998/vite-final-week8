<template>
  <NavProduct></NavProduct>
  <div class="bg-light py-5">
    <div class="container">
        <div class="row juctify-center-center align-items-center">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><RouterLink style='text-decoration:none' class="text-dark" to="/">首頁</RouterLink></li>
              <li class="breadcrumb-item active" aria-current="page">有機食譜</li>
            </ol>
          </nav>
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed menu-button menu-img" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  <p>西班牙番茄冷湯</p>
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse menu-show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body bg-light">
                  <div class="fooding">
                    <h4>預備食材:</h4>
                    <p>番茄 4 顆、小黃瓜 1 條、櫛瓜 1 條、洋蔥 0.25 顆、彩椒 0.5 顆、大蒜 1 瓣</p>
                    <h4>預備調味料:</h4>
                    <p>胡椒粉 少許、檸檬擠汁 1 顆、extra virgin 兩大湯匙、海鹽 適量、紅／白酒醋 兩湯匙、甜羅勒葉 少許切絲</p>
                    <h4>作法:</h4>
                    <p>1 .蕃茄三顆焯水去皮去籽去梗並略斬碎，另外一顆則切成細丁備用。<br>
                        2. 一條小黃瓜及一條小號的櫛瓜都略切小塊，保留一部分也切為細丁備用。<br>
                        3. 0.25顆洋蔥切大塊，0.5顆彩色甜椒去皮去籽去梗切大塊，一顆大蒜拍碎去皮。<br>
                        4. 將蕃茄塊、小黃瓜、櫛瓜、甜椒及洋蔥放進食物調理機分次慢速攪打成泥，然後擰一些胡椒粉，放入各一顆已擠汁的葡萄柚及檸檬，兩大湯匙的extra virgin，捻一些海鹽，加入兩湯匙的紅／白酒醋或是balsamic，以上再次攪打均勻。<br>
                        5. 最後則是按照你所喜歡的稠度加入適當的冰開水或是直接放入一些冰塊做最後的攪打。<br>
                        6. 完成之後將所有材料倒入玻璃皿中，加入剛剛切成小丁的蕃茄、小黃瓜及櫛瓜，再放進冰箱冷藏一個鐘頭以上，喝的時候可以切一些甜羅勒絲放上。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion accordion-flush py-5" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed menu-button menu-img2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  <p>田園蔬菜溫沙拉</p>
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse menu-show" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body bg-light">
                  <div class="fooding">
                    <h4>預備食材:</h4>
                    <p>櫛瓜1條、球芽甘藍150克、玉米筍6條、蓮藕1節、彩椒 1顆、烤地瓜1條</p>
                    <h4>預備調味料:</h4>
                    <p>陳年巴薩米克醋30ml、冷壓初榨橄欖油、胡椒鹽、鹽、綜合義大利香草</p>
                    <h4>作法:</h4>
                    <p>1. 蓮藕洗淨、去皮切片，使用平底鍋，以橄欖油中小火煎至兩面金黃，起鍋備用，球芽甘藍洗淨對切、玉米筍洗淨，食材瀝乾後，以橄欖油煎熟起鍋。<br>
                       2. 櫛瓜切片，在注入橄欖油的平底鍋內鋪平，用小火、不翻動，慢慢煎至兩面焦脆起鍋備用。烤地瓜切片備用。<br>
                       3. 彩椒切塊，入平底鍋小火煎烤，保持脆度口感，巴薩米克醋入鍋，用小火加熱濃縮成一半的量，呈現濃稠狀。<br>
                       4. 將所有煎烤好的蔬菜拌在一起，用鹽及少量胡椒鹽調味，再淋上少許橄欖油，最後淋上濃縮醋，撒上少許義大利香草調味即成。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion accordion-flush py-5" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed menu-button menu-img3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  <p>酪梨莎莎醬佐TACO餅</p>
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse menu-show" aria-labelledby="flush-headingthree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body bg-light">
                  <div class="fooding">
                    <h4>預備食材:</h4>
                    <p>酪梨 1/2 顆、牛番茄 1/2 顆、洋蔥 1/5 顆</p>
                    <h4>預備調味料:</h4>
                    <p>橄欖油 1 小匙、芥末子醬 1 小匙、黑胡椒、鹽 適量、TACO餅皮 6.5” 2-3片</p>
                    <h4>作法:</h4>
                    <p>1. 莎莎醬：酪梨、番茄、洋蔥切丁，再加入檸檬汁、芥末子醬混合，加少許黑胡椒、鹽調味。<br>
                       2. TACO餅皮放平底鍋加熱，約略1分鐘，側面看會有些許澎起即可；此時餅皮是軟的，比較容易包。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion accordion-flush py-5" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFour">
                <button class="accordion-button collapsed menu-button menu-img4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  <p>起司菠菜pizza</p>
                </button>
              </h2>
              <div id="flush-collapseFour" class="accordion-collapse collapse menu-show" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body bg-light">
                  <div class="fooding">
                    <h4>預備食材:</h4>
                    <p>菠菜 200g、Parmesan cheese 60g、蒜 1-2瓣、酸奶 3T、小型蕃茄 1顆</p>
                    <h4>預備調味料:</h4>
                    <p>鹽 適量、Mozzarella cheese 適量</p>
                    <h4>作法:</h4>
                    <p>1. 菠菜洗淨後入熱水快速川燙約15秒起鍋過冷水，將菠菜水份瀝乾後，切成碎丁狀後倒入大碗  <br>
                       2. 蒜瓣去皮拍切成細蒜茸，加入菠菜碎丁，再加入Parmesan cheese/鹽/黑胡椒拌勻成為菠菜醬 <br>
                       3. Pita餅皮均勻抹上蕃茄pase，鋪上蕃茄切片後，再鋪上菠菜dip，最後鋪上Mozzarella cheese，入烤箱，以180度烤12-15mins即可</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
</div></div> 
</template>
<script>
import NavProduct from '@/components/fornt/NavProduct.vue'
export default{
  components:{
    NavProduct
  }
}
</script>
<style>
h4{
  color:#3C7854
}
</style>