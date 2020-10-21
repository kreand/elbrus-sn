<template>
  <a-row>
    <header class="header" >
      <Navbar />
    </header>
    <main class="main">
      <Nuxt />
    </main>
    <Footer />
  </a-row>
</template>
<script>
import Navbar from '~/components/main/Navbar'
import Footer from '@/components/main/Footer'
export default {
  components: {Footer, Navbar }
}
</script>
