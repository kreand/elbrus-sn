<template>
  <li>
    <a-badge
      :status="event.type"
      :text="event.content"
      @click="clickEvent"
    />
  </li>

</template>

<script>
export default {
  name: 'Event',
  props: {
    event: Object
  },
  methods: {
    clickEvent() {
      this.$emit('showEvent', this.event)
    },
    getDay(value) {
      return value.date()
    },
    getMonth (value) {
      return value.month()
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
