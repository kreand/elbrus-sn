<template>
<div class="container ">
  <h1>Календарь мероприятий</h1>
  <a-calendar :locale="locale">
    <ul slot="dateCellRender" slot-scope="value" class="events">
      <li v-for="item in getListData(value)" :key="item.id">
        <a-badge
          :status="item.type"
          :text="item.content"
          @click="selectEvent(value)"
        />
      </li>
    </ul>
<!--    <Day :events="events"/>-->
  </a-calendar>
</div>
</template>

<script>

import Event from '~/components/main/Calendar/Event'
import Day from '@/components/main/Calendar/Day'
export default {
  name: 'events',
  components: {Day, Event},
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
    ]
  }),
  methods: {
    renderEvent(value, data) {
      const keys = Object.keys(data)
      keys.forEach(key => {
        if (this.getDay() === data[key].day && this.getMonth() === data[key].month && this.getYear === data[key].year) {
          return data[key]
        }
      })
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
    selectEvent (value) {
      console.log(this.getListData(value))
    },
    getDay(value) {
      return value.date()
    },
    getMonth (value) {
      return value.month()
    },
    getYear (value) {
      return value.year()
    }
  }
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
// ant-radio-group-outline ant-radio-group-default
.ant-fullcalendar-header:last-child {
  display: none;
}
</style>
