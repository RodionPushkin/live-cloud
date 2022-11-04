<template>
  <div class="account" @click.self="isMenuOpened = !isMenuOpened">
    <div class="backdrop" v-if="isMenuOpened" @click.self="isMenuOpened = false"></div>
    <img @click="isMenuOpened = !isMenuOpened" v-if="user.image" class="avatar" src="">
    <div @click="isMenuOpened = !isMenuOpened" v-else class="avatar">{{user.name.slice(0,1)}}</div>
    <svg @click="isMenuOpened = !isMenuOpened" :class="{active: isMenuOpened}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
    <nav class="shadow" v-if="isMenuOpened">
      <div class="info">
        <img v-if="user.image" class="avatar" src="">
        <div v-else class="avatar">{{user.name.slice(0,1)}}</div>
        <div>
          <p>{{user.name}} {{user.surname}}</p>
          <p>{{user.email}}</p>
        </div>
      </div>
      <router-link to="/self/profile" @click.prevent="isMenuOpened = false">Личный профиль</router-link>
      <checkbox :status="this.$store.getters.THEME" class="theme" label="Выбор темы" @checked="changeTheme"></checkbox>
      <router-link to="/self/settings" @click.prevent="isMenuOpened = false">Настройки</router-link>
      <i></i>
      <router-link to="/user/create" @click.prevent="isMenuOpened = false">Добавить пользователя</router-link>
      <a href="" @click.prevent="exit">Выход</a>
    </nav>
  </div>
</template>

<script>
import Checkbox from "@/components/checkbox.component";

export default {
  name: "account",
  components: {Checkbox},
  data(){
    return{
      user: this.$store.getters.USER,
      isMenuOpened: false
    }
  },
  methods:{
    changeTheme(value){
      this.$store.dispatch('SET_THEME',Boolean(value))
    },
    exit(){
      console.log('exit')
    }
  }
}
</script>

<style lang="scss" scoped>
.account{
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  position: relative;
  z-index: 998;
  .avatar{
    height: 24px;
    aspect-ratio: 1/1;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--main-color);
    color: var(--font-color-light);
    font-size: 13px;
    font-weight: 600;
    border-radius: 50%;
    text-transform: capitalize;
    user-select: none;
    cursor: pointer;
  }
  svg{
    cursor: pointer;
    transition: transform 0.3s;
    &.active{
      transform: rotate(-180deg);
    }
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
  nav{
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
    >*{
      height: 32px;
      padding: 0 20px;
    }
    .info{
      height: auto;
      display: flex;
      gap: 12px;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 6px;
      p:first-of-type{
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
      }
      p:last-of-type{
        color: var(--normal-color);
        font-weight: 400;
        font-size: 11px;
        line-height: 14px;
      }
    }
    i{
      width: 100%;
      height: 1px;
      padding: 0;
      background: var(--normal-color);
      margin: 10px 0;
    }
    .theme:deep p{
      order: -1;
      margin-right: auto;
      font-size: 13px;
      font-weight: 600;
    }
    a{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      transition: 0.2s;
      font-size: 13px;
      font-weight: 600;
      user-select: none;
      &:hover{
        color: var(--font-color-light);
        background: var(--main-color);
      }
    }
  }
}
</style>