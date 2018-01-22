<template>
    <div class="avatar-options">
        <div v-for="item in options" :key="item.id">
            <label v-bind:for="item.labelText">
                {{item.labelText}}
            </label>
            <input
            v-bind:id="item.labelText"
            v-bind:type="fieldType" 
            v-bind:value="item.color" 
            v-bind:name="group"
            v-bind:data-color="item.color"
            v-on:change="updateColor"/>
        </div>
    </div>
</template>

<script>
import bus from './../../eventbus.js';
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
          color: "red",
          checked: true
        },
        {
          id: "1",
          labelText: 'blue',
          color: "blue",
          checked: false
        },
        {
          id: "2",
          labelText: 'blue',
          color: "black",
          checked: false
        }
      ]
    }
  },
  methods: {
      updateColor: function(item) {
          bus.$emit('update', item.currentTarget.value)
      }
  },
};
</script>

<style lang="scss">

</style>
