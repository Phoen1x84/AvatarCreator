<template>
    <div class="configure-group">        
            <input type="radio" class="configure-group__input" id="item1" name="x" /> 
            <label for="item1" class="configure-group__title">
                Hair
            </label>
            <div class="configure-group__options">
                <div class="configure-option" v-for="item in options" :key="item.id">
                    <input
                        class="configure-option__input"
                        v-bind:id="item.labelText"
                        v-bind:type="fieldType"
                        v-bind:name="group"
                        v-bind:value="item.hairStyle"
                        v-on:change="updateColor" />                
                    <label class="configure-option__label" v-bind:for="item.labelText">
                        {{item.labelText}}
                    </label>
                    <div class="configure-option__img">
                        <!-- <img 
                            v-bind:src="item.image" 
                            v-bind:alt="item.imageAlt" /> -->
                            <svg width="128px" height="128px" viewBox="0 0 128 128" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <!-- Generator: Sketch 48.2 (47327) - http://www.bohemiancoding.com/sketch -->
                            <title>hai1</title>
                            <desc>Created with Sketch.</desc>
                            <defs></defs>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="hair1" fill="#967C32">
                                    <path d="M128,64 C128,28.653776 99.346224,0 64,0 C28.653776,0 0,28.653776 0,64 C0,64 88.7851563,59.2031249 105.6,36.5333333 C105.372917,58.9999999 128,64 128,64 Z" id="Oval-3"></path>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>

            <input type="radio" class="configure-group__input" id="item2" name="x" />    
            <label for="item2" class="configure-group__title">
                eyes
            </label>
            <div class="configure-group__options">       
                <div class="configure-option"></div>
            </div>

            <input type="radio" class="configure-group__input" id="item3" name="x" />   
            <label for="item3" class="configure-group__title">
                mouth
            </label>
            <div class="configure-group__options">        
                <div class="configure-option"></div>
            </div>

            <input type="radio" class="configure-group__input" id="item4" name="x" />
            <label for="item4" class="configure-group__title">
                face
            </label>
            <div class="configure-group__options">           
                <div class="configure-option"></div>
            </div>
    </div>
</template>

<script>
export default {
  name: "avatar-options",
  data() {
    return {
      group: "hair",
      fieldType: "radio",
      options: [
        {
          id: "0",
          labelText: "hair 1",
          hairStyle: `<g id="hair1" fill="#967C32">
                          <path d="M128,64 C128,28.653776 99.346224,0 64,0 C28.653776,0 0,28.653776 0,64 C0,64 88.7851563,59.2031249 105.6,36.5333333 C105.372917,58.9999999 128,64 128,64 Z" id="Oval-3"></path>
                      </g>`,
          image: "/images/hair1.svg",
          imageAlt: "hair 1"
        },
        {
          id: "1",
          labelText: "hair 2",
          hairStyle: ` <g id="hair2" fill="#09333F">
                        <path d="M18.0375142,32 C28.1570833,17.4921272 44.9700391,8 64,8 C83.0299609,8 99.8429167,17.4921272 109.962486,32 L18.0375142,32 Z" id="Combined-Shape" opacity="0.0399999991"></path>
                        <path d="M8,64 C8,33.072054 33.072054,8 64,8 C94.927946,8 120,33.072054 120,64 L128,64 C128,28.653776 99.346224,0 64,0 C28.653776,0 0,28.653776 0,64 L8,64 Z" id="Oval-11" fill-rule="nonzero" opacity="0.04"></path>            
                    </g>`,
          image: "images/hair2.svg",
          imageAlt: "hair 1"
        },
        {
          id: "2",
          labelText: "hair 3",
          hairStyle: `<g id="hair3" fill="#524D42">
                          <path d="M105,40 C105,40 21.6,39.4666667 22,40 C22.1348963,53.3460753 14.346115,59.3051481 8,61.9439594 L8,72 L0,72 L0,64 C0,46.326888 7.163444,30.326888 18.745166,18.745166 C30.326888,7.163444 46.326888,0 64,0 C99.346224,0 128,28.653776 128,64 L128,73 L120,73 L120,62.0847719 C113.305884,59.5196244 104.862648,53.5889886 105,40 Z" id="Combined-Shape"></path>
                      </g>`,
          image: "./images/hair3.svg",
          imageAlt: "hair 1"
        },
        {
          id: "3",
          labelText: "hair 4",
          hairStyle: `<g id="hair4" fill="#B34A34">
                          <path d="M128,64 C128,28.653776 99.346224,0 64,0 C28.653776,0 0,28.653776 0,64 C0,64 17.1641739,43.2575575 64,43.4800975 C110.835826,43.7026376 128,64 128,64 Z" id="Oval-3"></path>
                      </g>`,
          image: "./images/hair4.svg",
          imageAlt: "hair 1"
        },
        {
          id: "4",
          labelText: "hair 5",
          hairStyle: `<g id="hair5" fill="#FFC829">
                          <path d="M128,64 C128,28.653776 99.346224,0 64,0 C28.653776,0 0,28.653776 0,64 C0,64 19.750935,16.3587438 64,43.4800975 C102.569843,14.5453244 128,64 128,64 Z" id="Oval-3"></path>
                      </g>`,
          image: "./images/hair5.svg",
          imageAlt: "hair 1"
        }
      ]
    };
  },
  methods: {
    updateColor: function(item) {
      this.$eventBus.$emit("update", item.currentTarget.value);
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
