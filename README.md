# paint-by-grid

# Project Overview

## Project Name

Painted Grits

## Project Description

Painted Grits is an application where the user can choose colors to reveal an image. The landing page is a numbered grid with the option to choose a color for corresponding numbers. The color options will be populated by an Airtable API in drop down menus. Each menu will have a button that finalizes the choice and changes the color on the page. The second page will be a gallery of previously completed images.

## Wireframes

[Link](https://www.figma.com/proto/3L11fbptO3xASD6sKSkkgi/Painted-Grits?node-id=3%3A3&scaling=scale-down)
1/7: Home page for desktop version, drop down menus are available to the left side of the grid image
2/7: Example of design filled in
3/7: Gallery page of previously saved works
4/7: Home page for phone version, color options below the image, save button at the bottom.
5/7: Gallery page for phone version
6/7: Home page for tablet
7/7: Gallery page for tablet

## Component Hierarchy

Component Hierarchy can be found [here](https://www.figma.com/proto/hhXrBqiOoUYUHAU7fjDKLn/Component-Hierarcy?node-id=6%3A15&scaling=scale-down)

## API and Data Sample

[Airtable]("https://api.airtable.com/v0/applS3zQZG7XxTfuu/painted-grits?maxRecords=3&view=Grid%20view")
Key: applS3zQZG7XxTfuu
Base ID: applS3zQZG7XxTfuu

{
"records": [
{
"id": "recMv5UBN7MKzfKnx",
"fields": {
"Numbers": 1,
"Colors": "000022"
},
"createdTime": "2020-10-09T00:51:12.000Z"
},
{
"id": "recsl1lLolHJSY1Z3",
"fields": {
"Numbers": 1,
"Colors": "FEA82F"
},
"createdTime": "2020-10-09T00:51:12.000Z"
},
{
"id": "recvQ6TL3KEmoBnup",
"fields": {
"Numbers": 1,
"Colors": "FFFECB"
},
"createdTime": "2020-10-09T00:51:12.000Z"
}
],
"offset": "recvQ6TL3KEmoBnup"
}

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP

_These are examples only. Replace with your own MVP features._

- Organize/set up Airtable API
- Build grid w/ numbers
- Set up navigation to gallery
- Populate drop down menus with color options
- set colors of squares to colors chosen
- Figure out how to save the output
- Build gallery

#### PostMVP

_These are examples only. Replace with your own Post-MVP features._

- Allow for images in gallery to be enlarged
- Offer more than one grid option

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day           | Deliverable                                        | Status     |
| ------------- | -------------------------------------------------- | ---------- |
| October 8     | Prompt / Wireframes / Priority Matrix / Timeframes | Complete   |
| October 9     | Project Approval                                   | Incomplete |
| October 9 -12 | Build out grid, drop down menus, CSS               | Incomplete |
| October 12    | Use API to populate colors in the Grid             | Incomplete |
| October 13    | Figure out how to save image to gallery            | Incomplete |
| October 14    | MVP                                                | Incomplete |
| October 15    | Post MVP: work on Gallery/Other options            | Incomplete |
| October 16    | Presentations                                      | Incomplete |

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component                               | Priority | Estimated Time | Time Invested | Actual Time |
| --------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Creating Grid                           |    H     |      4hrs      |               |             |
| Build out select options                |    H     |      3hrs      |               |             |
| Build out Airtable                      |    H     |      1hrs      |               |             |
| CSS                                     |    H     |      6hrs      |               |             |
| Use API to populate colors in the Grid  |    H     |      4hrs      |               |             |
| Figure out how to save image to gallery |    H     |      8hrs      |               |             |
| Work on Gallery                         |    H     |      4hrs      |               |             |
| Build more grids                        |    H     |      3hrs      |               |             |
| Total                                   |    H     |     33hrs      |               |             |

## SWOT Analysis

### Strengths:

Most of the project is pretty simple

### Weaknesses:

Still pretty confused on how to do a lot of it

### Opportunities:

Good practice for spacial thinking and figuring things out on my own

### Threats:

Saving the image to a new gallery might be really fricking weird and complicated.
