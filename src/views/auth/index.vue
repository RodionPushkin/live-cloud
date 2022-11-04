<template>
  <div class="container-default">
    <form @submit.prevent="" autocomplete="off">
      <p class="l">Авторизация</p>
      <textinput type="email" placeholder="почта" required="true" autocomplete="nope"/>
      <textinput type="password" placeholder="пароль" required="true" autocomplete="new-password"/>
      <button type="submit">войти</button>
    </form>
  </div>
</template>

<script>
import Textinput from "@/components/textinput.component";

export default {
  name: "index.js",
  components: {Textinput}
}
</script>

<style lang="scss" scoped>
.container-default{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  form{
    display: flex;
    flex-direction: column;
    gap: 12px;
    button{
      margin-top: 24px;
    }
  }
}
</style>