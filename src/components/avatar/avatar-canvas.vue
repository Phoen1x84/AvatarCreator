<template>
<div class="canvas">
  <div class="avatar-canvas">
      <Avatar 
      v-bind:face="face" 
      v-bind:hair="hair"
      v-bind:eyes="eyes"
      v-bind:mouth="mouth" />
      <AvatarOptions />
      <CtaButton text="Previous page" href="/" class="btn btn--back" />
      <CtaButton text="Save this avatar?" href="/confirm" />
  </div>
  </div>
</template>

<script>
import Avatar from './avatar.vue';
import AvatarOptions from "./avatar-options.vue";
import CtaButton from "./../cta-button/button.vue";

export default {
  name: "avatar-canvas",
  components: {
    Avatar,
    AvatarOptions,
    CtaButton
  },
  data() {
    return {
      hair: null,
      face: '<g id="face"><circle id="Oval-3" fill="#FCDAC6" cx="64" cy="64" r="64"></circle><path d="M73,84.8026243 C73,89.882151 68.97052,94 64,94 C59.02948,94 55,89.882151 55,84.8026243 C55,77.7311301 64,70 64,70 C64,70 73,77.7311301 73,84.8026243 Z" id="Fill-1" fill="#F9BAAD"></path><path d="M64,116 C57.372583,116 52,110.627417 52,104 C52,104 76,104 76,104 C76,110.627417 70.627417,116 64,116 Z M52,102 L76,102 L76,104 L52,104 L52,102 Z" id="Combined-Shape" fill="#09333F"></path></g>',
      eyes: '<g id="eyes" transform="translate(31.000000, 64.000000)" fill="#09333F"><path d="M0,6 C0,2.6862915 2.6862915,0 6,0 C9.3137085,0 12,2.6862915 12,6 C12,7.09286143 12,10.9071386 12,12 C12,15.3137085 9.3137085,18 6,18 C2.6862915,18 0,15.3137085 0,12 C0,10.9071386 0,7.09286143 0,6 Z" id="Combined-Shape"></path><path d="M54,6 C54,2.6862915 56.6862915,0 60,0 C63.3137085,0 66,2.6862915 66,6 C66,7.09286143 66,10.9071386 66,12 C66,15.3137085 63.3137085,18 60,18 C56.6862915,18 54,15.3137085 54,12 C54,10.9071386 54,7.09286143 54,6 Z" id="Combined-Shape"></path></g>',
      mouth: null
    };
  },
  created() {
    //this.$eventBus.$on("updateFace", this.changeFace);
    this.$eventBus.$on("updateFeature", this.changeHair);
    //this.$eventBus.$on("updateEyes", this.changeEyes);
    //this.$eventBus.$on("updateMouth", this.changeMouth);
  },
  methods: {
    changeFace: function(svgCode) {
      this.face = svgCode;
    },
    changeHair: function(svgCode) {
      this.hair = svgCode;
    },
    changeEyes: function(svgCode) {
      this.eyes = svgCode;
    },
    changeMouth: function(svgCode) {
      this.mouth = svgCode;
    }
  }
};
</script>

<style lang="scss">
.avatar {
  width: 128px;
  height: 128px;
  z-index: 1;
  margin: 0 auto 40px;
}

#eyes {
  > path {
    animation: blink 2.4s infinite;
  }
}

@keyframes blink {
  90% {
    transform: none;
    animation-timing-function: ease-in;
  }
  93% {
    transform: translateY(15px) scaleY(0);
  }
  100% {
    animation-timing-function: ease-out;
  }
}
</style>

