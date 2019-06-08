<template>
  <div id="app">
    <div class="container">
      <h1>z@kuro UI Framework</h1>
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
        <VueButtonsLine horizontal stretch>
          <VueButton class="primary" label="button" />
          <VueButton class="info" label="button" />
          <VueButton class="danger" label="button" />
        </VueButtonsLine>
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
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    choice: null,
  }),
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
