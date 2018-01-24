<template>
    <div class="canvas">
        <Float />
        <div class="canvas__item">
            <TeaserTitle />
            <Email />
        </div>
        <div class="canvas__item">
            <avatar-canvas />
        </div>
    </div>
</template>

<script>
import "normalize.css";
import "./components/core/main.scss";
import Float from "./components/floats/index.vue";
import TeaserTitle from "./components/teaser-title/index.vue";
import Email from "./components/email-form/index.vue";

// avatar creator
import AvatarCanvas from "./components/avatar/avatar-canvas.vue";

export default {
  name: "app",
  components: {
    AvatarCanvas,
    Float,
    TeaserTitle,
    Email
  }
};

const circles = () => {
  console.log("test");
};
</script>

<style lang="scss">
.canvas {
  &__item {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
  }
}
</style> 