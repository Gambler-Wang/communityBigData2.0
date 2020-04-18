<template>
  <section id="videoCard">
    <div>
      <div class="jump" @click="jump">
        <i class="iconfont el-icon-haofangtuo400iconfontgengduo"></i>
      </div>
      <video
        v-if="videoUrl"
        id="myPlayer"
        poster=""
        autoplay="autoplay"
        muted="true"
        loop
        controls
        playsInline
        webkit-playsinline
        :src="videoUrl"
      ></video>
      <video v-else src="../assets/test.mp4" autoplay="autoplay" muted="true"  loop ></video>
    </div>
  </section>
</template>

<script>
export default {
  name:'videoCard',
  components:{
    
  },
  props:['videoUrl'],
  data() {
    return {
      player: ''
      
    }
  },
  watch: {
    'videoUrl': function (n, o) {
      // this.player.stop();
      if(this.player){
        this.player.stop(0);
        this.player.stop(1);
        this.player.stop(2);
        this.player.stop(3);
      }
      this.$nextTick(() => {
        this.initPlay();
      })
    }
  },
  created(){
    if(this.player){
        this.player.stop(0);
        this.player.stop(1);
        this.player.stop(2);
        this.player.stop(3);
      }
    this.$nextTick(() => {
      this.initPlay();
    })
  },
  mounted() {

  },
  methods: {
    jump(){
      window.open('https://www.xhuachina.com:8443/smartcommunity/indextest.html#xhkj/majorproperty/ppmequipment/videopreview.html');
    },
    initPlay(){
      this.player = new EZUIKit.EZUIPlayer('myPlayer');
      this.player.on();
    }
  },
  beforeDestroy(){
    this.player.stop();
  },
}
</script>

<style scoped lang="less">
  #videoCard {
    width: 761px;
    height: 100%;
    background:rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    &>div{
      width: 761px;
      height: 462px;
      border-radius:10px; 
      overflow: hidden;
      position: relative;
      & .jump{
        position:absolute;
        width: 44px;
        height: 44px;
        background: rgba(0,0,0,0.8);
        border-radius: 10px;
        bottom: 12px;
        right: 16px;
        text-align: center;
        line-height: 44px;
        color: #89FFE7;
        font-size: 26px;
        cursor: pointer;
        z-index: 1;
      }
      & video{
        width: 100%;
        height: 100%;
        background-color: black;
      }
    }
  }
</style>
<style>

</style>

