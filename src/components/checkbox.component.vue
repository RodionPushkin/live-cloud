<template>
  <div class="input-checkbox">
    <input id="checkbox" v-model="checked" :required="required ? required : false" :value="checked" type="checkbox">
    <label @click="change"></label>
    <p @click="change">{{ label }}</p>
  </div>
</template>

<script>
export default {
  name: "checkbox",
  props: ["status", "label", "required"],
  data() {
    return {
      checked: this.status ? Boolean(this.status) : false
    }
  },
  methods:{
    change(){
      this.checked = !this.checked
      this.$emit('checked',this.checked)
    }
  }
}
</script>

<style lang="scss" scoped>
.input-checkbox {
  display: flex;
  gap: 12px;
  align-items: center;

  label {
    display: inline-flex;
    height: 20px;
    width: 40px;
    background: var(--bg-color-light);
    border-radius: 10px;
    border: 2px solid var(--normal-color);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.03);
    cursor: pointer;

    &:before {
      content: '';
      height: 16px;
      width: 16px;
      background: var(--accent-color);
      margin-left: 0px;
      transition: margin-left 0.3s;
      border-radius: 8px;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.03);
      cursor: pointer;
    }
  }

  input {
    display: none;
  }

  input:checked ~ label {
    &:before {
      content: '';
      height: 16px;
      width: 16px;
      background: var(--main-color);
      margin-left: 20px;
    }
  }

  p {
    cursor: pointer;
    user-select: none;
  }
}
</style>
