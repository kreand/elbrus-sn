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
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <a-form-item label="Название">
        <a-input
          v-model="event.title"
        />
      </a-form-item>
      <a-form-item label="Формат">
        <a-radio-group
          v-model="event.format"
          v-decorator="['radio-group']"
        >
          <a-radio value="online" checked>
            Онлайн
          </a-radio>
          <a-radio value="offline">
            Оффлайн
          </a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item
        v-if="event.format === 'offline'"
        label="Город"
      >
        <a-radio-group v-decorator="['radio-group']">
          <a-radio value="msc" checked>
            Москва
          </a-radio>
          <a-radio value="spb">
            Санкт-Петербург
          </a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="Дата и время">
        <a-date-picker
          v-model="event.date"
          v-decorator="['date-time-picker', config]"
          show-time
          format="YYYY-MM-DD HH:mm"
        />
      </a-form-item>
      <a-form-item label="Описание">
        <a-textarea
          v-model="event.body"
          placeholder="Описание мероприятия"
          :auto-size="{ minRows: 3, maxRows: 15 }"
        />
      </a-form-item>






    </a-modal>

  </div>
</template>

<script>
export default {
  name: "CreateEvent",
  data() {
    return {
      ModalText: 'Content of the modal',
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
      this.ModalText = 'The modal will be closed after two seconds';
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel(e) {
      console.log('Clicked cancel button');
      this.visible = false;
    },
    onSubmit() {
      console.log('SUBMIT')
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
