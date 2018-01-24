<template>
    <div class="avatar-options">
        <div v-for="item in options" :key="item.id">
            <label v-bind:for="item.labelText">
                {{item.labelText}}
            </label>
            <input
            v-bind:id="item.labelText"
            v-bind:type="fieldType"
            v-bind:name="group"
            v-bind:value="item.color"
            v-on:change="updateColor" />
        </div>
    </div>
</template>

<script>
export default {
  name: "avatar-options",
  data() {
    return {
      group: "colours",
      fieldType: "radio",
      options: [
        {
          id: "0",
          labelText: 'red',
          color: `<g id="hair1" fill="#967C32">
                  <path d="M128,64 C128,28.653776 99.346224,0 64,0 C28.653776,0 0,28.653776 0,64 C0,64 88.7851563,59.2031249 105.6,36.5333333 C105.372917,58.9999999 128,64 128,64 Z" id="Oval-3"></path>
                  </g>`,
          checked: true
        },
        {
          id: "1",
          labelText: 'blue',
          color: `<g id="hair4" fill="#B34A34">
            <path d="M128,64 C128,28.653776 99.346224,0 64,0 C28.653776,0 0,28.653776 0,64 C0,64 17.1641739,43.2575575 64,43.4800975 C110.835826,43.7026376 128,64 128,64 Z" id="Oval-3"></path>
        </g>`,
          checked: false
        },
        {
          id: "2",
          labelText: 'black',
          color: ` <g id="hair5" fill="#FFC829">
            <path d="M128,64 C128,28.653776 99.346224,0 64,0 C28.653776,0 0,28.653776 0,64 C0,64 19.750935,16.3587438 64,43.4800975 C102.569843,14.5453244 128,64 128,64 Z" id="Oval-3"></path>
        </g>`,
          checked: false
        }
      ]
    }
  },
  methods: {
      updateColor: function(item) {
          this.$eventBus.$emit('update', item.currentTarget.value);
      }
  }
};
</script>

<style lang="scss">

</style>
