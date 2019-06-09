<template>
  <div id="app" :class="{ 'vue-ui-dark-mode': darkMode }">
    <div class="container">
      <h1>z@kuro UI Framework</h1>
      <VueCard>
        <VueSwitch v-model="darkMode">DrakMode</VueSwitch>
      </VueCard>
      <VueCard title="Buttons">
        <VueButtonsLine horizontal>
          <VueButton class="primary" label="button" />
          <VueButton class="info" label="button" />
          <VueButton class="danger" label="button" />
        </VueButtonsLine>
        <VueButtonsLine vertical>
          <VueButton class="round" label="button" />
          <VueButton label="button" />
          <VueButton class="round" label="button" />
        </VueButtonsLine>
        <VueCard inverse>
          <VueButtonsLine horizontal stretch>
            <VueButton class="primary" label="button" />
            <VueButton class="info" label="button" />
            <VueButton class="danger" label="button" />
          </VueButtonsLine>
        </VueCard>
        <VueGroup v-model="choice">
          <VueGroupButton class="round" value="A" label="A" />
          <VueGroupButton value="B" label="B" />
        </VueGroup>
        <VueButtonsLine vertical stretch style="width: 400px; margin: auto;">
          <VueButton class="round primary" label="button" />
          <VueButtonsLine horizontal stretch>
            <VueButton class="round" label="button" />
            <VueButton class="round danger" label="button" />
          </VueButtonsLine>
        </VueButtonsLine>
      </VueCard>

      <VueCard title="Drag and Drop">
        <VueDroppableZone @drop="dropped = $event" v-slot="{ over }">
          <div v-if="over">Drop here!</div>
          <div v-else-if="dropped">{{ dropped }}</div>
          <div v-else>drop zone</div>
        </VueDroppableZone>
        {{ dropped }}
      </VueCard>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    choice: null,
    dropped: null,
    darkMode: localStorage.getItem('darkMode'),
  }),
  watch: {
    darkMode(v) {
      localStorage.setItem('darkMode', v ? v : '')
    },
  },
}
</script>

<style scoped>
.container {
  max-width: 640px;
  padding: 32px;
  margin: 0 auto;
  text-align: center;
}
</style>
