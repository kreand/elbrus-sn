<template>
<div class="container ">
  <h1>Календарь мероприятий</h1>

  <a-calendar :locale="locale">
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
  <CreateEvent
    @createEvent="showDate"
  />

</div>
</template>

<script>

import Event from '~/components/main/Calendar/Event'
import CreateEvent from '@/components/main/Calendar/CreateEvent'

export default {
  name: 'events',
  components: {CreateEvent, Event},
  data: () => ({
    locale: {
      "lang": {
        "placeholder": "Select date",
        "rangePlaceholder": ["Start date", "End date"],
        "today": "Today",
        "now": "Now",
        "backToToday": "Back to today",
        "ok": "Ok",
        "clear": "Clear",
        "month": "Месяц",
        "year": "Год",
        "timeSelect": "Выбрать время",
        "dateSelect": "Выбрать дату",
        "monthSelect": "Choose a month",
        "yearSelect": "Choose a year",
        "decadeSelect": "Choose a decade",
        "yearFormat": "YYYY",
        "dateFormat": "M/D/YYYY",
        "dayFormat": "D",
        "dateTimeFormat": "M/D/YYYY HH:mm:ss",
        "monthFormat": "MMMM",
        "monthBeforeYear": true,
        "previousMonth": "Previous month (PageUp)",
        "nextMonth": "Next month (PageDown)",
        "previousYear": "Last year (Control + left)",
        "nextYear": "Next year (Control + right)",
        "previousDecade": "Last decade",
        "nextDecade": "Next decade",
        "previousCentury": "Last century",
        "nextCentury": "Next century"
      },
      "timePickerLocale": {
        "placeholder": "Выбрать время"
      },
      "dateFormat": "YYYY-MM-DD",
      "dateTimeFormat": "YYYY-MM-DD HH:mm:ss",
      "weekFormat": "YYYY-wo",
      "monthFormat": "YYYY-MM"
    },
    events: [],
    visible: false,
    confirmLoading: false,
    event: {}
  }),
  methods: {
    showDate(data) {
      console.log(data)
    },

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
    },
  },
  async mounted() {
    const events = await this.$axios.$get('http://localhost:7000/events')
    this.$store.commit('events/updateEvents', events)
    this.events = this.$store.getters['events/events']
  }
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

</style>
