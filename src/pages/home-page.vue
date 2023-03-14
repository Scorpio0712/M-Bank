<template>
  <q-layout view="hHh Lpr fFf" class="colorPageHome">
    <p class="homeSectionTop"></p>
    <p class="userPic"></p>
    <p class="userBalance">฿ 999,999</p>
    <p class="userAccount">Account: 123-4-56789-0</p>
    <q-btn flat round dense icon="bi-gear" label="Setting" class="settingApp" />
    <p class="newsTopic">News</p>
    <p class="newsSection"></p>
    <p class="lineSectionHome"></p>
    <p class="historyTopic">History</p>
    <div>
      <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated control-color="white"
        navigation padding arrows class="historyCard text-white shadow-1 rounded-borders">
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="style" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <p class="homeSectionFooter"></p>
    <q-btn flat round dense icon="bi-house" label="Home" class="homeButton" to="home" />
    <q-btn flat round dense icon="bi-arrow-left-right" label="Transfer" class="transferButton" to="transfer1"/>
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
      },
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>
