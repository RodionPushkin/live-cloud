<template>
  <div class="input">
    <input :disabled="disabled ? disabled : false" :maxlength="max ? max : 32" :minlength="min ? min : 3"
           :readonly="readonly ? readonly : false" :required="required ? required : false" :type="type ? type : 'text'"
           :value="value ? value : ''" placeholder=" " @input="$emit('custominput',$event.target.value)" :autocomplete="autocomplete ? autocomplete : 'off'">
    <label>{{ placeholder }}</label>
  </div>
</template>

<script>
export default {
  name: "textinput",
  props: ['type', 'placeholder', 'max', 'min', 'disabled', 'required', 'readonly', 'value','autocomplete']
}
</script>

<style lang="scss" scoped>
.input {
  position: relative;
  display: inline-flex;
  flex-direction: column-reverse;
  margin-top: 24px;

  label {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    transition: top 0.2s;
    pointer-events: none;
    font-size: 18px;
    user-select: none;
  }

  input:focus ~ label {
    top: -12px;
    font-size: 16px;
  }

  input:not(:placeholder-shown) ~ label {
    top: -12px;
    font-size: 16px;
  }
}
</style>
