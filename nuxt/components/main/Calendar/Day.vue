<template>
  <div>
    <ul slot="dateCellRender" slot-scope="value" class="events">
      <Event
        v-for="event of events"
        :key="event.id"
        @showEvent="showModal"
      />
    </ul>

    <a-modal
      title="Title"
      :visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <p>{{ ModalText }}</p>
    </a-modal>
  </div>
</template>

<script>
import Event from '~/components/main/Calendar/Event'
export default {
  name: "Day",
  data() {
    return {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
    }
  },
  methods: {
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      this.confirmLoading = true
      setTimeout(() => {
        this.visible = false
        this.confirmLoading = false
      }, 2000)
    },
    handleCancel(e) {
      console.log('Clicked cancel button')
      this.visible = false
    },
  },
  components: {Event},
  props: {
    events: Object
  }
}
</script>

<style scoped>

</style>
