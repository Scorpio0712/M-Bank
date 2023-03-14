<template>
  <q-layout view="hHh Lpr fFf">
    <p class="backgroundInformation"></p>
    <p class="backgroundAmount"></p>
    <q-btn
        flat
        class="backPage"
        icon="bi-arrow-left-circle"
        to="/transfer2"
        style="background;: #4acb57"
      />
    <p class="checkInformationText">Check Information</p>
    <p class="sendPicCheck"></p>
    <p class="sendNameCheck">Name</p>
    <p class="sendAccountCheck">123-4-56789-0</p>
    <hr class="lineSectionCheck1">
    <p class="arrowBackCheck"></p>
    <hr class="lineSectionCheck2">
    <p class="receivePicCheck"></p>
    <p class="receiveNameCheck">Name</p>
    <p class="receiveBankCheck">KBank</p>
    <p class="receiveAccountCheck">xxx-x-xxxxxx-x</p>
    <i class="bi bi-arrow-down arrowCheck"></i>
    <p class="amountTextCheck">Amount:</p>
    <p class="amountPriceCheck">฿ 0.00</p>
    <p class="feeTextCheck">Fee:</p>
    <p class="feePriceCheck">฿ 0.00</p>
    <hr class="lineSectionCheck3">
    <p class="favoriteTextCheck">Favorite name:</p>
    <p class="memoTextCheck">Memo</p>
    <q-input outlined v-model="text" :dense="dense" class="memoInputCheck"/>
    <q-btn to="transaction" flat class="confirmButton" icon="bi-check" />
    <p class="confirmText">Confirm</p>
  </q-layout>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
