<template>
  <section id="schedlingCard">
    <!-- swiper -->
    <swiper :options="swiperOption"  ref="schedlingSwiper" v-if="!isNoScheduling && schedulData.length>0">
      <template>
        <swiper-slide v-for="(item,index) in schedulData" :key="index">
          <div class="card">
            <h5>
              <i class="iconfont el-icon-scheduling"></i>
              {{item.shiftName}}
            </h5>
            <p>
              <span>
                {{item.shiftNum}} 
              </span>人
            </p>
            <p>
              缺勤：
              <b>
                {{item.shiftNum-item.attendance}} 
              </b>
            </p>
          </div>
        </swiper-slide>
        <swiper-slide v-for="(item,index) in attendanceList" :key="index">
          <div class="card">
            <h5>
              <i class="iconfont el-icon-scheduling"></i>
              {{item.attendanceName}}
            </h5>
            <p>
              <span>
                {{item.attendanceNum}} 
              </span>人
            </p>
            <p>
              {{item.attendanceName+':'}}
              <b>
                 {{item.attendanceNum}} 
              </b>
            </p>
          </div>
        </swiper-slide>
      </template>
      <!-- <swiper-slide>
        <div class="card">
          <h5>
            <i class="iconfont el-icon-scheduling"></i>
            今日常白班
          </h5>
          <p>
            <span>
              23
            </span>人
          </p>
          <p>
            缺勤：
            <b>
              1
            </b>
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <h5>
            <i class="iconfont el-icon-scheduling"></i>
            今日早班
          </h5>
          <p>
            <span>
              24  
            </span>人
          </p>
          <p>
            缺勤：
            <b>
              0
            </b>
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <h5>
            <i class="iconfont el-icon-scheduling"></i>
            今日中班
          </h5>
          <p>
            <span>
              8
            </span>人
          </p>
          <p>
            缺勤：
            <b>
              8
            </b>
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <h5>
            <i class="iconfont el-icon-scheduling"></i>
            今日晚班
          </h5>
          <p>
            <span>
              9
            </span>人
          </p>
          <p>
            缺勤：
            <b>
              9
            </b>
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <h5>
            <i class="iconfont el-icon-scheduling"></i>
            今日白班
          </h5>
          <p>
            <span>
              27
            </span>人
          </p>
          <p>
            缺勤：
            <b>
              0
            </b>
          </p>
        </div>
      </swiper-slide> -->
    </swiper>
    <swiper :options="swiperOption"  ref="schedlingSwiper" v-if="isNoScheduling && schedulData.length == 0 && attendanceList.length == 0">
      <template>
        <swiper-slide >
          <div class="card">
            <h5>
              <i class="iconfont el-icon-scheduling"></i>
              今日无排班
            </h5>
            <p>
              <span>
                0 
              </span>人
            </p>
            <p>
              缺勤：
              <b>
               0
              </b>
            </p>
          </div>
        </swiper-slide>
        <swiper-slide >
          <div class="card">
            <h5>
              <i class="iconfont el-icon-scheduling"></i>
              今日无排班
            </h5>
            <p>
              <span>
                0 
              </span>人
            </p>
            <p>
              缺勤：
              <b>
               0
              </b>
            </p>
          </div>
        </swiper-slide>
        <swiper-slide >
          <div class="card">
            <h5>
              <i class="iconfont el-icon-scheduling"></i>
              今日无排班
            </h5>
            <p>
              <span>
                0 
              </span>人
            </p>
            <p>
              缺勤：
              <b>
               0
              </b>
            </p>
          </div>
        </swiper-slide>
        <swiper-slide >
          <div class="card">
            <h5>
              <i class="iconfont el-icon-scheduling"></i>
              今日无排班
            </h5>
            <p>
              <span>
                0 
              </span>人
            </p>
            <p>
              缺勤：
              <b>
               0
              </b>
            </p>
          </div>
        </swiper-slide>
        <swiper-slide >
          <div class="card">
            <h5>
              <i class="iconfont el-icon-scheduling"></i>
              今日无排班
            </h5>
            <p>
              <span>
                0 
              </span>人
            </p>
            <p>
              缺勤：
              <b>
               0
              </b>
            </p>
          </div>
        </swiper-slide>
      </template>
    </swiper>
  </section>
</template>

<script>
import AnimatedNumber from "animated-number-vue";
export default {
  name:'schedlingCard',
  components:{
    AnimatedNumber,
  },
  props:['schedulData','attendanceList','isNoScheduling'],
  data() {
    return {
      swiperOption: { 
        observer: true,
        observerParents: true,
        notNextTick: true,
        slidesPerView: 5,
        spaceBetween: 12,
        slidesPerGroup: 1,
        autoplay: {
          delay: 3200,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        speed:1200,
        loop: true,
        loopFillGroupWithBlank: true,
        grabCursor : true,
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
  #schedlingCard {
    width: 933px;
    height: 100%;
    & .card{
      width: 177px;
      height: 90px;
      margin-right: 12px;
      margin-bottom: 15px;
      background-color:rgba(255,255,255,0.05);
      border-radius: 5px;
      padding: 14px 18px;
      box-sizing: border-box;
      color: #91D5FB;
      &:nth-of-type(5n){
        margin-right: 0;
      }
      &>h5{
        color: #91D5FB;
        font-size: 14px;
        font-weight: normal;
        height: 14px;
        line-height: 14px;
      }
      &>p{
        height: 20px;
        line-height: 20px;
        margin: 9px 0;
        &>span{
          color: #fff;
          font-size: 24px;
          margin-right: 14px;
        }
        &:nth-of-type(2){
          margin: 0;
          height: 14px;
          line-height: 14px;
          &>b{
            font-weight: normal;
          }
        }
      }
    }
  }
</style>
<style>

</style>

