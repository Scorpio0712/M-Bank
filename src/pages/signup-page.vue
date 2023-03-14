<template>
  <div class="colorPage">
    <div class="colorBody">
      <div class="q-gutter q-pa" id="signUp">Sign up</div>
      <q-form @submit="onSubmit">
        <q-input
          class="nameBox"
          type="text"
          v-model="name"
          label="Name and last name"
          lazy-rules
          :rules="[
            (val) =>
              (val && val.length > 0) || 'Please type your name and last name',
          ]"
        />
        <q-input
          class="emailBox"
          type="email"
          v-model="email"
          label="Email"
          :rules="[
            (val) => (val && val.length > 0) || 'Please type your email',
          ]"
        />
        <q-input
          class="passBox"
          v-model="pass"
          type="password"
          label="Password"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Please type your password',
          ]"
        />
        <q-input
          class="conpassBox"
          type="password"
          v-model="confirmPass"
          label="Confirm Password"
          lazy-rules
          :rules="[
            (val) =>
              (val && val.length > 0) || 'Please type your confirm password',
          ]"
        />
        <div>
          <q-btn
            class="signupSubmit"
            to="/home"
            label="SIGN UP"
            type="submit"
          />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
// import db from "src/boot/firebase.js";

export default {
  setup () {
    const $q = useQuasar()
    const name = ref(null)
    const email = ref(null)
    const pass = ref(null)
    const confirmPass = ref(null)
    return {
      name,
      email,
      pass,
      confirmPass,

      onSubmit () {
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    }
  }
}
</script>
