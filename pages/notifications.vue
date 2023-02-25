<script lang="ts" setup>
definePageMeta({
  title: 'Notifications',
  showBack: true
})
</script>


<template>
<div>


<TitlePage title="Notifications" class="title-section"/>

  <div id="middle-section-container" class="flex flex-col justify-center items-center px-5">
      <div
        class="notification-container flex flex-col justify-start items-center"
      >
      <notificationCard name="Robert Anderson" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              impedit tenetur velit voluptate natus hic quasi iste quod maxime
              minus?"/>
        <notificationCard name="Patricia Seward" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              impedit tenetur velit voluptate natus hic quasi iste quod maxime
              minus?"/>
        <notificationCard name="Alvin Maus" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              impedit tenetur velit voluptate natus hic quasi iste quod maxime
              minus?"/>
        <notificationCard name="Kristen Velazquez" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              impedit tenetur velit voluptate natus hic quasi iste quod maxime
              minus?"/>
        <notificationCard name="Robert Anderson" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              impedit tenetur velit voluptate natus hic quasi iste quod maxime
              minus?"/>
      </div>

      <div
        id="button-container"
        class="flex flex-col justify-center items-center mt-10 mb-10"
      >
        <a href="#">
          <button class="btn">Refresh</button>
        </a>
      </div>
    </div>
  </div>
</template>



<style scoped>
      .notification-container {
        min-height: 800px;
        padding: 1rem;
        margin-left:200px;
        /* background-color: lightblue; */
      }

      @media screen and (max-width: 768px) {
        .notification-container{
          margin-left:0px;
          float:none;
        }
        .title-section{
          padding-top:80px;
        }
      

      }
      

      .btn {
        height: 68px;
        width: 175px;
        background-color: #00734f;
        border-radius: 10px;
        color: white;
      }

      .btn:hover {
        opacity: 80%;
        border-radius: 10px;

      }

    </style>