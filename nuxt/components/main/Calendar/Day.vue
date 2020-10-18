<template>
  <div>
    <ul slot="dateCellRender" slot-scope="value" class="events">
      <Event
        v-for="event in getListData(value)"
        :key="event.id"
        :event="event"
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
    getListData(value) {
      let listData;
      switch (value.date()) {
        case 8:
          listData = [
            {
              id: '1',
              type: 'warning',
              content: 'Туса енотов.',
              location: 'Санкт-Петербург'
            },
            { id: '2', type: 'success', content: 'Туса волков.' },
          ];
          break;
        case 10:
          listData = [
            { id: '3', type: 'warning', content: 'This is warning event.' },
            { id: '4', type: 'success', content: 'This is usual event.' },
            { id: '5', type: 'error', content: 'This is error event.' },
          ];
          break;
        case 15:
          listData = [
            { id: '6', type: 'warning', content: 'This is warning event' },
            { id: '7', type: 'success', content: 'This is very long usual event。。....' },
            { id: '8', type: 'error', content: 'This is error event 1.' },
            { id: '9', type: 'error', content: 'This is error event 2.' },
            { id: '10', type: 'error', content: 'This is error event 3.' },
            { id: '11', type: 'error', content: 'This is error event 4.' },
          ];
          break;
        default:
      }
      return listData || [];
    },
  },
  components: {Event},
  mounted() {
    console.log('!!!DAY COMPONENT!!!')
  }
}
</script>

<style scoped>

</style>
