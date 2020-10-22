<template>
  <header class="header">
    <a-row>
      <a-col :span="16" :offset="4">
        <a-row type="flex" align="middle" justify="space-between">
          <a-col :span="2" :xs="16" :sm="2" >
            <Logo />
          </a-col>
          <a-col  :span="8" :xs="0" :lg="9">
            <MainMenu />
          </a-col>
          <a-col  :span="6" :xs="0" :lg="5">
            <a class="btn" href="http://localhost:3000">Личный кабинет</a>
          </a-col>
          <a-col :xs="2" :lg="0">
            <MobileMenu />
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </header>
</template>

<script>

import MainMenu from '~/components/main/MainMenu'
import Logo from '~/components/main/Logo'
import MobileMenu from '@/components/main/MobileMenu'
export default {
  name: 'Navbar',
  components: {MobileMenu, Logo, MainMenu},
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 80px;
  background-color: #4520ab;
}

.btn {
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  color: #ffbc5b;
  border: 2px solid #ffbc5b;
  border-radius: 5px;
  padding: 10px;
  &:hover {
    color: #bc7b26;
    border-color: #bc7b26;
  }
}
</style>
