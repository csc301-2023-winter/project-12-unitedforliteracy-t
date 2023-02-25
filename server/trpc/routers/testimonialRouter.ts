import { z } from 'zod'
import { auth, api } from '../salesforce'
import { createRouter, TRPCError } from '../createRouter'

/**
 * Return a testimonial, identified by its ownerId (User Id in Salesforce).
 */
export const testimonialRouter = createRouter().query('testimonial', {
  input: z.object({
    userId: z.string()
  }),

  async resolve({ input }) {
    const query = `select CreatedById, Date_Recorded__c, Long_Story__c, Topics__c, ownerid from Testimonial__c WHERE OwnerId='${input.userId}'`
    const resp = await api.query(query, auth)
    const data = await resp.json()
    if (!resp || resp.status !== 200) {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        cause: data
      })
    }

    if (!data || !data.totalSize || data.totalSize !== 1) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'Given user not found by Id = ' + input.userId
      })
    }
    const story = data.records[0]

    return {
      ownerId: story.OwnerId,
      topic: story.Topics__c,
      content: story.Long_Story__c,
      date: story.Date_Recorded__c
    }
  }
})
