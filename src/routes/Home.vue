<template>
    <div class="canvas">
        <Float />
        <TeaserTitle />
        <Email />
    </div>
</template>

<script>
import Float from "./../components/floats/index.vue";
import TeaserTitle from "./../components/teaser-title/index.vue";
import Email from "./../components/email-form/index.vue";

export default {
  name: "home",
  components: {
    Float,
    TeaserTitle,
    Email
  },
  data() {
    return {

    };
  }
};
</script>

<style lang="sass">

</style>
