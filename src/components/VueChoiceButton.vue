<template>
  <VueButton @click="click" :class="classes"/>
</template>

<script>
import uuid from 'uuid/v4'
export default {
  name: 'VueChoiceButton',
  inject: ['context'],
  props: {
    id: {
      type: String,
      default: () => uuid(),
    }
  },
  computed: {
    choices() {
      return this.context.choices
    },
    classes() {
      return {
        'vue-ui-choice': true,
        'vue-ui-choice-inactive': !this.choices.isActive(this.id),
        'vue-ui-choice-active': this.choices.isActive(this.id),
      }
    }
  },
  methods: {
    click() {
      this.choices.toggle(this.id)
    }
  },
  created() {
    this.choices.add(this.id)
  },
}
</script>

<style>

.vue-ui-choice-inactive {
  background-color: blue;
}

.vue-ui-choice-active {
  background-color: red !important;
}
</style>
