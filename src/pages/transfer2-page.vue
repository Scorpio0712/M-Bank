<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->
    <div class="topInformation">
      <q-btn
        flat
        class="backPage"
        icon="bi-arrow-left-circle"
        to="/transfer"
        style="color: #4acb57"
      />
      <p class="transferTopicText">Transfer</p>
      <p class="byText">By:</p>
      <p class="byPic"></p>
      <p class="byName">Name</p>
      <p class="byAccount">123-4-56789-0</p>
      <p class="byBalance">999,999 Baht</p>
      <p class="gotoText">Go to:</p>
      <p class="gotoPic"></p>
      <p class="gotoBank">KBank</p>
      <p class="gotoAccountText">Account Number</p>
      <q-input
        class="gotoAccount"
        v-model="text"
        mask="###-#-#####-#"
        fill-mask="X"
        reverse-fill-mask
        input-class="text-right"
      />
      <!-- <hr class="lineSectionTransfer2"/> -->
      <p class="amountText">Amount:</p>
      <!-- <hr class="lineSectionTransfer2" /> -->
      <q-input
        class="amountBalance"
        v-model="price"
        mask="#.##"
        fill-mask="0"
        reverse-fill-mask
        input-class="text-right"
      />
      <p class="nextText">Next</p>
      <q-btn
        flat
        class="nextButton"
        icon="bi-arrow-right-circle"
        to="/transaction"
        style="color: #4acb57"
      />
    </div>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  // name: 'LayoutName',
  setup () {
    return {
      price: ref(null)
    }
  }
}
</script>
