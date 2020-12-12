# paint-by-grid

https://objective-williams-628b36.netlify.app/

## Project Name

Painted Grits

## Project Description

Painted Grits is an application where the user can choose colors to reveal an image. The landing page is a numbered grid with the option to choose a color for corresponding numbers. The color options will be populated by an Airtable API in drop down menus. Each menu will have a button that finalizes the choice and changes the color on the page. The second page will be a gallery of previously completed images.

## Wireframes

[Link](https://www.figma.com/proto/3L11fbptO3xASD6sKSkkgi/Painted-Grits?node-id=3%3A3&scaling=scale-down)

## Component Hierarchy

Component Hierarchy can be found [here](https://www.figma.com/proto/hhXrBqiOoUYUHAU7fjDKLn/Component-Hierarcy?node-id=6%3A15&scaling=scale-down)

## API and Data Sample

[Airtable]("https://api.airtable.com/v0/applS3zQZG7XxTfuu/painted-grits?maxRecords=3&view=Grid%20view")

```
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
```
