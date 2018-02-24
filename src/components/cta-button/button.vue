<template>
    <div v-bind:class="className">
        <router-link v-bind:to="href" class="btn__link">        
            {{text}}
        </router-link>     
    </div>
</template>

<script>
export default {
  name: "cta-button",
  props: {
    className: {
      default: "btn"
    },
    text: {
      default: "sample button text"
    },
    href: {
      default: "/"
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.btn {
  border: none;
  border-radius: 5px;
  background: #41b883;
  display: inline-flex;
  color: #fff;
  transition: background 0.25s ease-in-out;
  margin: 0 10px;

  &:hover {
    background: lighten(#41b883, 10%);
  }

  &--back {
    background: #35495e;

    &:hover {
      background: lighten(#35495e, 10%);
    }
  }

  &__link {
    color: currentColor;
    text-decoration: none;
    padding: 20px;
  }
}
</style>

