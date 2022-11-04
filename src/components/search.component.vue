<template>
  <div class="search">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    <input autocomplete="off" class="input" type="text" placeholder="поиск" @input="search" maxlength="255" @keydown.enter="searchWithoutTimer">
  </div>
</template>

<script>
export default {
  name: "search",
  data(){
    return{
      timer: null
    }
  },
  methods:{
    search({target}){
      if(this.timer) clearTimeout(this.timer)
      this.timer = setTimeout(()=>{
        this.$emit('search',target.value.slice(0,255))
      },700)
    },
    searchWithoutTimer({target}){
      if(this.timer) clearTimeout(this.timer)
      this.$emit('search',target.value.slice(0,255))
    }
  }
}
</script>

<style lang="scss" scoped>
.search{
  position: relative;
  width: 50%;
  height: 48px;
  svg{
    color: var(--main-color);
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
  }
  .input{
    height: 100%;
    width: 100%;
    min-height: 32px;
    padding: 0 24px 0 64px;
    border-radius: 16px;
    font-weight: 400;
    font-size: 14px;
    &::placeholder,&:-ms-input-placeholder,&:-moz-placeholder{
      font-weight: 400;
      font-size: 12px;
    }
  }
}
</style>