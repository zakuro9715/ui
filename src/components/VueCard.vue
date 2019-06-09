<template>
  <div class="vue-ui-card card">
    <h2 v-if="title" class="vue-ui-card-title">{{ title }}</h2>
    <div class="vue-ui-card-content">
      <slot />
    </div>
    <div class="vue-ui-card-actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueCard',
  props: {
    title: String,
  }
}
</script>

<style scoped>
.vue-ui-dark-mode .vue-ui-card {
  background-color: var(--vue-ui-color-dark-neutral);
}

.vue-ui-card {
  box-sizing: border-box;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--vue-ui-color-light-neutral);
}

.vue-ui-card-actions {
  display: flex;
  flex-direction: column;
}
</style>
