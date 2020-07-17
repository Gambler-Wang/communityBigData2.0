<template>
  <section id="praiseStatic">
    <divShell viewTitle="投诉表扬统计">
      <div class="label">
        <div>
          <i style="background:#89FFE7;"></i>
          表扬
        </div>
        <div>
          <i style="background:#FF9C9E;"></i>
          投诉
        </div>
      </div>
      <div class="info">
        <div>
          <div>
            <p>今天收到</p>
            <p>表扬</p>
          </div>
          <p>
            <animated-number 
              :value="complaintsData.todayPraise" 
              :formatValue="formatToCount"
              :duration="1200"
            ></animated-number>  
          </p>
        </div>
        <div>                       
          <div>
            <p>今天收到</p>
            <p>投诉</p>
          </div>
          <p>
            <animated-number 
              :value="complaintsData.todayComplaint" 
              :formatValue="formatToCount"
              :duration="1200"
            ></animated-number>  
          </p>
        </div>
      </div>
      <div class="static">
        <div id="praise-bar-echart">

        </div>
      </div>
    </divShell>
  </section>
</template>

<script>
import divShell from './divShell.vue';
import AnimatedNumber from "animated-number-vue";
const echarts = require('echarts');
export default {
  name:'praiseStatic',
  components:{
    divShell,
    AnimatedNumber
  },
  props:['complaintsData'],
  data() {
    return {
     barChartObj:null
    }
  },
  computed: {
    optionSingleHeight () {
        return {
          singleHeight: 28,
          limitMoveNum: this.listData.length,
          waitTime: 1500
        }
    }
  },
  created(){
    
  },
  watch:{
    complaintsData(){
      this.renderBarEcharts();
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.barChartObj = echarts.init(document.getElementById('praise-bar-echart'));
      this.renderBarEcharts();
    })
  },
  methods: {
    renderBarEcharts(){
      var option={
          grid: {
              left: '30',
              right: '5',
              bottom: '25',
              top:'10'
          },
          tooltip: {
              trigger: 'axis',
              axisPointer: {           
                  type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              },
          },
          xAxis: {
              type: 'category',
              data: this.complaintsData.complaintType,
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
                  type:'solid',
                  opacity:0.8
                }
              },
          },
          yAxis: {
              type: 'value',
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
                show:false,
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
              type: 'bar',
              name:'表扬',
              barWidth:'8',
              itemStyle: {   
                color:'#89FFE7',
                //鼠标悬停时：
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
              },
              data: this.complaintsData.praiseData,
            },
            {
              type: 'bar',
              name:'投诉',
              barWidth:'8',
              itemStyle: {   
                color:'#FF9C9E',
                //鼠标悬停时：
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
              },
              data: this.complaintsData.complaintData,
            },
          ]
          
        }
      this.barChartObj.setOption(option,true);
    },
  }
}
</script>

<style scoped lang="less">
  #praiseStatic {
    width: 100%;
    height: 100%;
    position: relative;
    & .label{
      position: absolute;
      width: 98px;
      height: 48px;
      top: 0;
      right:30px;
      display: flex;
      align-items: center;
      &>div{
        width: 50px;
        color: #B5EFFE;
        font-size: 12px;
        display: flex;
        align-items: center;
        margin-right: 14px;
        &:nth-last-of-type(1){
          margin-right: 0;
        }
        i{
          width: 12px;
          height: 12px;
          margin-right: 6px;
        }
      }
    }
    & .info{
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      &>div{
        width: 50%;
        display: flex;
        // margin-right: 74px;
        &>div{
          margin-right: 14px;
          &>p{
            color: #B5EFFE;
            font-size: 14px;
            text-align: right;
          }
        }
        &>p{
          color: #B5EFFE;
          font-size: 28px;
        }
      }
    }
    & .static{
      width: 100%;
      height: 186px;
      display: flex;
      align-items: center;
      &>div{
        height: 100%;
        width: 100%;
      }
    }
  }
</style>
<style>

</style>

