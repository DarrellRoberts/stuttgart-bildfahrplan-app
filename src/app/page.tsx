import Chart from "@/components/chart/Chart";

//fetching routes. Would fetch from seperate backend in scaled version.
async function getTrainRoute() {
  try {
  const response = await fetch(
    "/api/trainroutes",{
    method: "GET", next: {revalidate: 5}
  })
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

//fetching trips. Would fetch from seperate backend in scaled version.
async function getTrips() {
  try {
  const response = await fetch("/api/trips", {
    method: "GET", next: {revalidate: 5}
  })
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
const trainPromise = getTrainRoute();
const tripsPromise = getTrips();
const trainRoutes = await trainPromise;
const trainTrips = await tripsPromise;

  return (
    <>
      <Chart routes={trainRoutes} trips={trainTrips}/>
    </>
);
}
