 <template>
  
    <div>
      <TitlePage title="Calendar"/>
        <body> 
          <div id="content-container" class="flex flex-col justify-center px-10">
            <div class="heading-container">
            </div>
            <div
              id="notification-container"
              class="flex flex-col justify-start"
            >
              <div id="calendar-card" class="overflow-hidden md:ml-[240px]">
                <ClientOnly>
                    <FullCalendar id="calendar" :options="calendarOptions" />
                </ClientOnly>
              </div>
            </div>
          </div>
        </body>
    </div>
</template>


  
  <script setup>
  import FullCalendar from '@fullcalendar/vue3'
  import dayGridPlugin from "@fullcalendar/daygrid";
  import interactionPlugin from "@fullcalendar/interaction";
  
  const calendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    events: [
      { title: "5pm Literacy and Basic Skills", date: "2023-03-06" },
      { title: "5pm Literacy and Basic Skills", date: "2023-03-13" },
      { title: "5pm Literacy and Basic Skills", date: "2023-03-20" },
    ],
  //   methods: {
  //   handleDateClick(info) {
  //     const newEvent = {
  //       title: 'New Event',
  //       date: info.dateStr
  //     }
  //     this.events.push(newEvent)
  //   }
  // }

  }
  </script>

<style>

#calendar-card {
      flex-direction: column;
      color: #00565a;
      margin-bottom: 0.8rem;
      padding: 1em;
      background-color: #fff;
      border-radius: 25px 0 0 0;
      box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
      overflow-y: hidden;
      margin-top: 3rem;
      max-width: 65rem;
    }

#calendar {
    /* max-width: 75%; */
}

@media only screen and (max-width: 540px) {

  #fc-dom-1 {
    font-size: 1.4rem;
  }

}

</style>