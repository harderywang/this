<template>
  <div>
    <div class="wiper">
      <div class="color">
        <div class="container">
          <div class="origin" :style="{'background':'hsl('+(ht+4)*360/200+',100%,50%)'}"></div>
          <div class="black"></div>
          <div class="white">
            <div
              v-for="(item,index) in 100"
              :style="{'background':'linear-gradient(to right,rgba(255,255,255,'+(1-(item-1)/100)+'),rgba(255,255,255,0))'}"
              :key="index"
            ></div>
          </div>
          <div class="mask" @mousemove="chooseColor"></div>
        </div>
        <div class="hue" @mousemove="choseHue">
          <div class="circle" :style="{top:ht+'px'}" @mousedown="startHue" @mouseup="endHue"></div>
          <span
            v-for="(item,index) in 361"
            :style="{'background':'hsl('+(item-1)+',100%,50%)'}"
            :key="index"
          ></span>
        </div>
      </div>
      <div class="bg" :style="{background:bg}"></div>
    </div>
  </div>
</template>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
export default {
  props:['bg1'],
  data: function () {
    return {
      ht: 0,
      flagHue: false,
      bg: this.bg1,
    };
  },
  methods: {
    choseHue(e) {
      var top;
      if (this.flagHue) {
        top = e.clientY - e.target.parentElement.offsetTop - 4;
        if (top <= -4) {
          top = -4;
        }
        if (top >= 196) {
          top = 196;
        }
        this.ht = top;
        // console.log(this.ht)
      }
    },
    startHue(e) {
      this.flagHue = true;
    },
    endHue() {
      this.flagHue = false;
    },
    chooseColor(e) {
      let s, l, leftL;
      s = parseInt(100 - e.offsetY / 2);
      leftL = s / 2;
      l = ((s - leftL) * (200 - e.offsetX)) / 200 + leftL;
      this.bg =
        "hsl(" + ((this.ht + 4) * 360) / 200 + "," + s + "%," + l + "%)";
      console.log(this.bg);
    },
  },
};
</script>

<style scoped>
.wiper {
  margin: 50px auto;
  width: 200px;
}
.color {
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
* {
  padding: 0;
  margin: 0;
}
.hue {
  width: 10px;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
}
span {
  width: 20px;
  height: calc(200 / 360) px;
}
.circle {
  border: 1px solid rgba(0, 0, 0, 0.5);
  height: 8px;
  width: 8px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  /* background: rgba(255,255,255,.5); */
}
.container {
  height: 200px;
  width: 200px;
  position: relative;
}
.container > div {
  position: absolute;
  width: 100%;
  height: 100%;
}
.origin {
  background: red;
}
.black {
  background: linear-gradient(to top, black, rgba(0, 0, 0, 0));
  display: flex;
}
/* .black>div{
            width:2px;
            height: 100%;
            background:red;
        } */
.white {
  /* background:linear-gradient(to right bottom,white,rgba(255,255,255,0)); */
  display: flex;
  flex-wrap: wrap;
}
.white > div {
  height: 2px;
  width: 100%;
  background: yellow;
}
.mask {
  height: 100%;
  width: 100%;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
}
.bg {
  height: 50px;
  width: 50px;
  margin: 50px auto;
}
</style>