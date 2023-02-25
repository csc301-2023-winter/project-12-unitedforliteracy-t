<script lang="ts" setup>
const props = defineProps<{
  name: string
  text: string
}>()
</script>

<template>
  <div class="rounded-tl-card2">
    <div class="left-section">
      <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="" class="h-16 w-16" />
    </div>
    <div class="right-section">
      <div class="text-2xl font-bold mb-1">{{ props.name }}</div>
      <div>
          {{ props.text}}
      </div>
    </div>
  </div>
</template>

<style scoped>
.rounded-tl-card2 {
  display: flex;
  flex-direction: row;
  color: #00565a;
  margin: 1.5em;
  margin-bottom: 0.8rem;
  padding: 1em;
  background-color: #fff;
  border-radius: 25px 0 0 0;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  max-height: 350px;
  width: 100%;
  max-width: 1200px;
  overflow-y: hidden;
}
.left-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0.7;
  padding-right: 1rem;
}

.right-section {
  display: flex;
  flex-direction: column;
  flex: 6;
}

@media screen and (max-width: 768px) {
  img{
    width: 50px;
    height: 50px;
  }  
}
</style>