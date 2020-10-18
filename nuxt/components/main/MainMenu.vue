<template>
  <ul class="main-menu d-flex">
    <li class="menu-item">
      <nuxt-link exact to="/" class="menu-item__link">Главная</nuxt-link>
    </li>
    <li class="menu-item">
      <nuxt-link to="/about" class="menu-item__link">О школе</nuxt-link>
    </li>
    <li class="menu-item">
      <nuxt-link to="#" class="menu-item__link">Программа</nuxt-link>
    </li>
    <li class="menu-item">
      <nuxt-link to="/events" class="menu-item__link">Мероприятия</nuxt-link>
    </li>
    <li class="menu-item">
      <nuxt-link to="/faq" class="menu-item__link">FAQ</nuxt-link>
    </li>
    <li class="menu-item">
      <nuxt-link to="/contacts" class="menu-item__link">Контакты</nuxt-link>
    </li>
    <li class="menu-item">

    </li>

  </ul>
<!--  <a-menu mode="horizontal">-->
<!--    <a-menu-item><nuxt-link to="/">Главная</nuxt-link></a-menu-item>-->
<!--    <a-menu-item><nuxt-link to="/about">О школе</nuxt-link></a-menu-item>-->
<!--    <a-sub-menu>-->
<!--        <span slot="title" class="submenu-title-wrapper"-->
<!--        >Программа</span-->
<!--        >-->
<!--      <a-menu-item key="setting:1">-->
<!--        <nuxt-link to="/program">Очный буткэмп</nuxt-link>-->
<!--      </a-menu-item>-->
<!--      <a-menu-item key="setting:2">-->
<!--        <nuxt-link to="/program/online">Онлайн буткэмп</nuxt-link>-->
<!--      </a-menu-item>-->
<!--    </a-sub-menu>-->
<!--    <a-menu-item><nuxt-link to="/events">Мероприятия</nuxt-link></a-menu-item>-->
<!--    <a-menu-item><nuxt-link to="/faq">FAQ</nuxt-link></a-menu-item>-->
<!--    <a-menu-item><nuxt-link to="/contacts">Контакты</nuxt-link></a-menu-item>-->
<!--  </a-menu>-->
</template>

<script>
export default {
  name: 'MainMenu',
}
</script>

<style lang="scss" scoped>
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
