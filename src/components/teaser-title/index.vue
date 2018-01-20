<template>
  <div class="teaser">
        <h1 class="teaser__title">{{title}}</h1>
        <div class="teaser__text">
            <p>{{teaser}}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "teaser-title",
  data() {
    return {
      title: "Welcome to the avatar builder",
      teaser:
        "To get started just pop your email address in the field below and "
    };
  }
};
</script>

<style lang="scss">
.teaser {
  text-align: center;
  width: 90%;
  max-width: 620px;
  margin: 0 0 40px;

  &__title {
    animation: slide-up-fade 0.55s forwards ease-in-out;
    animation-delay: 0.20s;
    opacity: 0;
    transform: translateY(30px);
  }

  &__text {
    animation: slide-up-fade 0.55s forwards ease-in-out;
    animation-delay: 0.30s;
    opacity: 0;
    transform: translateY(30px);
  }
}

@keyframes slide-up-fade {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
