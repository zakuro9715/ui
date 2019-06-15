<template>
  <component :is="component" :class="classes" @click="onClick">
    <slot :label=label :value="value">
      {{ label }}
    </slot>
  </component>
</template>
<script>
export default {
  name: 'VueButton',
  props: {
    tag: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: null,
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: 'default',
    },
    flat: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      const ret = {
        'vue-ui-button': true,
        'vue-ui-button-flat': this.flat,
        'vue-ui-button-round': this.round,
        [`vue-ui-button-${this.color}`]: true,
      }
      return ret
    },
    component() {
      if (this.tag) {
        return this.tag
      }

      if (this.$attrs.to) {
        return 'router-link'
      } else if (this.$attrs.href) {
        return 'a'
      }
      return 'button'
    },
  },
  methods: {
    onClick(e) {
      this.$emit('click', e)
    },
  },
}
</script>

<style scoped>
.vue-ui-button {
  display: inline-block;
  border: none;
  border-radius: var(--vue-ui-border-radius);
  height: var(--vue-ui-button-height);
  padding: var(--vue-ui-button-padding);
}

.vue-ui-button-default {
  background-color: var(--vue-ui-default-background);
}

.vue-ui-button-flat:hover, .vue-ui-button-default:hover {
  filter: brightness(95%);
}

.vue-ui-button-round {
  border-radius: calc(var(--vue-ui-button-height) / 2);
}

.vue-ui-button-primary:not(.vue-ui-button-flat):hover,
.vue-ui-button-accent:not(.vue-ui-button-flat):hover,
.vue-ui-button-danger:not(.vue-ui-button-flat):hover,
.vue-ui-button-warning:not(.vue-ui-button-flat):hover,
.vue-ui-button-success:not(.vue-ui-button-flat):hover,
.vue-ui-button-info:not(.vue-ui-button-flat):hover
{
  filter: opacity(60%);
}

.vue-ui-button-flat {
  background-color: var(--vue-ui-current-background);
}

.vue-ui-button-flat.vue-ui-button-primary {
  color: var(--vue-ui-color-primary);
}

.vue-ui-button-primary:not(.vue-ui-button-flat), .vue-ui-button-primary.vue-ui-button-flat:hover {
  color: var(--vue-ui-color-light);
  background-color: var(--vue-ui-color-primary);
}

.vue-ui-button-flat.vue-ui-button-accent {
  color: var(--vue-ui-color-accent);
}

.vue-ui-button-accent:not(.vue-ui-button-flat), .vue-ui-button-accent.vue-ui-button-flat:hover {
  color: var(--vue-ui-color-light);
  background-color: var(--vue-ui-color-accent);
}
.vue-ui-button-flat.vue-ui-button-accent {
  color: var(--vue-ui-color-accent);
}

.vue-ui-button-flat.vue-ui-button-danger {
  color: var(--vue-ui-color-danger);
}

.vue-ui-button-danger:not(.vue-ui-button-flat), .vue-ui-button-danger.vue-ui-button-flat:hover {
  color: var(--vue-ui-color-light);
  background-color: var(--vue-ui-color-danger);
}
.vue-ui-button-flat.vue-ui-button-danger {
  color: var(--vue-ui-color-danger);
}

.vue-ui-button-flat.vue-ui-button-warning {
  color: var(--vue-ui-color-warning);
}

.vue-ui-button-warning:not(.vue-ui-button-flat), .vue-ui-button-warning.vue-ui-button-flat:hover {
  color: var(--vue-ui-color-light);
  background-color: var(--vue-ui-color-warning);
}
.vue-ui-button-flat.vue-ui-button-warning {
  color: var(--vue-ui-color-warning);
}

.vue-ui-button-flat.vue-ui-button-success {
  color: var(--vue-ui-color-success);
}

.vue-ui-button-success:not(.vue-ui-button-flat), .vue-ui-button-success.vue-ui-button-flat:hover {
  color: var(--vue-ui-color-light);
  background-color: var(--vue-ui-color-success);
}
.vue-ui-button-flat.vue-ui-button-success {
  color: var(--vue-ui-color-success);
}

.vue-ui-button-flat.vue-ui-button-info {
  color: var(--vue-ui-color-info);
}

.vue-ui-button-info:not(.vue-ui-button-flat), .vue-ui-button-info.vue-ui-button-flat:hover {
  color: var(--vue-ui-color-light);
  background-color: var(--vue-ui-color-info);
}
.vue-ui-button-flat.vue-ui-button-info {
  color: var(--vue-ui-color-info);
}
</style>
