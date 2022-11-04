<template>
  <div class="container">
    <checkbox></checkbox>
    <fileinput></fileinput>
    <fileinput usedrag="true"></fileinput>
    <textinput placeholder="какой-то текст"></textinput>
  </div>
</template>

<script>

import Checkbox from "@/components/checkbox.component";
import Fileinput from "@/components/fileinput.component";
import Textinput from "@/components/textinput.component";

export default {
  name: "home",
  components: { Textinput, Fileinput, Checkbox},
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
