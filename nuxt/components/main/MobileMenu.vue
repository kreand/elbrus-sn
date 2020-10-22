<template>
  <nav class="mob-menu">
    <div class="burger">
      <div
        v-if="!isActive"
        class="burger__btn"
        @click="onClick"
      >
       <img class="burger__btn-img" src="https://www.flaticon.com/svg/static/icons/svg/1250/1250975.svg" alt="open">
      </div>
      <div
        v-if="isActive"
        class="burger__btn"
        @click="onClick"
      >
        <img class="burger__btn-img" src="https://www.flaticon.com/svg/static/icons/svg/32/32554.svg" alt="close">
      </div>
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
    }
  }
}
</script>

<style lang="scss">
.burger {
  &__btn {
    cursor: pointer;
    &-img {
      width: 40px;
      height: 40px;
    }
  }
}

</style>
