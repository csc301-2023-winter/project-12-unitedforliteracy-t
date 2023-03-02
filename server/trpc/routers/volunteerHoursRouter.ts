import { z } from 'zod'
import { auth, api } from '../salesforce'
import { createRouter, TRPCError } from '../createRouter'

/**
 * Return volunteer hours, identified by its ownerId (User Id in Salesforce).
 */
export const volunteerHoursRouter = createRouter().query('VolunteerHours', {
  input: z.object({
    userId: z.string()
  }),

  async resolve({ input }) {
    const query = `select Name from ProgPar__c WHERE OwnerId='${input.userId}'`
    const resp = await api.query(query, auth)
    const data = await resp.json() // returns a json dict of all ids of volunteer records
    if (!resp || resp.status !== 200) {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        cause: data
      })
    }

    // check if data is available    
    if (!data || !data.totalSize) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'Given volunteer user not found by Id = ' + input.userId
      })
    }
    else{
        const story = data.records
        const recordlist: Set<string> = new Set()

        for (let i=0; i< story.length; i++){
            recordlist.add(story[i].Name)
        }
        return{
            userId: input.userId,
            record: [...recordlist] // returns arraylist of Volunteer prog praticipation ID
        }

        
    }
  }
})



