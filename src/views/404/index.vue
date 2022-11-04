<template>
  <div class="container">
    <p class="m">Упс, ошибка 404, вы будете перенесены на главную страницу через {{time}} сек.</p>
  </div>
</template>

<script>

export default {
  name: "404",
  data() {
    return {
      time: 15,
      interval: null
    }
  },
  mounted() {
    this.interval = setInterval(()=>{
      this.time--
      if(this.time <= 0){
        this.$router.push('/')
        clearInterval(this.interval)
      }
    },1000)
  },
  beforeUnmount() {
    clearInterval(this.interval)
  }
}
</script>

<style lang="scss" scoped>
.container{
  height: calc(100vh - 64px);
}
p{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
}
</style>
