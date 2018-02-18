<template>
  <div class="avatar">
           <svg width="128px" height="128px" viewBox="0 0 128 128" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="face">
                      <circle id="Oval-3" fill="#FCDAC6" cx="64" cy="64" r="64"></circle>
                      <path d="M73,84.8026243 C73,89.882151 68.97052,94 64,94 C59.02948,94 55,89.882151 55,84.8026243 C55,77.7311301 64,70 64,70 C64,70 73,77.7311301 73,84.8026243 Z" id="Fill-1" fill="#F9BAAD"></path>                      
                      <path d="M64,116 C57.372583,116 52,110.627417 52,104 C52,104 76,104 76,104 C76,110.627417 70.627417,116 64,116 Z M52,102 L76,102 L76,104 L52,104 L52,102 Z" id="Combined-Shape" fill="#09333F"></path>
                      <g v-html="eyes" v-if="eyes" />
                  </g>               
                  <g v-html="hair" v-if="hair" />
                  <g v-html="mouth" v-if="mouth" />                     
              </g>
          </svg>
      </div>
</template>

<script>
export default {
  name: "avatar",
  props: {
    face: {
      default: ""
    },
    eyes: {
      default: ""
    },
    hair: {
      default: ""
    },
    mouth: {
      default: ""
    }
  }
};
</script>
