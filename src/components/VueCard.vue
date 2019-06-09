<template>
  <div class="vue-ui-card" ref="card">
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
  },
  methods: {
    modifyChildren() {
      this.$refs.card.querySelectorAll('.vue-ui-button').forEach((el) => {
        el.classList.add('vue-ui-card-button')
        if (this.$refs.card.classList.contains('inverse')) {
          el.classList.toggle('vue-ui-card-inverse-button')
        }
      }
    )}
  },
  mounted() {
    this.modifyChildren()
  },
  watch: {
    inverse(inverse) {
      this.modifyChildren()
    }
  }

}
</script>

<style scoped>
.vue-ui-dark-mode .vue-ui-card {
  background-color: var(--vue-ui-color-dark-neutral);
}

.vue-ui-dark-mode .vue-ui-card.inverse {
  background-color: var(--vue-ui-color-dark);
}

.vue-ui-card {
  padding: var(--vue-ui-card-padding);
  margin: var(--vue-ui-card-margin);
  border-radius: var(--vue-ui-border-radius);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--vue-ui-color-light-neutral);
}

.vue-ui-card.inverse {
  background-color: var(--vue-ui-color-light);
}

.vue-ui-card-actions {
  display: flex;
  flex-direction: column;
}
</style>
<style>

.vue-ui-card-button:not(.vue-ui-card-inverse-button):not(.flat):not(.primary):not(.accent):not(.danger):not(.warning) {
  background-color: var(--vue-ui-color-light);
}
.vue-ui-dark-mode .vue-ui-card-button.vue-ui-card-inverse-button:not(.flat):not(.primary):not(.accent):not(.danger):not(.warning) {
  background-color: var(--vue-ui-color-dark-neutral);
}
</style>
