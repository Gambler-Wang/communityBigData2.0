<template>
  <section id="carInAndOutRecord">
    <divShell viewTitle="车辆进出记录">
      <div class="echart-box">
        <div class="label">
          <div>
            <i style="background:#89FFE7;"></i>
            进
          </div>
          <div>
            <i style="background:#FF9C9E;"></i>
            出
          </div>
        </div>
        <div class="car-line-echart" id="car-line-echart"></div>
        <div class="classes-static">
          <div id="car-pie-echart-1"></div>
          <div id="car-pie-echart-2"></div>
          <div id="car-pie-echart-3"></div>
          <div id="car-pie-echart-4"></div>
        </div>
      </div>
      <div class="img-box">
         <!-- swiper -->
          <swiper :options="swiperOption"  ref="carInAndOutSwiper">
            <swiper-slide>
              <div class="item-box">
                <img src="../assets/img/copy.jpg" preview="2" alt="" preview-text="描述文字1">
                <div>13:23:24</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="item-box">
                <img src="../assets/img/copy.jpg"  preview="2" alt="" preview-text="描述文字2">
                <div>14:22:25</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="item-box">
                <img src="../assets/img/copy.jpg"  preview="2" alt="" preview-text="描述文字3">
                <div>15:21:21</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="item-box">
                <img src="../assets/img/copy.jpg"  preview="2" alt="" preview-text="描述文字4">
                <div>16:13:11</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="item-box">
                <img src="../assets/img/copy.jpg"  preview="2" alt="" preview-text="描述文字5">
                <div>17:17:57</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="item-box">
                <img src="../assets/img/copy.jpg"  preview="2" alt="" preview-text="描述文字6">
                <div>19:20:24</div>
              </div>
            </swiper-slide>
            <div class="arrow car-btn-prev" slot="button-prev">
              <i class="iconfont el-icon-left"></i>
            </div>
            <div class="arrow car-btn-next" slot="button-next">
              <i class="iconfont el-icon-right"></i>
            </div>
          </swiper>
      </div>
    </divShell>
  </section>
</template>

