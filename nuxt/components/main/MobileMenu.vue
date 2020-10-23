<template>
  <nav class="mob-menu">
    <div class="burger">
      <div
        v-if="!isActive"
        class="burger__btn"
        @click="onClick"
      >
       <img class="burger__btn-img" src="/menu.svg" alt="open">
      </div>
      <div
        v-if="isActive"
        class="burger__btn"
        @click="onClick"
      >
        <img class="burger__btn-img" src="/close.svg" alt="close">
      </div>
    </div>
    <div
      v-if="isActive"
      @scroll="onScroll"
      class="menu-wrapper">
      <ul class="mob-menu__list">
        <li class="mob-menu__item">
          <nuxt-link
            active-class="mob-menu__item-link-active"
            class="mob-menu__item-link"
            exact
            to="/"
          >
            Главная
          </nuxt-link>
        </li>
        <li class="mob-menu__item">
          <nuxt-link
            active-class="mob-menu__item-link-active"
            class="mob-menu__item-link"
            to="/events"
          >
            Мероприятия
          </nuxt-link>
        </li>
        <li class="mob-menu__item">
          <a class="mob-menu__item-link" href="http://localhost:3000">Личный кабинет</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MobileMenu',
  data: () => ({
    isActive: false
  }),
  methods: {
    onClick() {
      this.isActive = !this.isActive
    },
    onScroll() {
      if (this.isActive) this.isActive = !this.isActive
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  }
}
</script>
<style lang="scss" scoped>
.burger {
  &__btn {
    cursor: pointer;
    &-img {
      width: 40px;
      height: 40px;
    }
  }
}

.menu-wrapper {
  z-index: 2;
  padding: 20px;
  position: absolute;
  top: 0;
  right: 50px;
  width: 250px;
  min-height: 150px;
  border-radius: 4px;
  background: rgb(239, 239, 239);
  box-shadow: 5px 5px 20px #000;
}

.mob-menu__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.mob-menu__item {
  padding: 5px 0;
  &-link {
    text-decoration: none;
    color: #4520ab;
    &-active {
      color: #29edff;
    }
    &:hover {
      color: #29edff;
    }

  }
}

@media (max-width: 375px) {
  .menu-wrapper {
    padding: 20px;
    right: 30px;
    width: 220px;
    min-height: 120px;
  }
}
</style>
