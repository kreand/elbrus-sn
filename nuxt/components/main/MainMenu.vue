<template>
  <a-menu mode="horizontal">
    <a-menu-item><nuxt-link to="/">Главная</nuxt-link></a-menu-item>
    <a-menu-item><nuxt-link to="/about">О школе</nuxt-link></a-menu-item>
    <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
        >Программа</span
        >
      <a-menu-item key="setting:1">
        <nuxt-link to="/program">Очный буткэмп</nuxt-link>
      </a-menu-item>
      <a-menu-item key="setting:2">
        <nuxt-link to="/program/online">Онлайн буткэмп</nuxt-link>
      </a-menu-item>
    </a-sub-menu>
    <a-menu-item><nuxt-link to="/events">Мероприятия</nuxt-link></a-menu-item>
    <a-menu-item><nuxt-link to="/faq">FAQ</nuxt-link></a-menu-item>
    <a-menu-item><nuxt-link to="/contacts">Контакты</nuxt-link></a-menu-item>
  </a-menu>
</template>

<script>
export default {
  name: 'MainMenu',
}
</script>

<style scoped>

</style>
