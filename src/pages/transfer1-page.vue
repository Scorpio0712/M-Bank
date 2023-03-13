<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->
    <div>
      <q-btn
        flat
        class="backPage"
        icon="bi-arrow-left-circle"
        to="/home"
        style="color: #4acb57"
      />
      <p class="transferToText">Transfer to....</p>
      <p class="makeTranText">Make a Transaction</p>
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-btn flat class="accountBankIcon" to="/transfer2" />
      <p class="accountBankText">Account Banking</p>
      <q-btn flat class="qrIcon" to="/MyQR" />
      <p class="qrText">QR Payment</p>
    </div>

    <hr class="lineSectionTransfer1" />

    <div>
      <p class="suggestionText">Suggestion</p>
    </div>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  // name: 'LayoutName',

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
