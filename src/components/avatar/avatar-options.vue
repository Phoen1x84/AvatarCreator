<template>
    <div class="configure-group">
      <template v-for="feature in features.feature">
        <template>
          <input :key="feature.object" type="radio" :id="feature.group" name="feature" :value="feature.group" class="configure-group__input" /> 
          <label :key="feature.object" :for="feature.group" class="configure-group__title">
              {{feature.group}}
          </label>
        </template>
        <div class="configure-group__options" :key="feature.object">
            <div class="configure-option" v-for="item in feature.options" :key="item.id">              
                <input
                    :id="item.labelText"
                    :type="item.fieldType"
                    :name="item.name"
                    :value="item.svgCode"
                    class="configure-option__input"
                    v-on:change="updateFeature" />                
                <label :for="item.labelText" class="configure-option__label">
                    {{item.labelText}}
                </label>
                <div class="configure-option__img">
                    <svg width="128px" height="128px" viewBox="0 0 128 128" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g v-html="item.svgCode" />
                      </g>
                    </svg>
                </div>
            </div>
        </div>
      </template>
    </div>
</template>

<script>
import features from './data/features.json';
export default {
  name: "avatar-options",
  data() {
    return {
      features
    };
  },
  methods: {
    updateFeature: function(item) {
      this.$eventBus.$emit(item.currentTarget.name, item.currentTarget.value);
    }
  }
};
</script>

<style lang="scss">
.configure-group {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 420px;
  margin: 0 0 20px;

  &__input {
    position: absolute;
    clip: rect(0, 0, 0);
    width: 0;
    height: 0;

    &:checked {
      + .configure-group__title {
        background: #9068be;
        color: #fff;

        &:after {
          display: block;
        }
        + .configure-group__options {
          display: flex;
        }
      }
    }
  }

  &__title {
    background: #e1e8f0;
    padding: 20px;
    order: 1;
    position: relative;
    transition: background 0.5s ease-in-out;

    &:hover {
      background: darken(#e1e8f0, 10%);
    }

    &:after {
      display: none;
      top: 28px;
      left: 50%;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-color: rgba(110, 211, 207, 0);
      border-bottom-color: #6ed3cf;
      border-width: 30px;
      margin-left: -30px;
    }
  }

  &__options {
    border-radius: 10px;
    background: #6ed3cf;
    display: none;
    width: 100%;
    margin-top: 30px;
    padding: 20px;
    order: 2;
    justify-content: center;
  }
}

.configure-option {
  background: #fff;
  position: relative;
  width: 62px;
  height: 62px;
  margin: 0 5px;
  svg {
    transition: transform 0.5s cubic-bezier(0.75, -0.5, 0, 1.75);
  }
  &:hover {
    svg {
      transform: translateY(-5px);
    }
  }

  &__label {
    cursor: pointer;
    position: absolute;
    clip: rect(0, 0, 0);
    opacity: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 2;
  }

  &__input {
    position: absolute;
    clip: rect(0, 0, 0);
    opacity: 0;
  }

  &__img {
    display: flex;
    justify-content: center;
    z-index: 1;

    > svg {
      width: 52px;
      height: 52px;
      transform: translateY(5px);
    }
  }
}
</style>
