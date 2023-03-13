<template>
  <!-- <q-page class="flex flex-center">
      <img
        alt="Quasar logo"
        src="~assets/quasar-logo-vertical.svg"
        style="width: 200px; height: 200px"
      >
    </q-page> -->

  <div class="q-pa-md" style="max-width: 400px">
    <q-card class="my-card" style="padding: 30px; margin-top: 20px;">
      <q-card-section>
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input filled v-model="name" label="Email" lazy-rules
            :rules="[val => val && val.length > 0 || 'Please type something']" />

          <q-input filled type="number" v-model="age" label="Password" lazy-rules :rules="[
            val => val !== null && val !== '' || 'Please type your age',
            val => val > 0 && val < 100 || 'Please type a real age'
          ]" />

          <div class="my-button-container">
            <q-btn class="my-button" label="SIGN IN" color="primary" />
          </div>

          <div class="q-pa-md" style="text-align: center;">
            <q-row>
              <q-col cols="5">------------------------------</q-col>
              <q-col cols="2">or</q-col>
              <q-col cols="5">------------------------------</q-col>
            </q-row>
          </div>

          <div class="my-button-container">
            <q-btn class="my-button" label="SIGN IN WITH GOOGLE" color="primary" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SignIn'
})
</script>

<style>
.my-button-container {
  text-align: center;
  width: 100%;
}

.my-button {
  width: 100%;
}
</style>
