<template>
  <a-row>
    <a-col :sm="{offset: 2, span: 20}">
      <h1 class="text-center">Календарь мероприятий</h1>

      <a-calendar>
        <ul slot="dateCellRender" slot-scope="value" class="events">
          <Event
            v-for="event in getListData(value)"
            :key="event.id"
            :event="event"
            @showEvent="showModal"
          />
        </ul>
      </a-calendar>

      <a-modal
        :title="event.title"
        :visible="visible"
        :confirm-loading="confirmLoading"
        :ok-button-props="{ style: {display: 'none'} }"
        cancel-text="Закрыть"
        @ok="handleOk"
        @cancel="handleCancel"
      >
        <div class="h5">Формат: <span class="text-violet h5">{{ event.format }}</span></div>
        <div class="h5">Город: <span class="text-violet h5">{{ event.city }}</span></div>
        <div class="h5">Описание</div>
        <p>{{ event.body }}</p>
        <div class="h5">Дата и время: {{event.day}}.{{event.month + 1}}.{{event.year}} в {{event.time}}</div>

      </a-modal>
      <CreateEvent v-if="role === 'Ментор'" />
    </a-col>
  </a-row>
</template>

<script>

import Event from '~/components/main/Calendar/Event'
import CreateEvent from '@/components/main/Calendar/CreateEvent'

export default {
  name: 'events',
  head: {
    title: 'Календарь мероприятий | Elbrus Bootcamp'
  },
  components: {CreateEvent, Event},
  data: () => ({
    events: [],
    visible: false,
    confirmLoading: false,
    event: {},
    role: ''
  }),
  methods: {
    getListData(value) {

      const listData = this.events.filter(event => (
        event.day === value.date() &&
        event.month === value.month()
        && event.year === value.year()
      ))

      return listData || [];
    },
    showModal(data) {
      this.event = data
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
      this.visible = false
    }
  },
  async mounted() {
    this.role = this.$route.query.role
    await this.$store.dispatch('events/getEvents')
    this.events = this.$store.getters['events/events']
  },
}
</script>

<style lang="scss">
.events {
  list-style: none;
  margin: 0;
  padding: 0;
}

.events .ant-badge-status {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
  font-size: 12px;
}

.notes-month {
  text-align: center;
  font-size: 28px;
}

.notes-month section {
  font-size: 28px;
}

.ant-radio-button-wrapper {
  display: none;
}
</style>
