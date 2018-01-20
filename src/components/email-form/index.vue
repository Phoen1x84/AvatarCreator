<template>
    <div class="email-form">
        <form v-bind:action="redirectUrl" method="post" class="form">
            <div class="field-group">
                <label for="email" class="field-group__label">
                    {{labelText}}
                </label>
                <input id="email" class="field-group__email-input" type="email" v-bind:placeholder="placeholder" value="" />
            </div>
            <div class="field-group field-group--inline">
                <a href="#" class="field-group__link">link here</a>
                <input type="submit" class="field-group__submit" v-bind:value="buttonText" />
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name: "email",
  data() {
    return {
      labelText: "Email Address",
      placeholder: "enter your email address",
      buttonText: "Create now",
      redirectUrl: "/"
    };
  }
};
</script>

<style lang="scss">
.email-form {
  background: #f1f1f1;
  border-radius: 5px;
  width: 90%;
  max-width: 420px;
  margin: 0 auto;
  padding: 20px;

  animation: slide-up-fade 0.55s forwards ease-in-out;
  animation-delay: 0.40s;
  opacity: 0;
  transform: translateY(30px);
}

.field-group {
  display: flex;
  margin: 0 0 20px;
  flex-direction: column;

  &--inline {
    flex-direction: row;
    align-items: center;
  }

  &:last-of-type {
    margin: 0;
  }

  &__label {
    color: #222;
    display: block;
    margin: 0 0 20px;
    position: absolute;
    clip: rect(0, 0, 0, 0);
    height: 0;
  }

  &__email-input {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    width: 100%;
  }

  &__submit {
    border: none;
    border-radius: 5px;
    background: #222;
    color: #fff;
    padding: 20px;
    margin-left: auto;
  }

  &__link {
    color: #222;
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

