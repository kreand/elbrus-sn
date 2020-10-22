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
            v-decorator="['title', { rules: [{ required: true, message: 'Укажите название' }] }]"
          />
        </a-form-item>
        <a-form-item label="Цвет маркера">
          <a-select
            v-decorator="[
          'color',
          { rules: [{ required: true, message: 'Выберите цвет маркера' }] },
        ]"
            placeholder="Выбрать цвет"
          >
            <a-select-option value="error">
              Красный
            </a-select-option>
            <a-select-option value="warning">
              Желтый
            </a-select-option>
            <a-select-option value="success">
              Зеленый
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          label="Формат"
        >
          <a-radio-group
            v-decorator="['format', { rules: [{ required: true, message: 'Выберите формат' }] }]"
          >
            <a-radio
              value="Онлайн"
            >
              Онлайн
            </a-radio>
            <a-radio
              value="Офлайн"
            >
              Офлайн
            </a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item
          label="Город"
        >
          <a-radio-group
            v-decorator="['city']"
          >
            <a-radio
              value="Москва"
            >
              Москва
            </a-radio>
            <a-radio
              value="Санкт-Петербург">
              Санкт-Петербург
            </a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="Дата и время">
          <a-date-picker
            v-decorator="['date', { rules: [{ required: true, message: 'Укажите дату и время' }] }]"
            show-time
            format="YYYY-MM-DD HH:mm"
          />
        </a-form-item>
        <a-form-item label="Описание">
          <a-textarea
            placeholder="Описание мероприятия"
            :auto-size="{ minRows: 3, maxRows: 15 }"
            v-decorator="['description', { rules: [{ required: true, message: 'Добавьте описание события' }] }]"
          />
        </a-form-item>
      </a-form>
    </a-modal>

  </div>
</template>

<script>

export default {
  name: 'CreateEvent',
  data() {
    return {
      form: this.$form.createForm(this, {name: 'events'}),
      visible: false,
      confirmLoading: false,
    }
  },
  methods: {
    showModal() {
      this.visible = true
    },
    async handleOk(e) {
      this.form.validateFields((err, values) => {
        try {
          if (!err) {

            const data = {
              title: values.title,
              type: values.color,
              format: values.format,
              city: values.city || '',
              year: values.date.year(),
              month: values.date.month(),
              day: values.date.date(),
              time: `${values.date.hour()} : ${values.date.minutes()}`,
              body: values.description,

            }
            this.$store.dispatch('events/setEvent', data)
            this.$store.commit('events/addEvent', data)
            this.handleCancel()
          }
        } catch (err) {
          throw err
        }
      })
    },
    handleCancel(e) {
      this.form.resetFields()
      this.visible = false
    },
  },
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

.ant-calendar-picker {
  width: 100%;
}
</style>
