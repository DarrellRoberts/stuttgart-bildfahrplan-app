import { NextResponse } from "next/server"

export async function GET () {
    return NextResponse.json({
        trips: [ 
            {
                id: 1,
                route_id: 1,
                path: [
                    8005768, 8001650, 8003622, 8004496, 8005773, 
                    8005776, 8005779, 8006513, 8006698, 8006699, 8006700, 8098096, 8005769, 8004357, 8005774, 8001974, 8000180],
                arriving_times: [null, null, null, null, null, 45, 47, 49, 55, 56, 58, 60, 64, 67, 69, 71, 74],
                departing_times: [45, 47, 49, 55, 57, 58, 60, 64, 67, 69, 72, 75],
                color: "#cb0c9f",
                trip: [
                    { station_name: 'Stuttgart Flughafen/Messe', arriving_time: null},
                    { station_name: 'Echterdingen', arriving_time: null},
                    { station_name: 'Leinfelden', arriving_time: null},
                    { station_name: 'Oberaichen', arriving_time: null},
                    { station_name: 'Stuttgart-Rohr', arriving_time: null},
                    { station_name: 'Stuttgart-Vaihingen', arriving_time: 45 },
                    { station_name: 'Stuttgart-Österfeld', arriving_time: 47 },
                    { station_name: 'Stuttgart Universität', arriving_time: 49 },
                    { station_name: 'Stuttgart Schwabstr.', arriving_time: 55 },
                    { station_name: 'Stuttgart Feuersee', arriving_time: 56 },
                    { station_name: 'Stuttgart Stadtmitte', arriving_time: 58 },
                    { station_name: 'Stuttgart Hbf (tief)', arriving_time: 60 },
                    { station_name: 'Stuttgart-Bad Cannstatt', arriving_time: 64 },
                    { station_name: 'Stuttgart Nürnberger Str.', arriving_time: 67 },
                    { station_name: 'Stuttgart-Sommerrain', arriving_time: 69 },
                    { station_name: 'Fellbach', arriving_time: 71 },
                    { station_name: 'Waiblingen', arriving_time: 74 }
                  ]
            },
            {
                id: 2,
                route_id: 1,
                path: [8005768, 8001650, 8003622, 8004496, 8005773, 
                    8005776, 8005779, 8006513, 8006698, 8006699, 8006700, 8098096, 8005769, 8004357, 8005774, 8001974,8000180,	8004333, 8005454, 8006479, 8004233, 8003913, 8000016],
                arriving_times: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 74, 78, 81, 84, 86, 89, 93],
                departing_times: [75, 78, 81, 84, 87, 90, 93],
                color: "#d909",
                trip: [
                    { station_name: 'Stuttgart Flughafen/Messe', arriving_time: null},
                    { station_name: 'Echterdingen', arriving_time: null},
                    { station_name: 'Leinfelden', arriving_time: null},
                    { station_name: 'Oberaichen', arriving_time: null},
                    { station_name: 'Stuttgart-Rohr', arriving_time: null},
                    { station_name: 'Stuttgart-Vaihingen', arriving_time: null},
                    { station_name: 'Stuttgart-Österfeld', arriving_time: null},
                    { station_name: 'Stuttgart Universität', arriving_time: null},
                    { station_name: 'Stuttgart Schwabstr.', arriving_time: null},
                    { station_name: 'Stuttgart Feuersee', arriving_time: null},
                    { station_name: 'Stuttgart Stadtmitte', arriving_time: null},
                    { station_name: 'Stuttgart Hbf (tief)', arriving_time: null},
                    { station_name: 'Stuttgart-Bad Cannstatt', arriving_time: null},
                    { station_name: 'Stuttgart Nürnberger Str.', arriving_time: null},
                    { station_name: 'Stuttgart-Sommerrain', arriving_time: null},
                    { station_name: 'Fellbach', arriving_time: null},
                    { station_name: 'Waiblingen', arriving_time: 74 },
                    { station_name: 'Neustadt-Hohenacker', arriving_time: 78 },
                    { station_name: 'Schwaikheim', arriving_time: 81 },
                    { station_name: 'Winnenden', arriving_time: 84 },
                    { station_name: 'Nellmersbach', arriving_time: 86 },
                    { station_name: 'Maubach', arriving_time: 89 },
                    { station_name: 'Backnang', arriving_time: 93 }
                  ],
            },
            {
                id: 3,
                route_id: 1,
                path: [8005768, 8001650, 8003622, 8004496, 8005773, 
                    8005776, 8005779, 8006513, 8006698, 8006699, 8006700, 8098096, 8005769, 8004357, 8005774, 8001974,8000180,	8004333, 8005454, 8006479, 8004233, 8003913, 8000016],
                arriving_times: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,84, 86, 89, 93],
                departing_times: [84, 87, 90, 93],
                color: "#b54",
                trip: [
                    { station_name: 'Stuttgart Flughafen/Messe', arriving_time: null},
                    { station_name: 'Echterdingen', arriving_time: null},
                    { station_name: 'Leinfelden', arriving_time: null},
                    { station_name: 'Oberaichen', arriving_time: null},
                    { station_name: 'Stuttgart-Rohr', arriving_time: null},
                    { station_name: 'Stuttgart-Vaihingen', arriving_time: null},
                    { station_name: 'Stuttgart-Österfeld', arriving_time: null},
                    { station_name: 'Stuttgart Universität', arriving_time: null},
                    { station_name: 'Stuttgart Schwabstr.', arriving_time: null},
                    { station_name: 'Stuttgart Feuersee', arriving_time: null},
                    { station_name: 'Stuttgart Stadtmitte', arriving_time: null},
                    { station_name: 'Stuttgart Hbf (tief)', arriving_time: null},
                    { station_name: 'Stuttgart-Bad Cannstatt', arriving_time: null},
                    { station_name: 'Stuttgart Nürnberger Str.', arriving_time: null},
                    { station_name: 'Stuttgart-Sommerrain', arriving_time: null},
                    { station_name: 'Fellbach', arriving_time: null},
                    { station_name: 'Waiblingen', arriving_time: null},
                    { station_name: 'Neustadt-Hohenacker', arriving_time: null},
                    { station_name: 'Schwaikheim', arriving_time: null},
                    { station_name: 'Winnenden', arriving_time: 84 },
                    { station_name: 'Nellmersbach', arriving_time: 86 },
                    { station_name: 'Maubach', arriving_time: 89 },
                    { station_name: 'Backnang', arriving_time: 93 }
                  ]
            },
            {
                id: 4,
                route_id: 1,
                path: [ 8005768, 8001650, 8003622, 8004496, 8005773, 
                    8005776, 8005779, 8006513, 8006698, 8006699, 8006700, 8098096, 8005769, 8004357, 8005774, 8001974, 8000180, 8004333, 8005454, 8006479,8004233, 8003913, 8000016],
                arriving_times: [ null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                   74, 70, 67, 64, 61, 58, 56],
                departing_times: [56, 59, 61, 65, 68, 70, 75],
                color: "#a987",
                trip: [
                    { station_name: 'Stuttgart Flughafen/Messe', arriving_time: null},
                    { station_name: 'Echterdingen', arriving_time: null},
                    { station_name: 'Leinfelden', arriving_time: null},
                    { station_name: 'Oberaichen', arriving_time: null},
                    { station_name: 'Stuttgart-Rohr', arriving_time: null},
                    { station_name: 'Stuttgart-Vaihingen', arriving_time: null},
                    { station_name: 'Stuttgart-Österfeld', arriving_time: null},
                    { station_name: 'Stuttgart Universität', arriving_time: null},
                    { station_name: 'Stuttgart Schwabstr.', arriving_time: null},
                    { station_name: 'Stuttgart Feuersee', arriving_time: null},
                    { station_name: 'Stuttgart Stadtmitte', arriving_time: null},
                    { station_name: 'Stuttgart Hbf (tief)', arriving_time: null},
                    { station_name: 'Stuttgart-Bad Cannstatt', arriving_time: null},
                    { station_name: 'Stuttgart Nürnberger Str.', arriving_time: null},
                    { station_name: 'Stuttgart-Sommerrain', arriving_time: null},
                    { station_name: 'Fellbach', arriving_time: null},
                    { station_name: 'Waiblingen', arriving_time: 74 },
                    { station_name: 'Neustadt-Hohenacker', arriving_time: 70 },
                    { station_name: 'Schwaikheim', arriving_time: 67 },
                    { station_name: 'Winnenden', arriving_time: 64 },
                    { station_name: 'Nellmersbach', arriving_time: 61 },
                    { station_name: 'Maubach', arriving_time: 58 },
                    { station_name: 'Backnang', arriving_time: 56 }
                  ] 
            },
            {
                id: 5,
                route_id: 1,
                path: [
                    8005768, 8001650, 8003622, 8004496, 8005773, 
                    8005776, 8005779, 8006513,
                    8006698, 8006699,
                    8006700, 8098096,
                    8005769, 8004357,
                    8005774, 8001974,
                    8000180],
                arriving_times: [
                    null, null, null, null, null, null, null, null,  
                    104, 102, 100, 95, 93, 92, 90,
                    85,  82,  80, 77, 74],
                departing_times: [75, 78, 80, 83, 86, 90, 92, 94, 95, 100, 102, 104],
                color: "#ff0000",
                trip: [
                    { station_name: 'Stuttgart Flughafen/Messe', arriving_time: null },
                    { station_name: 'Echterdingen', arriving_time: null },
                    { station_name: 'Leinfelden', arriving_time: null },
                    { station_name: 'Oberaichen', arriving_time: null },
                    { station_name: 'Stuttgart-Rohr', arriving_time: null },
                    { station_name: 'Stuttgart-Vaihingen', arriving_time: 104 },
                    { station_name: 'Stuttgart-Österfeld', arriving_time: 102 },
                    { station_name: 'Stuttgart Universität', arriving_time: 100 },
                    { station_name: 'Stuttgart Schwabstr.', arriving_time: 95 },
                    { station_name: 'Stuttgart Feuersee', arriving_time: 93 },
                    { station_name: 'Stuttgart Stadtmitte', arriving_time: 92 },
                    { station_name: 'Stuttgart Hbf (tief)', arriving_time: 90 },
                    { station_name: 'Stuttgart-Bad Cannstatt', arriving_time: 85 },
                    { station_name: 'Stuttgart Nürnberger Str.', arriving_time: 82 },
                    { station_name: 'Stuttgart-Sommerrain', arriving_time: 80},
                    { station_name: 'Fellbach', arriving_time: 77 },
                    { station_name: 'Waiblingen', arriving_time: 74 }
                  ]
            },
            {
                id: 6,
                route_id: 1,
                path: [8005768, 8001650, 8003622, 8004496, 8005773, 
                    8005776, 8005779, 8006513, 8006698, 8006699, 8006700, 8098096, 8005769, 8004357, 8005774, 8001974, 8000180, 8004333, 8005454, 8006479,8004233, 8003913, 8000016],
                arriving_times: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 64, 61, 58, 56 ],
                departing_times: [64, 61, 58, 56 ],
                color: "#0f0",
                trip: [
                    { station_name: 'Stuttgart Flughafen/Messe', arriving_time: null},
                    { station_name: 'Echterdingen', arriving_time: null},
                    { station_name: 'Leinfelden', arriving_time: null},
                    { station_name: 'Oberaichen', arriving_time: null},
                    { station_name: 'Stuttgart-Rohr', arriving_time: null},
                    { station_name: 'Stuttgart-Vaihingen', arriving_time: null},
                    { station_name: 'Stuttgart-Österfeld', arriving_time: null},
                    { station_name: 'Stuttgart Universität', arriving_time: null},
                    { station_name: 'Stuttgart Schwabstr.', arriving_time: null},
                    { station_name: 'Stuttgart Feuersee', arriving_time: null},
                    { station_name: 'Stuttgart Stadtmitte', arriving_time: null},
                    { station_name: 'Stuttgart Hbf (tief)', arriving_time: null},
                    { station_name: 'Stuttgart-Bad Cannstatt', arriving_time: null},
                    { station_name: 'Stuttgart Nürnberger Str.', arriving_time: null},
                    { station_name: 'Stuttgart-Sommerrain', arriving_time: null},
                    { station_name: 'Fellbach', arriving_time: null},
                    { station_name: 'Waiblingen', arriving_time: null},
                    { station_name: 'Neustadt-Hohenacker', arriving_time: null},
                    { station_name: 'Schwaikheim', arriving_time: null},
                    { station_name: 'Winnenden', arriving_time: 64 },
                    { station_name: 'Nellmersbach', arriving_time: 61 },
                    { station_name: 'Maubach', arriving_time: 58 },
                    { station_name: 'Backnang', arriving_time: 56 }
                  ]
            },
            {
                id: 7,
                route_id: 1,
                path: [8005768, 8001650, 8003622, 8004496, 8005773, 8005776,	8005779, 8006513, 8006698, 8006699,	8006700, 8098096, 8005769, 8004357,	8005774, 8001974, 8000180],
                arriving_times: [null, null, null, null, null, 75, 77, 79, 85, 86, 88, 90, 94, 97, 99, 101, 104],
                departing_times: [75, 77, 79, 85, 87, 88, 90, 94, 97, 99, 102, 105],
                color: "#FFD700",
                trip: [
                    { station_name: 'Stuttgart Flughafen/Messe', arriving_time: null},
                    { station_name: 'Echterdingen', arriving_time: null},
                    { station_name: 'Leinfelden', arriving_time: null},
                    { station_name: 'Oberaichen', arriving_time: null},
                    { station_name: 'Stuttgart-Rohr', arriving_time: null},
                    { station_name: 'Stuttgart-Vaihingen', arriving_time: 75 },
                    { station_name: 'Stuttgart-Österfeld', arriving_time: 77 },
                    { station_name: 'Stuttgart Universität', arriving_time: 79 },
                    { station_name: 'Stuttgart Schwabstr.', arriving_time: 85 },
                    { station_name: 'Stuttgart Feuersee', arriving_time: 86 },
                    { station_name: 'Stuttgart Stadtmitte', arriving_time: 88 },
                    { station_name: 'Stuttgart Hbf (tief)', arriving_time: 90 },
                    { station_name: 'Stuttgart-Bad Cannstatt', arriving_time: 94 },
                    { station_name: 'Stuttgart Nürnberger Str.', arriving_time: 97 },
                    { station_name: 'Stuttgart-Sommerrain', arriving_time: 99 },
                    { station_name: 'Fellbach', arriving_time: 101 },
                    { station_name: 'Waiblingen', arriving_time: 104 }
                  ]
            },
            {
                id: 8,
                route_id: 1,
                path: [8005768, 8001650, 8003622, 8004496, 8005773, 8005776,	8005779, 8006513, 8006698, 8006699,	8006700, 8098096, 8005769, 8004357,	8005774, 8001974, 8000180,	8004333, 8005454, 8006479, 8004233, 8003913, 8000016],
                arriving_times: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 104, 108, 111, 114, 116, 119, 123],
                departing_times: [105, 108, 111, 114, 117, 120, 123],
                color: "#0000FF",
                trip: [
                    { station_name: 'Stuttgart Flughafen/Messe', arriving_time: null},
                    { station_name: 'Echterdingen', arriving_time: null},
                    { station_name: 'Leinfelden', arriving_time: null},
                    { station_name: 'Oberaichen', arriving_time: null},
                    { station_name: 'Stuttgart-Rohr', arriving_time: null},
                    { station_name: 'Stuttgart-Vaihingen', arriving_time: null},
                    { station_name: 'Stuttgart-Österfeld', arriving_time: null},
                    { station_name: 'Stuttgart Universität', arriving_time: null},
                    { station_name: 'Stuttgart Schwabstr.', arriving_time: null},
                    { station_name: 'Stuttgart Feuersee', arriving_time: null},
                    { station_name: 'Stuttgart Stadtmitte', arriving_time: null},
                    { station_name: 'Stuttgart Hbf (tief)', arriving_time: null},
                    { station_name: 'Stuttgart-Bad Cannstatt', arriving_time: null},
                    { station_name: 'Stuttgart Nürnberger Str.', arriving_time: null},
                    { station_name: 'Stuttgart-Sommerrain', arriving_time: null},
                    { station_name: 'Fellbach', arriving_time: null},
                    { station_name: 'Waiblingen', arriving_time: 104 },
                    { station_name: 'Neustadt-Hohenacker', arriving_time: 108 },
                    { station_name: 'Schwaikheim', arriving_time: 111 },
                    { station_name: 'Winnenden', arriving_time: 114 },
                    { station_name: 'Nellmersbach', arriving_time: 116 },
                    { station_name: 'Maubach', arriving_time: 119 },
                    { station_name: 'Backnang', arriving_time: 123 }
                  ]
            },
            {
                id: 1200,
                route_id: 2,
                path: [8006698,	8006699, 8006700, 8098096, 8005767, 8005770, 8005778, 8003411, 8000235, 8001967, 8002065, 8000873, 8003853,],
                arriving_times: [32, 34, 35, 37, 41, 43, 46, 50, 53, 56, 59, 62, 65],
                departing_times: [],
                color: "#0000FF",
                trip: [
                    {station_name:'Stuttgart Schwabstr.', arriving_time:32},
                    {station_name:'Stuttgart Feuersee', arriving_time:34},
                    {station_name:'Stuttgart Stadtmitte', arriving_time:35},
                    {station_name:'Stuttgart Hbf (tief)', arriving_time:37},
                    {station_name:'Stuttgart Nord', arriving_time:41},
                    {station_name:'Stuttgart-Feuerbach', arriving_time:43},
                    {station_name:'Stuttgart-Zuffenhausen', arriving_time:46},
                    {station_name:'Kornwestheim Pbf', arriving_time:50},
                    {station_name:'Ludwigsburg', arriving_time:53},
                    {station_name:'Favoritepark', arriving_time:56},
                    {station_name:'Freiberg(Neckar)', arriving_time:59},
                    {station_name:'Benningen(Neckar)', arriving_time:62},
                    {station_name:'Marbach(Neckar)', arriving_time:65},
                  ]
            },
            {
                id: 1203,
                route_id: 2,
                path: [8006698, 8006699,
                    8006700, 8098096,
                    8005767, 8005770,
                    8005778, 8003411,
                    8000235, 8001967,
                    8002065, 8000873,
                    8003853],
                arriving_times: [ 88, 86, 84, 82, 78, 76,
                    73, 69, 66, 63, 60, 57,
                    55],
                departing_times: [],
                color: "#ff0000",
                trip: [
                    { station_name: 'Stuttgart Schwabstr.', arriving_time: 88 },
                    { station_name: 'Stuttgart Feuersee', arriving_time: 86 },
                    { station_name: 'Stuttgart Stadtmitte', arriving_time: 84 },
                    { station_name: 'Stuttgart Hbf (tief)', arriving_time: 82 },
                    { station_name: 'Stuttgart Nord', arriving_time: 78 },
                    { station_name: 'Stuttgart-Feuerbach', arriving_time: 76 },
                    { station_name: 'Stuttgart-Zuffenhausen', arriving_time: 73 },
                    { station_name: 'Kornwestheim Pbf', arriving_time: 69 },
                    { station_name: 'Ludwigsburg', arriving_time: 66 },
                    { station_name: 'Favoritepark', arriving_time: 63 },
                    { station_name: 'Freiberg(Neckar)', arriving_time: 60 },
                    { station_name: 'Benningen(Neckar)', arriving_time: 57 },
                    { station_name: 'Marbach(Neckar)', arriving_time: 55 }
                  ]
            },
        ]
    })
}
    