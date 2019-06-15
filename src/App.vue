<template>
  <div id="app">
    <div class="container">
      <h1>z@kuro UI Framework</h1>
      <VueChoiceGroup v-model="choice">
        <VueChoiceButton />
        <VueChoiceButton id="first-choice"/>
        <VueChoiceButton />
      </VueChoiceGroup>
      <VueTabs :tab-id.sync="tabId">
        <VueTab
          v-for="tab in tabs"
          :key="tab.id"
          :id="tab.id"
          :label="tab.title"
        >
          <VueConfigure :inverse="tab.inverse" :darkMode="tab.darkMode">
            <VueCard title="Buttons">
              <VueButtonsLine horizontal stretch>
                <VueButton label="default" />
                <VueButton color="primary" label="primary" />
                <VueButton color="accent" label="accent" />
                <VueButton color="danger" label="danger" />
                <VueButton color="warning" label="warning" />
                <VueButton color="success" label="success" />
                <VueButton color="info" label="info" />
              </VueButtonsLine>
              <VueButtonsLine horizontal stretch>
                <VueButton flat label="default" />
                <VueButton color="primary" flat label="primary" />
                <VueButton color="accent" flat label="accent" />
                <VueButton color="danger" flat label="danger" />
                <VueButton color="warning" flat label="warning" />
                <VueButton color="success" flat label="success" />
                <VueButton color="info" flat label="info" />
              </VueButtonsLine>
              <VueCard title="Buttons">
                <VueButtonsLine horizontal stretch>
                  <VueButton label="default" />
                  <VueButton color="primary" label="primary" />
                  <VueButton color="accent" label="accent" />
                  <VueButton color="danger" label="danger" />
                  <VueButton color="warning" label="warning" />
                  <VueButton color="success" label="success" />
                  <VueButton color="info" label="info" />
                </VueButtonsLine>
                <VueButtonsLine horizontal stretch>
                  <VueButton flat label="default" />
                  <VueButton color="primary" flat label="primary" />
                  <VueButton color="accent" flat label="accent" />
                  <VueButton color="danger" flat label="danger" />
                  <VueButton color="warning" flat label="warning" />
                  <VueButton color="success" flat label="success" />
                  <VueButton color="info" flat label="info" />
                </VueButtonsLine>
              </VueCard>
              <VueButtonsLine
                vertical
                stretch
                style="width: 400px; margin: auto;"
              >
                <VueButton round color="primary" label="button" />
                <VueButtonsLine horizontal stretch>
                  <VueButton round label="button" />
                  <VueButton round color="danger" label="button" />
                </VueButtonsLine>
              </VueButtonsLine>
            </VueCard>

            <VueCard title="Drag and Drop">
              <VueFileArea @change="files = $event.files" />
              <span v-for="f in files" :key="f.name">{{ f.name }}</span>
            </VueCard>
          </VueConfigure>
        </VueTab>
      </VueTabs>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    choice: 'first-choice',
    files: [],
    tabId: 'tab-normal',
    tabs: [
      { id: 'tab-normal', title: 'normal', inverse: false, darkMode: false },
      { id: 'tab-inverse', title: 'inverse', inverse: true, darkMode: false },
      { id: 'tab-dark', title: 'dark', inverse: false, darkMode: true },
    ],
  }),
}
</script>

<style scoped>
.container {
  max-width: 640px;
  margin: 32px auto;
  text-align: center;
}
</style>
