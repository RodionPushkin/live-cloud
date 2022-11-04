<template>
  <headerComponent v-if="$store.getters.USER"/>
  <navigation v-if="$store.getters.USER"/>
  <mainComponent>
    <router-view/>
  </mainComponent>
  <footerComponent v-if="$store.getters.USER"/>
</template>

<script>
import headerComponent from "@/components/header.component";
import mainComponent from "@/components/main.component";
import footerComponent from "@/components/footer.component";
import Navigation from "@/components/navigation.component";

export default {
  components: {Navigation, headerComponent, mainComponent, footerComponent},
  data(){
    return{
    }
  },
  mounted() {
    if(!localStorage.getItem('theme')){
      localStorage.setItem('theme',false)
    }
    this.$store.dispatch('SET_THEME',localStorage.getItem('theme'))
  },
  methods:{
  }
}
</script>
<style lang="scss">
@font-face {
  font-family: 'Steppe';
  font-style: normal;
  font-weight: 600;
  src: url("assets/fonts/Steppe-SemiBold.ttf");
}
@font-face {
  font-family: 'Steppe';
  font-style: normal;
  font-weight: 500;
  src: url("assets/fonts/Steppe-Medium.ttf");
}
@font-face {
  font-family: 'Steppe';
  font-style: normal;
  font-weight: 400;
  src: url("assets/fonts/Steppe-Regular.ttf");
}
:root {
  --font-color: #1D2023;
  --font-color-light: #FFFFFF;
  --bg-color: #E6E6E6;
  --bg-color-light: #FFFFFF;
  --accent-color: #4F79F2;
  --main-color: #D2317F;
  --black-color: #101213;
  --active-color: #2ED47A;
  --inactive-color: #F7685B;
  --normal-color: #D1D1D1;
  --border-radius: 4px;
}
* {
  padding: 0;
  margin: 0;
  border: 0;
  scroll-behavior: smooth;
}

*, *:before, *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -moz-osx-font-smoothing: antialiased;
  -webkit-font-smoothing: grayscale;
}

:focus, :active {
  outline: none;
}

a:focus, a:active {
  outline: none;
}

nav, footer, header, aside {
  display: block;
}

html, body {
  height: 100%;
  width: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

input, button, textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

button, .button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a, a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1, h2, h3, h4, h5, h6, a, p, span {
  font-size: inherit;
  font-weight: inherit;
  color: inherit
}

body {
  min-height: 100vh;
  width: 100vw;
  font-family: 'Steppe';
  font-weight: 400;
  font-size: 16px;
  color: var(--font-color);
  overflow-y: overlay;
  overflow-x: hidden;
  background: var(--bg-color);
}

html {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#app {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#app .header {
  flex: 0 0 auto;
}

#app .main {
  flex: 1 0 auto;
}

#app .footer {
  flex: 0 0 auto;
}

@media (min-width: 768px) {
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 100px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.3);
    background-clip: content-box;
    border: 3px solid rgba(0, 0, 0, 0.0);
    border-radius: 100px;
  }
  ::-webkit-scrollbar-track-piece {
    background: rgba(0, 0, 0, 0.0);
  }
  ::-webkit-scrollbar-button {
    background: rgba(0, 0, 0, 0.0);
  }
  ::-webkit-scrollbar-corner {
    background: rgba(0, 0, 0, 0.0);
  }
}


input, select {
  min-width: 272px;
  min-height: 56px;
  font-size: 16px;
  padding: 0 16px;
  display: block;
  border-radius: var(--border-radius);
  background: var(--bg-color-light);
  color: var(--font-color);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
}

button, .button {
  min-width: 272px;
  min-height: 56px;
  font-size: 16px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: var(--border-radius);
  background: var(--main-color);
  color: var(--bg-color-light);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  font-weight: 600;
  transition: background 0.35s, color 0.2s;
  @media screen and (min-width: 768px) {
    &:hover {
      background: var(--bg-color-light);
      color: var(--font-color);
    }
  }
}
.dark{
  button, .button{
    color: var(--font-color);
  }
}
.container {
  width: 100%;
  padding: 88px 24px 0 234px; // ширина бокового меню 210px + 24px и высота хедера 64px + 24px
  position: relative;
  overflow: hidden;
}
.container-default{
  width: 100%;
  max-width: 1344px;
  margin: 0 auto;
  padding: 0 72px;
  position: relative;
  overflow: hidden;
}

.main {
  overflow: hidden;
  position: relative;
}

.shadow {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
}

.s {
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
}

.m {
  font-weight: 500;
  font-size: 26px;
  line-height: 30px;
  @media screen and (max-width: 768px) {
    font-size: 26px;
    line-height: 30px;
  }
}

.l {
  font-weight: 600;
  font-size: 26px;
  line-height: 30px;
  color: var(--black-color);
  @media screen and (max-width: 768px) {
    font-size: 26px;
    line-height: 30px;
  }
}
</style>
