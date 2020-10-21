<template>
  <a-row type="flex" justify="center">
    <a-menu  class="menu"  mode="horizontal">
      <a-menu-item class="menu__item" key="home"> <a-icon type="home" />Главная</a-menu-item>
      <a-menu-item class="menu__item" key="calendar"> <a-icon type="calendar" />Календарь</a-menu-item>
    </a-menu>
  </a-row>


</template>

<script>
export default {
  name: 'MainMenu',
}
</script>

<style lang="scss" scoped>

.menu {
  color: #3a8eed;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  background: none;
  border: none;
  &__item {
    &:hover {
      color: #29edff;
    }
  }
}

.main-menu {
  list-style: none;
  margin: 0;
}

.menu-item {
  &__link {
    margin-right: 20px;
    font-size: 16px;
    font-weight: 400;
    color: #3a8eed;
    text-decoration: none;
    &-active {
      color: #29edff;
    }
  }
}

</style>
