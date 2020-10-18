<template>
  <div class="create-event">
    <a-button
      class="create-event__button"
      type="danger"
      shape="circle"
      icon="plus"
      size="large"
      @click="showModal"
    />

    <a-modal
      title="Создать новое событие"
      cancel-text="Отмена"
      ok-text="Создать"
      :visible="visible"
      :confirm-loading="confirmLoading"
      @cancel="handleCancel"
      @ok="handleOk"
    >
      <a-form :form="form">
        <a-form-item label="Название">
          <a-input
            v-model="event.title"
            v-decorator="['title', { rules: [{ required: true, message: 'Укажите название' }], trigger: 'input', initialValue: '' }]"
          />
        </a-form-item>
        <a-form-item label="Формат">
          <a-radio-group
            v-decorator="['format', { rules: [{ required: true, message: 'Выберите формат события' }], trigger: 'change', initialValue: ''}]"
          >
            <a-radio
              v-model="event.format"
              value="Онлайн"
              checked
            >
              Онлайн
            </a-radio>
            <a-radio
              v-model="event.format"
              value="Офлайн"
            >
              Оффлайн
            </a-radio>
          </a-radio-group>
        </a-form-item>
<!--        <a-form-item-->
<!--          v-if="event.format === 'Офлайн'"-->
<!--          label="Город"-->
<!--        >-->
<!--          <a-radio-group-->
<!--            v-model="event.format"-->
<!--            v-decorator="['city', { rules: [{ required: true, message: 'Выберите город' }] }]">-->
<!--            <a-radio-->
<!--              v-model="event.city"-->
<!--              value="Москва"-->
<!--            >-->
<!--              Москва-->
<!--            </a-radio>-->
<!--            <a-radio-->
<!--              v-model="event.city"-->
<!--              value="Санкт-Петербург">-->
<!--              Санкт-Петербург-->
<!--            </a-radio>-->
<!--          </a-radio-group>-->
<!--        </a-form-item>-->
<!--        <a-form-item label="Дата и время">-->
<!--          <a-date-picker-->
<!--            v-model="event.date"-->
<!--            v-decorator="['date-time-picker', config]"-->
<!--            show-time-->
<!--            format="YYYY-MM-DD HH:mm"-->
<!--          />-->
<!--        </a-form-item>-->
<!--        <a-form-item label="Описание">-->
<!--          <a-textarea-->
<!--            v-model="event.body"-->
<!--            placeholder="Описание мероприятия"-->
<!--            :auto-size="{ minRows: 3, maxRows: 15 }"-->
<!--          />-->
<!--        </a-form-item>-->
      </a-form>
    </a-modal>

  </div>
</template>

<script>
export default {
  name: "CreateEvent",
  data() {
    return {
      form: this.$form.createForm(this, { name: 'events' }),
      visible: false,
      confirmLoading: false,
      config: {
        rules: [{ type: 'object', required: true, message: 'Please select time!' }],
      },
      event: {
        title: '',
        format: '',
        city: '',
        date: '',
        body: ''
      }
    }
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    handleCancel(e) {
      console.log('Clicked cancel button');
      this.visible = false;
    },
    onSubmit() {
      console.log(this.event)
    }
  }
}
</script>

<style lang="scss" scoped>
.create-event {
  &__button {
    position: fixed;
    right: 50px;
    bottom: 200px;
  }

}
</style>
