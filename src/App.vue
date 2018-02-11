<template>
    <router-view>
      <!-- router components get inject here -->
    </router-view>
</template>

<script>
import "normalize.css";
import "./components/core/main.scss";

export default {
  name: "app"
};
</script>

<style lang="scss">
.canvas {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
}
</style> 