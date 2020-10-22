<template>
  <a-row type="flex" justify="center">
    <ul class="menu">
      <li class="menu__item">
        <nuxt-link class="menu__item-link" active-class="menu__item-link-active" exact to="/">Главная</nuxt-link>
      </li>
      <li class="menu__item">
        <nuxt-link class="menu__item-link" active-class="menu__item-link-active" to="/events">Мероприятия</nuxt-link>
      </li>
    </ul>
  </a-row>

</template>

<script>
export default {
  name: 'MainMenu',
}
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  list-style: none;
  margin: 0;
  &__item {
    &-link {
      color: #3a8eed;
      text-decoration: none;
      font-size: 16px;
      font-weight: 400;
      padding: 0 20px;
      &:hover {
        color: #29edff;
      }
      &-active {
        color: #29edff;
      }
    }
  }
}
</style>
