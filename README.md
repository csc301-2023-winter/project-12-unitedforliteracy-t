# United for Literacy Web App

D3 slides: [presentation slides](https://docs.google.com/presentation/d/18zjpVtH0PuQcOrkOT8-fObbmxvqMyfLeiHsHlaDcGvk/edit?usp=sharing) <br>
This project is a continuation of a previous student team.

## New Features Requested
- Invite friend or colleague to volunteer function
- Accounts for different users (staff, volunteer, admin)
- Volunteer groups where they can communicate/message
- Volunteers can msg supervisor (In-app messaging)
- Integration w/ External Calendars 
- Possible to iframe existing SF community pages or website pages? ( we can show the pages we're hoping to include on a call)
- Integrate volunteer hour tracking
- Integrate testimonial entry
- Brighten UI colour scheme

# The following is an overview what the previous team has completed
## Existing User Stories
Home page
- Announcement preview - group it's for, preview of content
- Click on "View All" - take user to "Update" page
- Assigned Programs - take user to "Programs" page
- Community Portal - take user to salesforce login, view volunteer hours and testimonials

Program page
- See all programs user is registered, divided into today and upcoming, clicking on each program card takes user to detail page of that program, including date, address, description, and shared file link to onedrive

Update page
- View all announcements for the user
- Unread red badge disappears after reading
- Refresh button fetches new announcements if any

## Salesforce Integration
Programs
- Programs in the web app are pulled from Salesforce->Program Profiles
- Program details directly reflect program information on Salesforce

Announcements (Updates in app)
- Data pulled from Salesforce Chatter
- One Chatter group created for each program

## Technology Overview
Language
- Nodejs and Typescript
- Frontend: Nuxt framework, uses UI library Vuejs
- Backend: tRPC - a Typescript lib
- PostgreSQL for info not stored on Salesforce

Salesforce API
- Query Endpoint: programs, programs information, announcements, user information
- Chatter Endpoint: chatter announcements
