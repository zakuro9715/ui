<template>
  <VueDarkMode :value="darkMode">
    <VueInverse :value="inverse">
      <slot />
    </VueInverse>
  </VueDarkMode>
</template>

<script>
export default {
  name: 'VueConfigure',
  props: {
    darkMode: {
      type: [Boolean, String],
      default: false,
    },
    inverse: {
      type: [Boolean, String],
      default: false,
    },
  },
}
</script>
