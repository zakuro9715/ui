<template>
  <VueInverse class="vue-ui-card">
    <h2 v-if="title" class="vue-ui-card-title">{{ title }}</h2>
    <div class="vue-ui-card-content">
      <slot />
    </div>
    <div class="vue-ui-card-actions">
      <slot name="actions" />
    </div>
  </VueInverse>
</template>

<script>
export default {
  name: 'VueCard',
  props: {
    title: String,
  },
}
</script>

<style scoped>
.vue-ui-card {
  padding: var(--vue-ui-card-padding);
  margin: var(--vue-ui-card-margin);
  border-radius: var(--vue-ui-border-radius);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.vue-ui-card-actions {
  display: flex;
  flex-direction: column;
}
</style>
