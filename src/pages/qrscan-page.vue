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

    <q-btn to="/your/route" flat label="Scan" class="scanTap" />
    <q-btn to="/some/other/route" flat label="Receive" class="receiveTap" />
    <p class="footerButton"></p>
    <q-btn to="" flat label="Save" class="saveButton" icon="save" />
    <q-btn to="" flat label="Share" class="shareButton" icon="share" />
  </q-layout>

</template>

<script></script>
