import { createRootRouter } from './createRouter'
import { helloRouter } from './routers/helloRouter'
import { eventDetailsRouter } from './routers/eventDetailsRouter'
import { announcementsRouter } from './routers/announcementsRouter'
import { userEventsRouter } from './routers/userEventsRouter'
import { userRouter } from './routers/userRouter'
import { testimonialRouter } from './routers/testimonialRouter'
import { volunteerHoursRouter } from './routers/volunteerHoursRouter'
import { hoursDetailsRouter } from './routers/hoursDetailsRouter'

export const router = createRootRouter()
  .merge(helloRouter)
  .merge(eventDetailsRouter)
  .merge(announcementsRouter)
  .merge(userEventsRouter)
  .merge(userRouter)
  .merge(testimonialRouter)
  .merge(volunteerHoursRouter)
  .merge(hoursDetailsRouter)
