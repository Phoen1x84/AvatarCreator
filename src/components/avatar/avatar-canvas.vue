<template>
  <div class="avatar-canvas">
      <div class="avatar">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 68 68" style="enable-background:new 0 0 68 68;" xml:space="preserve">
            <g id="Face">
                <g>
                    <circle class="st0" cx="34" cy="34" r="34"/>
                </g>
                <path class="st1" d="M37,43c0,1.7-1.3,3-3,3s-3-1.3-3-3s1.3-7,3-7S37,41.3,37,43z"/>
            </g>
            <g id="Mouth">
                <path d="M40,51c0,0,0,6-6,6c-4.9,0-6-6-6-6"/>
            </g>
            <g id="Eyes">
                <circle cx="20" cy="33" r="3"/>
                <rect x="14" y="27" width="12" height="2"/>
                <rect x="41" y="27" width="12" height="2"/>
                <circle cx="47" cy="33" r="3"/>
            </g>
            <g id="Hair">
                <path class="st2" d="M2,22l31,6l-2-6l37,11c0,0,1-33-32-33S2,22,2,22z"/>
            </g>
            </svg>
        </div>          
        {{color}}
        <avatar-options />
  </div>
</template>

<script>
import bus from './../../eventbus.js';
import AvatarOptions from "./avatar-options.vue";
bus.$on('update', function(msg) {
            console.log(`${msg} test`)
        })
export default {
  name: "avatar-canvas",
  components: {
    AvatarOptions
  },
  data() {
    return {
      color: "default"
    };
  },
  methods: {
    update: function() {
       
    },
  }
};
</script>

<style lang="scss">
.avatar {
  width: 220px;
  height: 220px;
  z-index: 1;
}

.st0 {
  fill: #fddac7;
}
.st1 {
  fill: #f9baad;
}
.st2 {
  fill: #9e4a05;
}
</style>

