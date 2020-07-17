<template>
  <section id="personInAndOutRecord">
    <divShell viewTitle="人员进出记录">
      <div class="echart-box">
        <div class="label">
          <!-- <div>
            <i style="background:#89FFE7;"></i>
            进出次数
          </div> -->
          <!-- <div>
            <i style="background:#FF9C9E;"></i>
            出
          </div> -->
        </div>
        <div class="person-line-echart" id="person-line-echart"></div>
        <div class="classes-static">
          <div id="person-pie-echart-1"></div>
          <div id="person-pie-echart-2"></div>
          <div id="person-pie-echart-3"></div>
          <div id="person-pie-echart-4"></div>
        </div>
      </div>
      <!-- <div class="img-box">
          <swiper :options="swiperOption"  ref="personInAndOutSwiper">
            <swiper-slide>
              <div class="item-box">
                <img src="../assets/img/copy.jpg" preview="1" alt="" preview-text="描述文字1">
                <div>14:22:01</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="item-box">
                <img src="../assets/img/copy.jpg" preview="1" alt="" preview-text="描述文字2">
                <div>14:22:02</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="item-box">
                <img src="../assets/img/copy.jpg" preview="1" alt="" preview-text="描述文字3">
                <div>15:21:03</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="item-box">
                <img src="../assets/img/copy.jpg" preview="1" alt="" preview-text="描述文字4">
                <div>16:13:04</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="item-box">
                <img src="../assets/img/copy.jpg" preview="1" alt="" preview-text="描述文字5">
                <div>17:17:05</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="item-box">
                <img src="../assets/img/copy.jpg" preview="1" alt="" preview-text="描述文字6">
                <div>19:20:06</div>
              </div>
            </swiper-slide>
            <div class="arrow person-btn-prev" slot="button-prev">
              <i class="iconfont el-icon-left"></i>
            </div>
            <div class="arrow person-btn-next" slot="button-next">
              <i class="iconfont el-icon-right"></i>
            </div>
          </swiper>
      </div> -->
    </divShell>
  </section>
</template>

