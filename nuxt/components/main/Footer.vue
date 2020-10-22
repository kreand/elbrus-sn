<template>
  <footer>
    <a-row class="footer" type="flex" align="middle" justify="center">
      <a class="link" href="https://github.com/NickBGor/elbrus-sn" target="_blank">GitHub</a>
    </a-row>
  </footer>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style lang="scss" scoped>
.footer {
  height: 100px;
  background-color: #4520ab;
}

.link {
  text-decoration: none;
  color: #29edff;
  &:hover {
    color: #29edff;
  }
}
</style>
