<template>
  <!-- <q-page class="flex flex-center">
      <img
        alt="Quasar logo"
        src="~assets/quasar-logo-vertical.svg"
        style="width: 200px; height: 200px"
      >
    </q-page> -->
  <div class="colorPage">
    <div class="q-pa-md" style="max-width: 400px">
      <p class="logInText">Log In</p>
      <q-card class="signinCard" style="padding: 30px; margin-top: 20px;">

        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input v-model="user" label="Email" :dense="dense" lazy-rules
            :rules="[val => val && val.length > 0 || 'Please type your Email']" />
          <q-input v-model="password" label="Password" :dense="dense" lazy-rules :rules="[
            val => val !== null && val !== '' || 'Please type your password']" />
          <div class="my-button-container">
            <q-btn class="signinButton" label="SIGN IN"  />
          </div>
          <div class="q-pa-md" style="text-align: center;">

            <hr class="lineSectionSignIn">
            <p class="orText">OR</p>
            <hr class="lineSectionSignIn2">

          </div>

          <q-btn class="signinGoogleButton" label="SIGN IN WITH GOOGLE"  />

        </q-form>

      </q-card>
    </div>
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
