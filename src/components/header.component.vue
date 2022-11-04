<template>
  <header class="header">
    <router-link class="logo" to="/" @click="isMenuOpened = false">
      <img src="@/assets/logo.png" alt="лайв cloud">
    </router-link>
    <search class="search"></search>
    <router-link to="/notifications">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
    </router-link>
    <account></account>
  </header>
</template>

<script>
import Search from "@/components/search.component";
import Account from "@/components/account.component";
import Notifications from "@/components/notifications.component";

export default {
  name: "header.component",
  components: {Notifications, Account, Search},
  data() {
    return {
      isMenuOpened: false
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  background: var(--bg-color-light);
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 998;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  gap: 32px;
  .search{
    margin: 0 auto;
  }
}
</style>
