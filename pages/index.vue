<script lang="ts" setup>
definePageMeta({
  showBack: false,
  home: true
})

// The link for the community portal
// const communityLink =
//   'https://unitedforliteracy.my.site.com/customerservice/' +
//   'login?sfdcIFrameOrigin=null'

// const currUser = 2
const client = useClient()
// Obtain the name of the current user (right now fixed on user 2)
// TODO: Frontend team pls update calling convention
const name = await(
  await client.query('user', {
    userId: '003Au000005YI4mIAG'
  })
).name

// Obtain the announcements for this user
// const announcement = await(
//   await client.query('announcements', {
//     userId: currUser,
//     maxCount: 1,
//     noEarlierThan: new Date('2022-11-01T11:16:01')
//   })
// )[0]

// const announcementStore = useAnnouncementStore()
// const announcement = announcementStore.announcements[0]

// Obtain the assigned program events for this user
const events = await(
  await client.query('userEvents', { userId: '003Au000005YI4mIAG' })
).events

// Check if the events list if empty, otherwise, obtain the first one
let eventContent = 'No upcoming programs'
if (events.length === 0) {
  eventContent = 'No upcoming programs'
} else {
  const eventData = await client.query('eventDetails', {
    eventId: 'a26Au00000008tdIAA'
  })

  if (eventData?.description === null) {
    eventContent =
      eventData.name + ', Goals: ' + eventData.goals.replace(/;/g, ', ')
  } else if (eventData?.description != null) {
    eventContent = eventData.name + ':\n'+ eventData.description
  }
}
</script>

<template>
  <div> 
    <div class="welcome-card mt-[80px] md:mt-0  md:ml-[220px] ">
      <h1>Welcome, {{ name }}!</h1>
    </div>
    <div class="grid lg:grid-cols-2 sm:grid-cols-1 md:ml-[220px] md:pl-8 md:pr-8">
  <div>
    <div class="rounded-tl-card">
      <h1>Enrolled Programs</h1>
      <div>
        <div><FCArrowCard
        title="Assigned Programs"
        :text="eventContent"
        textcolor="black"
        color="var(--lime-green)"
        link="/programs"
      /></div>
      </div>
    </div>
    <div class="rounded-tl-card">
      <h1>Training resources</h1>
      <div>
        <FCArrowCard
        title="Assigned Modules"
        :text="eventContent"
        textcolor="black"
        color="var(--lime-green)"
        link="/programs"
      />
      <FCArrowCard
        title="Assigned Modules"
        :text="eventContent"
        textcolor="black"
        color="var(--lime-green)"
        link="/programs"
      />
      </div>
    </div>
  </div>
  
  <div>
    <div class="rounded-tl-card">
      <h1>Invite a friend</h1>
      <div class="flex">
        Let your friend know about this volunteer program!<Icon name="ri:user-shared-fill" class="ml-4" size="2em" color="var(--dark-green)"/>
      </div>
    </div>
    
    <div class="rounded-tl-card">
      <h1>Volunteer Hours</h1>
      <div class="flex">
        Don't forget to input your volunteer hour(s) after each event to keep track of all your volunteer hours.
        <div class="rounded-full border-6 circle flex flex-col"><div class="font-bold text-3xl">10</div><div>Hours</div></div>
      </div>
      
    </div>
    <NuxtLink to="/testimonial">
    <div class="rounded-tl-card">
      <div class="flex"><h1>Testimonial</h1> <Icon name="jam:write" class="ml-4" size="1.8em" color="var(--dark-green)"/>
    </div>
      <div>
        Tell us how you feel about doing the volunteer program.
      </div>
    </div>
    </NuxtLink>
  </div>
  </div>
  </div>
</template>

<style scoped>
.rounded-tl-card{
      color: black;
      margin: 1.5em;
      padding: 2em;
      background-color: #fff;
      border-radius: 50px 0 0 0;
      box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
      max-height: 350px;
      overflow-y: hidden;
}

h1{
  font-size: 1.5rem;
}
.welcome-card {
  color: white;
  font-weight:800;
  font-size: 1.5rem;
  line-height: 29px;
  padding: 13px;
  display: inline-block;
}
.circle{
  min-width:120px; 
  max-width: 120px;
  min-height: 120px;
  max-height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1em;
  border-color: var(--dark-green);
}
</style>

<!-- 
<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M14 14.252V22H4a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6zm6.586 4l-1.829-1.828l1.415-1.415L22.414 18l-4.242 4.243l-1.415-1.415L18.586 19H15v-2h3.586z"></path></svg>
</template>

<script lang="ts">
export default {
  name: 'RiUserSharedFill'
}

<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="-2 -2 24 24"><path fill="currentColor" d="m5.72 14.456l1.761-.508l10.603-10.73a.456.456 0 0 0-.003-.64l-.635-.642a.443.443 0 0 0-.632-.003L6.239 12.635l-.52 1.82zM18.703.664l.635.643c.876.887.884 2.318.016 3.196L8.428 15.561l-3.764 1.084a.901.901 0 0 1-1.11-.623a.915.915 0 0 1-.002-.506l1.095-3.84L15.544.647a2.215 2.215 0 0 1 3.159.016zM7.184 1.817c.496 0 .898.407.898.909a.903.903 0 0 1-.898.909H3.592c-.992 0-1.796.814-1.796 1.817v10.906c0 1.004.804 1.818 1.796 1.818h10.776c.992 0 1.797-.814 1.797-1.818v-3.635c0-.502.402-.909.898-.909s.898.407.898.91v3.634c0 2.008-1.609 3.636-3.593 3.636H3.592C1.608 19.994 0 18.366 0 16.358V5.452c0-2.007 1.608-3.635 3.592-3.635h3.592z"></path></svg>
</template>

<script lang="ts">
export default {
  name: 'JamWrite'
}
</script>
</script> -->