<script>
import divShell from './divShell.vue';
const echarts = require('echarts');
export default {
  name:'personInAndOutRecord',
  components:{
    divShell
  },
  props:['personInOutData'],
  data() {
    var that =this;
    return {
      swiperOption: {
        notNextTick: true,
        observer: true,
        observerParents: true,
        slidesPerView: 5,
        spaceBetween: 20,
        slidesPerGroup: 1,
        autoplay: {
          delay: 1200,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        speed:800,
        loop: true,
        loopFillGroupWithBlank: true,
        grabCursor : true,
        navigation: {
          nextEl: '.person-btn-next',
          prevEl: '.person-btn-prev',
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
      // allCount:0
    }
  },
  created(){
          // personInOutData
          // "openRecordData":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          // "ownerOpenRecordData":0,
          // "familyOpenRecordData":0,
          // "visitorOpenRecordData":0
  },
  watch:{
    personInOutData(){
      let all = this.personInOutData.ownerOpenRecord+this.personInOutData.familyOpenRecord+this.personInOutData.tenantOpenRecord+this.personInOutData.visitorOpenRecord;
      this.renderLineEcharts('(人)');
      this.renderPieEcharts(this.pieChartObj1,'业主',this.personInOutData.ownerOpenRecord,all-this.personInOutData.ownerOpenRecord,'#89FFE7');
      this.renderPieEcharts(this.pieChartObj2,'家属',this.personInOutData.familyOpenRecord,all-this.personInOutData.familyOpenRecord,'#FF9C9E');
      this.renderPieEcharts(this.pieChartObj3,'租户',this.personInOutData.tenantOpenRecord,all-this.personInOutData.tenantOpenRecord,'#FF6060');
      this.renderPieEcharts(this.pieChartObj4,'访客',this.personInOutData.visitorOpenRecord,all-this.personInOutData.visitorOpenRecord,'#FACD89');
      // this.allCount=this.personInOutData.ownerOpenRecordData+this.personInOutData.familyOpenRecordData+this.personInOutData.visitorOpenRecordData+0;
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.lineChartObj = echarts.init(document.getElementById('person-line-echart'));
      this.pieChartObj1 = echarts.init(document.getElementById('person-pie-echart-1'));
      this.pieChartObj2 = echarts.init(document.getElementById('person-pie-echart-2'));
      this.pieChartObj3 = echarts.init(document.getElementById('person-pie-echart-3'));
      this.pieChartObj4 = echarts.init(document.getElementById('person-pie-echart-4'));
      // this.renderLineEcharts('(人)');
      // this.renderPieEcharts(this.pieChartObj1,'业主',this.personInOutData.ownerOpenRecordData);
      // this.renderPieEcharts(this.pieChartObj2,'家属',this.personInOutData.familyOpenRecordData);
      // this.renderPieEcharts(this.pieChartObj3,'租户',0);
      // this.renderPieEcharts(this.pieChartObj4,'访客',this.personInOutData.visitorOpenRecordData);
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
          color:['#89FFE7','#FF9C9E','#FF6060','#FACD89'],
          tooltip: {
              trigger: 'axis',
          },
          xAxis: {
              type: 'category',
              data: ['1', '2', '3', '4', '5', '6', '7', '8','9','10','11','12','13','14','15'],
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
              // minInterval:1,
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
              name: '业主',
              type: 'line',
              symbol: 'none',
              smooth:true,
              data: this.personInOutData.ownerOpenRecordData,
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
              name: '家属',
              type: 'line',
              symbol: 'none',
              smooth:true,
              data: this.personInOutData.familyOpenRecordData,
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
            {
              name: '租户',
              type: 'line',
              symbol: 'none',
              smooth:true,
              data: this.personInOutData.tenantOpenRecordData,
              lineStyle:{
                width:4,
                color:'#FF6060'
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(255,96,96,0.5)'
                  }, {
                      offset: 1,
                      color: 'rgba(255,255,255,0.05)'
                  }])
              },
            },
            {
              name: '游客',
              type: 'line',
              symbol: 'none',
              smooth:true,
              data: this.personInOutData.visitorOpenRecordData,
              lineStyle:{
                width:4,
                color:'#FACD89'
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(250,205,137,0.5)'
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
    renderPieEcharts(obj,unit,count=0,all=0,color='#252B4A'){
      var option = {
        tooltip: {
          trigger: 'item',
          // show:false
          formatter:function(x){
            if(x.dataIndex==0){
              return x.seriesName+'<br>'+x.marker+x.name+':'+x.value
            }else{
              return ''
            }
          }
        },
        graphic:{
          type:'text',
          left:'center',
          // top:'42px',
          // top:'67px',
          top:'40px',
          z:2,
          zlevel:100,
          style:{
            fill:'#B5EFFE',
            width:100,
            height:30,
            fontSize:14,
            // text:unit+'\n\n '+count+'次',
            text:unit
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
                value: count, 
                name: unit,
                itemStyle:{
                  color:color
                },
              },
              {
                value:all, 
                name: '其它',
                hoverAnimation:false,
                itemStyle:{
                  color:'#131a32'
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
  #personInAndOutRecord {
    width: 100%;
    height: 100%;
    position: relative;
    & .echart-box{
      width: 100%;
      // height: 290px;
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
      &> .person-line-echart{
        // height: 188px;
        height: 260px;
      }
      &> .classes-static{
        // height: 100px;
        height: 96px;
        display: flex;
        margin-top: 22px;
        &>div{
          width: 25%;
        }
      }
    }
    & .img-box{
      display: block;
      width: 514px;
      // height: 100px;
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
        &.person-btn-prev{
          left: 0;
          display: none;
        }
        &.person-btn-next{
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

