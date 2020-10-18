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
    :title="event.content"
    :visible="visible"
    :confirm-loading="confirmLoading"
    :ok-button-props="{ style: {display: 'none'} }"
    cancel-text="Закрыть"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <p>{{ event.content }}</p>
  </a-modal>
  <CreateEvent
    @createEvent="showDate"
  />

</div>
</template>

<script>

import Event from '~/components/main/Calendar/Event'
import Day from '@/components/main/Calendar/Day'
import CreateEvent from '@/components/main/Calendar/CreateEvent'

export default {
  name: 'events',
  components: {CreateEvent, Day, Event},
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
        "timeSelect": "Select time",
        "dateSelect": "Select date",
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
        "placeholder": "Select time"
      },
      "dateFormat": "YYYY-MM-DD",
      "dateTimeFormat": "YYYY-MM-DD HH:mm:ss",
      "weekFormat": "YYYY-wo",
      "monthFormat": "YYYY-MM"
    },
    events: [
      {
        id: '3',
        year: 2020,
        month: 9,
        day: 15,
        type: 'warning',
        content: 'Первое событие'
      },
      {
        id: '4',
        year: 2020,
        month: 9,
        day: 10,
        type: 'warning',
        content: 'Второе событие.'
      },
      {
        id: '5',
        year: 2020,
        month: 9,
        day: 13,
        type: 'warning',
        content: 'Третье событие.'
      },
    ],
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
    event: {}
  }),
  methods: {
    showDate(data) {
      console.log(data)
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
}
</script>

<style lang="scss" scoped>
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
