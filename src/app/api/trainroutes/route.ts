import { NextResponse } from "next/server"

export async function GET () {
    return NextResponse.json({
        trainroutes: [ 
            {
                id: 1,
                name: "S3",
                stops: [
                    {
                        id: 8005768,
                        station_name: "Stuttgart Flughafen/Messe"
                    },
                    {
                        id: 8001650,
                        station_name: "Echterdingen"
                    }, 
                    {
                        id: 8003622,
                        station_name: "Leinfelden"
                    }, 
                    {
                        id: 8004496,
                        station_name: "Oberaichen"
                    }, 
                    {
                        id: 8005773,
                        station_name: "Stuttgart-Rohr"
                    }, 
                    {
                        id: 8005776,
                        station_name: "Stuttgart-Vaihingen"
                    }, 
                    {
                        id: 8005779,
                        station_name: "Stuttgart-Österfeld"
                    }, 
                    {
                        id: 8006513,
                        station_name: "Stuttgart Universität"
                    }, 
                    {
                        id: 8006698,
                        station_name: "Stuttgart Schwabstr."
                    }, 
                    {
                        id: 8006699,
                        station_name: "Stuttgart Feuersee"
                    }, 
                    {
                        id: 8006700,
                        station_name: "Stuttgart Stadtmitte"
                    }, 
                    {
                        id: 8098096,
                        station_name: "Stuttgart Hbf (tief)"
                    }, 
                    {
                        id: 8005769,
                        station_name: "Stuttgart-Bad Cannstatt"
                    }, 
                    {
                        id: 8004357,
                        station_name: "Stuttgart Nürnberger Str."
                    }, 
                    {
                        id: 8005774,
                        station_name: "Stuttgart-Sommerrain"
                    }, 
                    {
                        id: 8001974,
                        station_name: "Fellbach"
                    }, {
                        id: 8000180,
                        station_name: "Waiblingen"
                    }, 
                    {
                        id: 8004333,
                        station_name: "Neustadt-Hohenacker"
                    }, 
                    {
                        id: 8005454,
                        station_name: "Schwaikheim"
                    }, 
                    {
                        id: 8006479,
                        station_name: "Winnenden"
                    }, {
                        id: 8004233,
                        station_name: "Nellmersbach"
                    }, {
                        id: 8003913,
                        station_name: "Maubach"
                    }, {
                        id: 8000016,
                        station_name: "Backnang"
                    }]
            },
            {
                id: 2,
                name: "S4",
                stops: [
                    {
                        id:8006698,
                        station_name:"Stuttgart Schwabstr."
                    },
                {
                    id:8006699,
                    station_name:"Stuttgart Feuersee"
                },
                {
                    id:8006700,
                    station_name:"Stuttgart Stadtmitte"
                },
                {
                    id:8098096,
                    station_name:"Stuttgart Hbf (tief)"
                },
                {
                    id:8005767,
                    station_name:"Stuttgart Nord"
                },
                {
                    id:8005770,
                    station_name:"Stuttgart-Feuerbach"
                },
                {
                    id:8005778,
                    station_name:"Stuttgart-Zuffenhausen"
                },
                {
                    id:8003411,station_name:"Kornwestheim Pbf"
                },
                {
                    id:8000235,
                    station_name:"Ludwigsburg"
                },
                {
                    id:8001967,
                    station_name:"Favoritepark"
                },
                {
                    id:8002065,
                    station_name:"Freiberg(Neckar)"
                },
                {
                    id:8000873,
                    station_name:"Benningen(Neckar)"
                },
                {
                    id:8003853,
                    station_name:"Marbach(Neckar)"
                }]
            },
            {
                id: 3,
                name: "S5",
                stops: [{id:8006698, station_name:'Stuttgart Schwabstr.'},
                {id:8006699, station_name:'Stuttgart Feuersee'},
                {id:8006700, station_name:'Stuttgart Stadtmitte'},
                {id:8098096, station_name:'Stuttgart Hbf (tief)'},
                {id:8005767, station_name:'Stuttgart Nord'},
                {id:8005770, station_name:'Stuttgart-Feuerbach'},
                {id:8005778, station_name:'Stuttgart-Zuffenhausen'},
                {id:8003411, station_name:'Kornwestheim Pbf'},
                {id:8000235, station_name:'Ludwigsburg'},
                {id:8000630, station_name:'Asperg'},
                {id:8005820, station_name:'Tamm(Württ)'},
                {id:8000038, station_name:'Bietigheim-Bissingen'}]
            },
            {
                id: 4,
                name: "S6",
                stops: [{id:8000096, station_name:'Stuttgart Hbf'},
                {id:8005767, station_name:'Stuttgart Nord'},
                {id:8005770, station_name:'Stuttgart-Feuerbach'},
                {id:8005778, station_name:'Stuttgart-Zuffenhausen'},
                {id:8004338, station_name:'Neuwirtshaus(Porscheplatz)'},
                {id:8003409, station_name:'Korntal'},
                {id:8006268, station_name:'Weilimdorf'},
                {id:8001476, station_name:'Ditzingen'},
                {id:8002892, station_name:'Höfingen'},
                {id:8003652, station_name:'Leonberg'},
                {id:8005236, station_name:'Rutesheim'},
                {id:8000313, station_name:'Renningen'},
                {id:8003831, station_name:'Malmsheim'},
                {id:8006271, station_name:'Weil der Stadt'}]
            },
            {
                id: 5,
                name: "S1",
                stops: [{id:8002785, station_name:'Herrenberg'},
                {id:8004490, station_name:'Nufringen'},
                {id:8002165, station_name:'Gärtringen'},
                {id:8001689, station_name:'Ehningen(b Böblingen)'},
                {id:8003022, station_name:'Hulb'},
                {id:8001055, station_name:'Böblingen'},
                {id:8005201, station_name:'Goldberg(Württ)'},
                {id:8005773, station_name:'Stuttgart-Rohr'},
                {id:8005776, station_name:'Stuttgart-Vaihingen'},
                {id:8000096, station_name:'Stuttgart Hbf'},
                {id:8005769, station_name:'Stuttgart-Bad Cannstatt'},
                {id:8006743, station_name:'Stuttgart Neckarpark'},
                {id:8005775, station_name:'Stuttgart-Untertürkheim'},
                {id:8005772, station_name:'Stuttgart-Obertürkheim'},
                {id:8001921, station_name:'Esslingen-Mettingen'},
                {id:8001920, station_name:'Esslingen(Neckar)'},
                {id:8004528, station_name:'Oberesslingen'},
                {id:8006642, station_name:'Esslingen-Zell'},
                {id:8000508, station_name:'Altbach'},
                {id:8000302, station_name:'Plochingen'},
                {id:8006346, station_name:'Wernau(Neckar)'},
                {id:8006331, station_name:'Wendlingen(Neckar)'},
                {id:8003282, station_name:'Kirchheim(Teck)-Ötlingen'},
                {id:8003280, station_name:'Kirchheim(Teck)'}]
            },
            {
                id: 6,
                name: "S2",
                stops: [{id:8001984, station_name:'Filderstadt'},
                {id:8005768, station_name:'Stuttgart Flughafen/Messe'},
                {id:8001650, station_name:'Echterdingen'},
                {id:8003622, station_name:'Leinfelden'},
                {id:8004496, station_name:'Oberaichen'},
                {id:8005773, station_name:'Stuttgart-Rohr'},
                {id:8005776, station_name:'Stuttgart-Vaihingen'},
                {id:8005779, station_name:'Stuttgart-Österfeld'},
                {id:8006513, station_name:'Stuttgart Universität'},
                {id:8006698, station_name:'Stuttgart Schwabstr.'},
                {id:8006699, station_name:'Stuttgart Feuersee'},
                {id:8006700, station_name:'Stuttgart Stadtmitte'},
                {id:8098096, station_name:'Stuttgart Hbf (tief)'},
                {id:8005769, station_name:'Stuttgart-Bad Cannstatt'},
                {id:8004357, station_name:'Stuttgart Nürnberger Str.'},
                {id:8005774, station_name:'Stuttgart-Sommerrain'},
                {id:8001974, station_name:'Fellbach'},
                {id:8000180, station_name:'Waiblingen'},
                {id:8005157, station_name:'Rommelshausen'},
                {id:8005726, station_name:'Stetten-Beinstein'},
                {id:8001785, station_name:'Endersbach'},
                {id:8000934, station_name:'Beutelsbach'},
                {id:8002448, station_name:'Grunbach'},
                {id:8002240, station_name:'Geradstetten'},
                {id:8006485, station_name:'Winterbach(b Schorndorf)'},
                {id:8006277, station_name:'Weiler(Rems)'},
                {id:8005424, station_name:'Schorndorf'}]
            },
            {
                id: 7,
                name: "S60",
                stops: [{id:8006698, station_name:'Stuttgart Schwabstr.'},
                {id:8006699, station_name:'Stuttgart Feuersee'},
                {id:8006700, station_name:'Stuttgart Stadtmitte'},
                {id:8098096, station_name:'Stuttgart Hbf (tief)'},
                {id:8005767, station_name:'Stuttgart Nord'},
                {id:8005770, station_name:'Stuttgart-Feuerbach'},
                {id:8005778, station_name:'Stuttgart-Zuffenhausen'},
                {id:8004338, station_name:'Neuwirtshaus(Porscheplatz)'},
                {id:8003409, station_name:'Korntal'},
                {id:8006268, station_name:'Weilimdorf'},
                {id:8001476, station_name:'Ditzingen'},
                {id:8002892, station_name:'Höfingen'},
                {id:8003652, station_name:'Leonberg'},
                {id:8005236, station_name:'Rutesheim'},
                {id:8000313, station_name:'Renningen'},
                {id:8005001, station_name:'Renningen Süd'},
                {id:8003807, station_name:'Magstadt'},
                {id:8003834, station_name:'Maichingen Nord'},
                {id:8003808, station_name:'Maichingen'},
                {id:8005574, station_name:'Sindelfingen'},
                {id:8001055, station_name:'Böblingen'}]
            },
            {
                id: 8,
                name: "S11",
                stops: [{id:8002785, station_name:'Herrenberg'},
                {id:8004490, station_name:'Nufringen'},
                {id:8002165, station_name:'Gärtringen'},
                {id:8001689, station_name:'Ehningen(b Böblingen)'},
                {id:8003022, station_name:'Hulb'},
                {id:8001055, station_name:'Böblingen'},
                {id:8005201, station_name:'Goldberg(Württ)'},
                {id:8005773, station_name:'Stuttgart-Rohr'},
                {id:8005776, station_name:'Stuttgart-Vaihingen'},
                {id:8005779, station_name:'Stuttgart-Österfeld'},
                {id:8006513, station_name:'Stuttgart Universität'},
                {id:8006698, station_name:'Stuttgart Schwabstr.'},
                {id:8006699, station_name:'Stuttgart Feuersee'},
                {id:8006700, station_name:'Stuttgart Stadtmitte'},
                {id:8098096, station_name:'Stuttgart Hbf (tief)'},
                {id:8005769, station_name:'Stuttgart-Bad Cannstatt'},
                {id:8006743, station_name:'Stuttgart Neckarpark'}]
            },
    ]
    })
}