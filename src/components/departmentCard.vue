<template>
  <section id="departmentCard">
    <h5>
      <i class="iconfont el-icon-branch"></i>
      <p>物业员工/部门</p>
      <!-- <span>{{'今日新增 '+departUserData.newUserData}}</span>         -->
    </h5>
    <div>
      <p>
        <span>
          <animated-number 
            :value="departUserData.workerData" 
            :formatValue="formatToCount"
            :duration="1200"
          ></animated-number> 
        </span>
        人
      </p>
      <p>
        <span>
          <animated-number 
            :value="departUserData.deptsData" 
            :formatValue="formatToCount"
            :duration="1200"
          ></animated-number> 
        </span>
        个
      </p>
      <div>
        <div>
         <!-- swiper -->
          <swiper :options="swiperOption"  ref="departSwiper" v-if="departUserData.deptUserList.length>0">
            <!-- <swiper-slide><span>服务中心 8人</span></swiper-slide>
            <swiper-slide>安全部 35人</swiper-slide>
            <swiper-slide>保洁绿化 23人</swiper-slide>
            <swiper-slide>工程部 213人</swiper-slide>
            <swiper-slide>运营部 2人</swiper-slide>
            <swiper-slide>财务部 6人</swiper-slide> -->
            <template>
              <swiper-slide v-for="(item,index) in departUserData.deptUserList" :key="index"><span>{{item.deptName+' '+item.deptNum+'人'}}</span></swiper-slide>
            </template>
            
            <div class="arrow depart-btn-prev" slot="button-prev">
              <i class="iconfont el-icon-left"></i>
            </div>
            <div class="arrow depart-btn-next" slot="button-next">
              <i class="iconfont el-icon-right"></i>
            </div>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AnimatedNumber from "animated-number-vue";
export default {
  name:'departmentCard',
  components:{
    AnimatedNumber,
  },
  props:['departUserData'],
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper 
        observeParents:true,//修改swiper的父元素时，自动初始化swiper 
        slidesPerView: 5,
        spaceBetween: 20,
        slidesPerGroup: 1,
        autoplay: {
          delay: 2300,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        speed:800,
        loop: true,
        loopFillGroupWithBlank: true,
        grabCursor : true,
        navigation: {
          nextEl: '.depart-btn-next',
          prevEl: '.depart-btn-prev',
        },
      }
    }
  },
  created(){
    
  },
  mounted() {

  },
  methods: {
    
  }
}
</script>

<style scoped lang="less">
  #departmentCard {
    width: 100%;
    height: 100%;
    background-color:rgba(255,255,255,0.05);
    border-radius: 5px;
    padding: 14px 16px;
    box-sizing: border-box;
    &>h5{
      color: #91D5FB;
      font-size: 14px;
      font-weight: normal;
      height: 14px;
      line-height: 14px;
      display: flex;
      &>i{
        margin-right: 6px;
      }
      &>p{
        margin-right: 10px;
      }
      &>span{
        font-size: 12px;
      }
    }
    &>div{
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &>p{
        color: #91D5FB;
        font-size: 14px;
        margin-right: 0px;
        &>span{
          font-size: 24px;
          color: #ffffff;
        }
      }
      &>div{
        width: 736px;
        height: 100%;
        position: relative;
        &>div{
          margin-top: 20px;
          & .swiper-container{
            height: 20px;
            line-height: 20px;
            box-sizing: border-box;
            padding: 0 22px;
            & .swiper-slide{
              text-align: center;
              color: #fff;
            }
          }
          & .arrow{
            font-size: 20px;
            position:absolute;
            width: 22px;
            height: 22px;
            top: 0;
            color: #fff;
            z-index: 1;
            cursor: pointer;
            &.depart-btn-prev{
              left: 0;
            }
            &.depart-btn-next{
              right: 0;
            }
          }
        }
      }
    }
  }
</style>
<style>

</style>

