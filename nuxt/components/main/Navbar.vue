<template>
  <a-row class="navbar" type="flex" align="center" jusify="space-between">
    <a-col :xs="24" :sm="5">
      <Logo />
    </a-col>
    <a-col :xs="24" :sm="14">
      <MainMenu />
    </a-col>
    <a-col :xs="24" :sm="5" :md="{align: 'center'}">
      <Button title="Личный кабинет" type="danger" />
    </a-col>
  </a-row>
</template>

<script>
import Button from '~/components/elements/Button'
import MainMenu from '~/components/main/MainMenu'
import Logo from '~/components/main/Logo'
export default {
  name: 'Navbar',
  components: {Logo, MainMenu, Button},
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 80px;
  background-color: #4520ab;
}

</style>
