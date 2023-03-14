<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

      <q-btn
        flat
        class="backPage"
        icon="bi-arrow-left-circle"
        to="/transfer1"
        style="color: #4acb57"
      />
      <p class="transferToText">Select Bank</p>
      <!-- <p class="makeTranText">Make a Transaction</p> -->

    <q-btn class="kBankButton" flat to="transfer2" />

    <q-btn class="bblButton" flat to="transfer2" />

    <q-btn class="ktbButton" flat to="transfer2" />

    <q-btn class="krungsriButton" flat to="transfer2" />

    <q-btn class="scbButton" flat to="transfer2" />

    <q-btn class="gsbButton" flat to="transfer2" />

  </q-layout>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
