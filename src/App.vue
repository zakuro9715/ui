<template>
  <div id="app">
    <VueButtonsLine horizontal stretch>
      <VueButton class="primary" label="button" />
      <VueButton class="info" label="button" />
      <VueButton class="danger" label="button" />
    </VueButtonsLine>
    <VueButtonsLine vertical>
      <VueButton class="round" label="button" />
      <VueButton label="button" />
      <VueButton class="round" label="button" />
    </VueButtonsLine>
    <VueGroup v-model="choice">
      <VueGroupButton class="round" value="A" label="A" />
      <VueGroupButton value="B" label="B" />
    </VueGroup>
    <VueButtonsLine vertical stretch style="width: 400px; margin: auto;">
      <VueButton class="round" label="button" />
      <VueButton label="button" />
      <VueButton class="round" label="button" />
    </VueButtonsLine>
  </div>
</template>

<script>
export default {
  data: () => ({
    choice: null,
  }),
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