<script>
import divShell from './divShell.vue';
const echarts = require('echarts');
export default {
  name:'carInAndOutRecord',
  components:{
    divShell
  },
  props:["carInOutData"],
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        observer: true,
        observerParents: true,
        slidesPerView: 5,
        spaceBetween: 20,
        slidesPerGroup: 1,
        autoplay: {
          delay: 2100,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        speed:800,
        autoplayDisableOnInteraction:false,
        loop: true,
        loopFillGroupWithBlank: true,
        grabCursor : true,
        navigation: {
          nextEl: '.car-btn-next',
          prevEl: '.car-btn-prev',
        },
        on: {
          click: function () {
            const realIndex = this.realIndex;
            that.handleClickSlide(realIndex);
          }
        }
      },
      lineChartObj:null,
      pieChartObj1:null,
      pieChartObj2:null,
      pieChartObj3:null,
      pieChartObj4:null,
    }
  },
  created(){
    
  },
  watch:{
    carInOutData(){
      this.renderLineEcharts('(人)');
      this.renderPieEcharts(this.pieChartObj1,'固定车',0,0);
      this.renderPieEcharts(this.pieChartObj2,'月租车',this.carInOutData.moonCarInData,this.carInOutData.moonCarOutData);
      this.renderPieEcharts(this.pieChartObj3,'临时车',this.carInOutData.tempCarInData,this.carInOutData.tempCarrOutData);
      this.renderPieEcharts(this.pieChartObj4,'其它',this.carInOutData.otherCarInData,this.carInOutData.otherCarOutData);
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.lineChartObj = echarts.init(document.getElementById('car-line-echart'));
      this.pieChartObj1 = echarts.init(document.getElementById('car-pie-echart-1'));
      this.pieChartObj2 = echarts.init(document.getElementById('car-pie-echart-2'));
      this.pieChartObj3 = echarts.init(document.getElementById('car-pie-echart-3'));
      this.pieChartObj4 = echarts.init(document.getElementById('car-pie-echart-4'));
      // this.renderLineEcharts('(人)');
      // this.renderPieEcharts(this.pieChartObj1,'固定车',0,0);
      // this.renderPieEcharts(this.pieChartObj2,'月租车',this.carInOutData.moonCarInData,this.carInOutData.moonCarOutData);
      // this.renderPieEcharts(this.pieChartObj3,'临时车',this.carInOutData.tempCarInData,this.carInOutData.tempCarrOutData);
      // this.renderPieEcharts(this.pieChartObj4,'其它',this.carInOutData.otherCarInData,this.carInOutData.otherCarOutData);
    })
  },
  methods: {
    renderLineEcharts(unit){
      var option={
          grid: {
              left: '30',
              right: '35',
              bottom: '25',
              top:'40'
          },
          color:['#89FFE7','#FF9C9E'],
          tooltip: {
              trigger: 'axis',
          },
          xAxis: {
              type: 'category',
              data: ['1', '2', '3', '4', '5', '6', '7', '8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
              name:'(时)',
              nameTextStyle:{
                color:'#4D5470',
              },
              axisTick:{
                show:false
              },
              splitLine:{
                show:false
              },
              axisLine:{
                lineStyle:{
                  color:'#4D5470',
                  type:'dashed',
                  opacity:0.8
                }
              },
          },
          yAxis: {
              type: 'value',
              name:unit,
              nameTextStyle:{
                color:'#4D5470',
              },
              axisLabel:{
                color:'#4D5470',
              },
              axisTick:{
                show:false
              },
              splitLine:{
                lineStyle:{
                  color:'#4D5470',
                  type:'dashed',
                  opacity:0.8
                }
              },
              axisLine:{
                show:false
              }
          },
          series: [
            {
              name: '进',
              type: 'line',
              symbol: 'none',
              smooth:true,
              data: this.carInOutData.carInData,
              lineStyle:{
                width:4,
                color:'#89FFE7'
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(137,255,231,0.1)'
                  }, {
                      offset: 1,
                      color: 'rgba(255,255,255,0.05)'
                  }])
              },
            },
            {
              name: '出',
              type: 'line',
              symbol: 'none',
              smooth:true,
              data: this.carInOutData.carOutData,
              lineStyle:{
                width:4,
                color:'#FF9C9E'
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(255,156,158,0.5)'
                  }, {
                      offset: 1,
                      color: 'rgba(255,255,255,0.05)'
                  }])
              },
            },
          ]
        }
      this.lineChartObj.setOption(option,true);
    },
    renderPieEcharts(obj,unit,carIn,carOut){
      var option = {
        tooltip: {
          trigger: 'item',
        },
        graphic:{
          type:'text',
          left:'center',
          top:'42px',
          z:2,
          zlevel:100,
          style:{
            fill:'#B5EFFE',
            width:100,
            height:30,
            fontSize:14,
            text:unit,
          }
        },
        series: [
          {
            name: unit+'统计',
            type: 'pie',
            radius: ['65%', '80%'],
            center: ['50%', '50%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                  show: false,
                  position: 'center'
              },
              // emphasis: {
              //     show: true,
              //     textStyle: {
              //         fontSize: '20',
              //     },
              //     formatter: unit
              // }
            },
            labelLine: {
              normal: {
                  show: false
              }
            },
            data: [
              {
                value: carIn, 
                name: '进',
                itemStyle:{
                  color:'#89FFE7'
                },
              },
              {
                value: carOut, 
                name: '出',
                itemStyle:{
                  color:'#FF9C9E'
                },
              },
            ]
          }
        ]
      };
      obj.setOption(option,true);
    },
    handleClickSlide(index) {
        console.log('当前点击索引：', index);
    } 
  }
}
</script>

<style scoped lang="less">
  #carInAndOutRecord {
    width: 100%;
    height: 100%;
    position: relative;
    & .echart-box{
      width: 100%;
      height: 290px;
      &>.label{
        position: absolute;
        width: 80px;
        height: 48px;
        top: 0;
        right:30px;
        display: flex;
        align-items: center;
        &>div{
          color: #B5EFFE;
          font-size: 12px;
          display: flex;
          align-items: center;
          margin-right: 14px;
          i{
            width: 12px;
            height: 12px;
            margin-right: 6px;
          }
        }
      }
      &> .car-line-echart{
        height: 188px;
      }
      &> .classes-static{
        height: 100px;
        display: flex;
        &>div{
          width: 25%;
        }
      }
    }
    & .img-box{
      display: block;
      width: 514px;
      height: 100px;
      overflow: hidden;
      margin-top: 10px;
      & .swiper-container{
        height: 100px;
        line-height: 100px;
        box-sizing: border-box;
        & .swiper-slide{
          text-align: center;
          color: #fff;
        }
      }
      & .arrow{
        font-size: 20px;
        position:absolute;
        width: 22px;
        height: 100px;
        top: 0;
        color: #fff;
        z-index: 1;
        background-color: #549AF2;
        cursor: pointer;
        &.car-btn-prev{
          left: 0;
          display: none;
        }
        &.car-btn-next{
          right: 0;
        }
      }
      & .item-box{
        width: 100px;
        height: 100px;
        overflow: hidden;
        position: relative;
        &>img{
          width: 100%;
          height: auto;
        }
        &>div{
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 24px;
          line-height: 24px;
          color: #B5EFFE;
          font-size: 12px;
          background: rgba(0,0,0,.7);
          text-align: center;
        }
      }
      
    }
  }
</style>
<style>

</style>

