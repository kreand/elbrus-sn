<template>
  <a-button :type="type">
    {{title}}
  </a-button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: {
      type: String,
    },
    type: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<style scoped>

</style>
