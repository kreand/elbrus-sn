<template>
  <div class="messengers d-flex flex-column">
    <div>
      <a class="messenger-link" href="tel:+74957860581" target="_blank">+7 (495) 786-05-81</a>
    </div>
    <div class="mt-1">
      <a class="messenger-link" href="https://wa.me/74957860581" target="_blank">Чат в whatsapp</a> /
      <a class="messenger-link" href="https://t.me/elbrus_bootcamp" target="_blank">Чат в телеграм</a>
    </div>
    <div class="mt-1">
      <a class="messenger-link" href="mailto:join@elbrusboot.camp" target="_blank">join@elbrusboot.camp</a>
    </div>
  </div>
</template>

<script>
export default {
name: "Messengers"
}
</script>

<style lang="scss" scoped>
.messengers {
  font-weight: 400;
  color: #ffbc5b;
  text-transform: uppercase;
}
.messenger-link {
  color: #ffbc5b;
  text-decoration: none;
}

.messenger-link:hover {
  color: #FFBC63;
}


</style>
