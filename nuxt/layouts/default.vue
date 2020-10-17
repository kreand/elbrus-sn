<template>
  <a-row>
    <a-col :md="{ span: 16, offset: 4 }" :sm="{ span: 24 }">
      <header class="header" >
        <Navbar />
      </header>

      <main class="main">
        <Nuxt />
      </main>

      <Footer />

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
