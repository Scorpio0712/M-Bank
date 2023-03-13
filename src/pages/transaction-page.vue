<template>
  <q-layout view="hHh Lpr fFf" class="transactionBackground">
    <!-- Be sure to play with the Layout demo on docs -->
    <p class="transactionTopicText">Transaction Completed</p>
    <div>
      <p class="transactionDataBox"></p>
      <hr class="lineDataBox" />
      <p class="transactionTopicBox">Transaction Completed</p>
      <hr class="lineSectionBox" />
      <p class="sendPicBox"></p>
      <p class="sendNameBox">Name</p>
      <p class="sendAccountBox">123-4-56789-0</p>
      <p class="arrowBackBox"></p>
      <i class="bi bi-arrow-down arrowBox"></i>
      <p class="receivePicBox"></p>
      <p class="receiveNameBox">Name</p>
      <p class="receiveBankBox">KBank</p>
      <p class="receiveAccountBox">123-4-56789-0</p>
      <p class="transactionIDBox">Transaction ID:</p>
      <p class="transactionIDNumberBox">01326408851ETF02773</p>
      <hr class="lineTransactionIDBox" />
      <p class="amountBox">Amount:</p>
      <hr class="lineAmountBox" />
      <p class="feeBox">Fee:</p>
      <hr class="lineFeeBox" />
      <p class="remainBalance">Remaining Bal.:</p>
      <p class="backToHomeBackGround"></p>
      <q-btn flat class="backToHomeButton" icon="bi-house" to="/home" />
      <p class="backToHomeText">Back To Home</p>
    </div>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
// import { date } from 'quasar'

export default {
  // name: 'LayoutName',

  setup () {
    const leftDrawerOpen = ref(false)
    // const formattedString = date.formatDate(
    //   timeStamp,
    //   'YYYY-MM-DDTHH:mm:ss.SSSZ'
    // );

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
