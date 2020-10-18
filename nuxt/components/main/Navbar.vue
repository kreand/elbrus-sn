<template>
  <div class="wrapper">
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col-md-2">
          <Logo />
        </div>
        <div class="col-md-8">
          <MainMenu />
        </div>
        <div class="col-md-2">
          <Button title="Личный кабинет" type="danger" />
        </div>
      </div>
    </div>
  </div>

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
.wrapper {
  width: 100%;
  height: 80px;
  background-color: #4520ab;
}

</style>
