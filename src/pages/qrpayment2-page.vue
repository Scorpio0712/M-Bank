<template>
  <q-layout view="hHh Lpr fFf " class="QRPayment2BackGround">
    <!-- Be sure to play with the Layout demo on docs -->
    <p class="scanSectionTopic"></p>
    <p class="scanQRText">Scan/MyQR</p>
    <q-btn
      flat
      class="backPage"
      icon="bi-arrow-left-circle"
      to="/home"
      style="color: #4acb57"
    />
    <hr class="underLineReceive">
    <q-btn to="qr" flat label="Scan" class="scanTap" />
    <q-btn  flat label="Receive" class="receiveTap" />
    <p class="qrBackGround"></p>
    <p class="qrTopBackGround"></p>
    <p class="qrTopLogo"></p>
    <p class="qrCode"></p>
    <p class="scanQRToTransferText">Scan QR to transfer to account</p>
    <p class="scanNameText">Name: Name</p>
    <p class="scanAccountText">Account No.: xxx-x-xxxxx-x</p>
    <p class="footerButton"></p>
    <q-btn to="" flat label="Save" class="saveButton" icon="save" />
    <q-btn to="" flat label="Share" class="shareButton" icon="share" />
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
