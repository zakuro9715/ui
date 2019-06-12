<template>
  <div id="app">
    <div class="container">
      <h1>z@kuro UI Framework</h1>
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
                <VueButton class="primary" label="primary" />
                <VueButton class="accent" label="accent" />
                <VueButton class="danger" label="danger" />
                <VueButton class="warning" label="warning" />
                <VueButton class="success" label="success" />
                <VueButton class="info" label="info" />
              </VueButtonsLine>
              <VueButtonsLine horizontal stretch>
                <VueButton class="flat" label="default" />
                <VueButton class="primary flat" label="primary" />
                <VueButton class="accent flat" label="accent" />
                <VueButton class="danger flat" label="danger" />
                <VueButton class="warning flat" label="warning" />
                <VueButton class="success flat" label="success" />
                <VueButton class="info flat" label="info" />
              </VueButtonsLine>
              <VueCard>
                <VueButtonsLine horizontal stretch>
                  <VueButton label="default" />
                  <VueButton class="primary" label="primary" />
                  <VueButton class="accent" label="accent" />
                  <VueButton class="danger" label="danger" />
                  <VueButton class="warning" label="warning" />
                  <VueButton class="success" label="success" />
                  <VueButton class="info" label="info" />
                </VueButtonsLine>
                <VueButtonsLine horizontal stretch>
                  <VueButton class="flat" label="default" />
                  <VueButton class="primary flat" label="primary" />
                  <VueButton class="accent flat" label="accent" />
                  <VueButton class="danger flat" label="danger" />
                  <VueButton class="warning flat" label="warning" />
                  <VueButton class="success flat" label="success" />
                  <VueButton class="info flat" label="info" />
                </VueButtonsLine>
              </VueCard>
              <VueGroup v-model="choice">
                <VueGroupButton class="round" value="A" label="A" />
                <VueGroupButton value="B" label="B" />
              </VueGroup>
              <VueButtonsLine
                vertical
                stretch
                style="width: 400px; margin: auto;"
              >
                <VueButton class="round primary" label="button" />
                <VueButtonsLine horizontal stretch>
                  <VueButton class="round" label="button" />
                  <VueButton class="round danger" label="button" />
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
    choice: null,
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
