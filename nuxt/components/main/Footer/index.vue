<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
<!--        <div class="col-md-5 d-flex justify-content-center flex-column">-->
<!--          <Socials class="mt-2" />-->
<!--          <Messengers class="mt-3" />-->
<!--        </div>-->
      </div>
    </div>
  </footer>
</template>

<script>
import Socials from '@/components/main/Footer/Socials'
import Messengers from '@/components/main/Footer/Messengers'
export default {
  name: 'Footer',
  components: {Messengers, Socials},
}
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 200px;
  background-color: #4520ab;
}

</style>
