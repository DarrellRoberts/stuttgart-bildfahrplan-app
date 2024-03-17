"use client";
import {useState, useContext} from "react";
import { ThemeContext } from "../../app/context/ThemeContext";
import { Line } from "react-chartjs-2";
import Loader from "../loader/Loader";
import Input from "../input/Input";
import styles from "./chart.module.css"

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

type Trips = {
  trips: [ 
    {
        id: number,
        route_id: number,
        path: number[],
        arriving_times: number[],
        departing_times: number[],
        color: string,
        trip: Trip[],
    },
  ]
}

type Trip = {
  station_name: string,
  arriving_time: number
}

type Routes = {
    trainroutes: [
      {id: number,
    name: string,
    stops: [
        {
        id: number,
        station_name: string
        }
    ]
  }
]
}

export default function LineChart(props: {routes: Routes, trips: Trips}) {
const { routes, trips } = props
const { light, dark, isLightTheme, toggleTheme } = useContext(ThemeContext);

//Manages the state of the SBahn
const [sbahn, setSbahn] = useState<string>("S3")

const themeStyles = isLightTheme ? light : dark;

//Array which includes routes of chosen SBahn. Needed for xaxis
const sRoute = routes?.trainroutes.find(data => data.name === `${sbahn}`)

//Array which filters trips of chosen SBahn. Needed for plotting graph 
const sTrips = trips?.trips.filter(data => data.route_id === sRoute?.id);

//plotting graph
const data = {
  labels: sRoute?.stops?.map(data => data.station_name),
  datasets: 
    sTrips?.map((journey) =>
      (
        {
          label: `Trip ${journey.id}`,
          data: journey.trip?.map(data => data.arriving_time),
          borderColor: journey.color,
          borderWidth: 3,
          pointBorderColor: journey.color,
          pointBorderWidth: 3,
          tension: 0,
          fill: false,
          hidden: journey ? false : true, 
        }
      )
    )
};

const options = {
    responsive: true,
    maintainAspectRation: true,
    scales: {
      y: {
        ticks: {
          font: {
            size: 17,
          },
        },
        title: {
          display: true,
          text: "Time",
          padding: {
            bottom: 10,
          },
          font: {
            size: 30,
            family: "Arial",
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 13,
          },
        },
        title: {
          display: true,
          text: "Station Name",
          padding: {
            top: 10,
          },
          font: {
            size: 30,
            family: "Arial",
          },
        },
      },
    },
};

  return (
    <div className={styles.chartCon} style={{backgroundColor: themeStyles?.bgColor}}>
      <div className={styles.headerCon}>
      <Input setSbahn={setSbahn} sbahn={sbahn}/>
      <button style={{color: themeStyles?.textColor}} onClick={toggleTheme}>{isLightTheme ? "Dark Mode" : "Light Mode"}</button>
      </div>
      <h1 className={styles.chartTitle} style={{color: themeStyles?.textColor}}>
        Stuttgart Train-Timetables Graph
      </h1>
      <div className={styles.chartGraph}>
        {sRoute && sTrips ? (
        <Line className={styles.lineCon} data={data} options={options}></Line>) : 
        <div className="flex justify-center">
        <Loader message={"Loading..."}/>
        </div>
        }
        {sTrips.length === 0 ? (
        <div className={styles.loaderCon}>
        <Loader message={"No trips added..."}/>
        </div>
        ) : null}
      </div>
    </div>
  );
}
