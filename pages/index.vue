<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

  definePageMeta({
  showBack: false,
  home: true
  })

interface User {
  userId: string
  contactId: string
}

// using hard-coded user values for now instead of fetching from database
// in salesforce: 
// userId = contact.id, progpar__c.participant_contact__c
// contactId here is the ownerId for testimonial
export default defineComponent({
  name: 'LandingPage',
  setup() {
    const router = useRouter()

    const user1: User = { // Xing Ling
      userId: '003Au00000AOCYgIAP',
      contactId: '005Au000003MwDJIA0'
    }
    const user2: User = { 
      // userId: '005Au000003MwLNIA0', // Corinne Lee Slew
      // contactId: '003Au00000AXfg9IAD'
      userId: '003Au000005D9H7IAK', // test volunteer
      contactId: '005Au0000028aTNIAY'
    }
    const user3: User = {
      userId: '003Au00000AZDxVIAX', // Chen Heng-Kuan
      contactId: '005Au000003MwEvIAK'
    }

// will send userId and contactId to the homepage
    function loginAsUser(user: User) {
      window.localStorage.setItem("userId", user.userId)
      window.localStorage.setItem("contactId", user.contactId)
    }

    return {
      user1,
      user2,
      user3,
      loginAsUser
    }
  }
})
</script>

<template>
  <div class="landing-page flex flex-col flex-nowrap items-center">
    <div class="flex justify-center mb-20"><img src="../assets/logo-white-bgd.png"></div>
    <h1>Please select a user to log in as:</h1>

    <div class="user-options">
      <NuxtLink to="/home">
        <div class="user-option" @click="loginAsUser(user1)">
          <h2>Xing Ling</h2>
          <p>UserID: {{ user1.userId }}</p>
          <p>ContactID: {{ user1.contactId }}</p>
        </div>
      </NuxtLink>
      <NuxtLink to="/home">
        <div class="user-option ml-2 mr-2" @click="loginAsUser(user2)">
          <h2>Test Volunteer</h2>
          <p>UserID: {{ user2.userId }}</p>
          <p>ContactID: {{ user2.contactId }}</p>
        </div>
      </NuxtLink>
      <NuxtLink to="/home">
        <div class="user-option" @click="loginAsUser(user3)">
          <h2>Heng-Kuan Chen</h2>
          <p>UserID: {{ user3.userId }}</p>
          <p>ContactID: {{ user3.contactId }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.landing-page {
  height: 100vh;
  width: 100%;
  background-color: white;
  z-index: 10;
  position: absolute;
}

.user-options {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 50px;
}

.user-option {
  background-color: var(--gray);
  color: white;
  padding: 20px;
  border-radius: 5px;
  cursor: pointer;
}

.user-option:hover {
  background-color: var(--dark-green);
  color: white;
}

.user-option h2 {
  margin-bottom: 5px;
}

.user-option p {
  margin: 0;
  font-size: 14px;
}
</style>
