# Stuttgart-Bildfahrplan App

This is a tool to visualise the arrival time of S-Bahn trains in Stuttgart, using railway timetable graphs.

# Quick Start

## Docker

If you have Docker installed, you can start the app with the following commands:

### Build the image
```bash
docker compose build
```

### Start the app
```bash
docker compose up 
```
Once complete you should be able to view the application on http://localhost:3000

## Local Environment

Please note the application requires Node Package Manager to run.

### Install the dependencies from the package.json
```bash
npm install
```

### Start the app
```bash
npm run dev
```
When running, you should be able to view the application on http://localhost:3000

# Usage

The app currently has the following features:
- Choose from the following Stuttgart S-Bahn lines:
        - S3
        - S4
        - S5
        - S6
        - S1
        - S2
        - S60
        - S11
- Select or deselect trips from the graph
- Pinpoint where a specific train is at which time on point-hover
- Dark mode

# Adding a Trip

The graph code is dynamic so that when a trip is added to either of the S-Bahn lines, provided the data-entry is correct, it will instantly be reflected in the graph.

Only the S3 and S4 contain trip data, meaning the other S-Bahns are empty.

Currently, the only way to add a trip is via the database but I'd plan to make it easier with a POST request, which an authorised user would be able to make.

If you wanted to add a trip to your forked, local version however, these are the steps you'd need to take:
- Consult the data to see which trip you want to add
- Once satisfied, you need to formulate the data entry, so that it fits this object structure:
```
{
id: 
<!-- type: number, -->

route_id: 
<!-- type: number, id of the sbahn route -->

path?: 
<!-- type: number[], stop ids. Optional. This is the path of the trip via the stop ids. However this also needs to start with the first station of the route even if the trip does not begin nor end here. e.g. if the trip begins/ends at the midpoint of the sbahn route, include all the stop ids before the midpoint of the route, along with the path itself. -->

arriving_times?: 
<!-- type: number[], // time of arrival in minutes. Optional. Similarly, if this trip does not begin nor end at the start of the S-Bahn route, still include values that correspond with the stop Ids in the path array. For this value, enter "null". e.g.  
path: [8005768, 8001650, 8003622, 8004496, 8005773, ...], arriving_times: [null, null, null, null, null, 45,...].-->

departing_times?: 
<!-- type: number[], time of departure in minutes. Optional and not currently used in the graph. -->

color: 
<!-- type: string, this is the color used for the line graph. Make sure it's visible in light and dark mode. Use the HEX code code.  -->

trip: 
<!-- type: object[], this is what the graph uses to plot on the line graph. You can use the path and arriving_time property to generate this object with a for loop and function to find the stop id and return the string name. This was my original idea in terms of writing the code for the graph itself, however it became too cumbersome if used dynamically and easier to write this object in the database itself. This is why the arriving_times and path properties of this object are optional. Similarly, make sure that if the trip does not start nor end at the first stop of the S-Bahn route, still include these stops along with the corresponding "null" values. e.g. 
S3 (route_id: 1)
                    { station_name: 'Stuttgart Flughafen/Messe', arriving_time: null},
                    { station_name: 'Echterdingen', arriving_time: null},
                    { station_name: 'Leinfelden', arriving_time: null},
                    { station_name: 'Oberaichen', arriving_time: null},
                    { station_name: 'Stuttgart-Rohr', arriving_time: null},
                    { station_name: 'Stuttgart-Vaihingen', arriving_time: 45 } {...},   -->
}
```
- You should then by able to add this to the trip schema via the /app/api/trips/route.
- If added successfully, you should be able to see your trip in the graph (might require a refresh)
- **One important note is that all trips need to follow the same order from station to station. For example, if your trip terminates at the first point on the x-axis (e.g. for S3, "Stuttgart Flughafen"), the trip object still needs to start at this station. For trips that go in the reverse order, you can write the original direction in the array and then before you add it to the database, use the .reverse() method to flip the order. The stations still corresponds to the correct arriving time**











