<template>
  <div>
    <li :key="props.id">
      <a-badge
        :status="props.type"
        :text="props.content"
        @click="clickEvent"
      />
    </li>
  </div>

</template>

<script>
export default {
  name: 'Event',
  props: {
    event: Array
  },
  methods: {
    clickEvent() {
      this.$emit('showEvent', props.id)
    },
    getDay(value) {
      return value.date()
    },
    getMonth (value) {
      return value.month()
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
