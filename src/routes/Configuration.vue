<template>
    <div class="canvas">
        <Float />
        <AvatarCanvas />
    </div>
</template>

<script>
import Float from "./../components/floats/index.vue";
import AvatarCanvas from "./../components/avatar/avatar-canvas.vue";

export default {
  name: "configuration",
  components: {
    Float,
    AvatarCanvas
  },
  data() {
    return {};
  }
};
</script>

<style lang="sass">

</style>
