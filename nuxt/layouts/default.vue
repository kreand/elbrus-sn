<template>
  <a-row>
    <a-col>
      <header class="header" >
        <Navbar />
      </header>

      <div class="container">
        <main class="main">
          <Nuxt />
        </main>
      </div>

<!--      <Footer />-->
    </a-col>
  </a-row>
</template>
<script>
import Navbar from '~/components/main/Navbar'
import Footer from '~/components/main/Footer'
export default {
  components: {Footer, Navbar},
}
</script>
