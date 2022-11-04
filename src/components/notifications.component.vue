<template>
  <div class="notifications" @click.self="isMenuOpened = !isMenuOpened">
    <div class="backdrop" v-if="isMenuOpened" @click.self="isMenuOpened = false"></div>
    <svg @click="isMenuOpened = !isMenuOpened" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
    <div v-if="isMenuOpened" class="list"></div>
  </div>
</template>

<script>
export default {
  name: "notifications",
  data(){
    return{
      isMenuOpened: false
    }
  },
}
</script>

<style lang="scss" scoped>
.notifications{
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  position: relative;
  z-index: 998;
  svg{
    cursor: pointer;
  }
  .backdrop{
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.01);
    backdrop-filter: blur(4px);
    width: 100vw;
    height: 100vh;
    cursor: auto;
  }
  .list{
    position: fixed;
    right: 32px;
    top: 64px;
    width: 220px;
    background: var(--bg-color-light);
    cursor: auto;
    display: flex;
    flex-direction: column;
    padding: 16px 0;
    border-radius: var(--border-radius);
  }
}
</style>