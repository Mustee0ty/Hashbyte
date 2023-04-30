import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js"

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

const ActivitiesChart = () => {
  const data = {
    labels: [
      "Sun",
      "",
      "Mon",
      "",
      "Tues",
      "",
      "Wed",
      "",
      "Thurs",
      "",
      "Fri",
      "",
      "Sat",
    ],
    dataset: [
      {
        data: [8, 9, 7.8, 7.9, 6, 7, 8, 6, 5, 7.8, 5, 8, 6],
        backgroundColor: "transparent",
        borderColor: "#5B63E6",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.5,
      },
    ],
  }

  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 2,
        max: 10,
        ticks: {
          stepSize: 2,
          callback: (value) => value + "K",
        },
      },
      grid: {
        borderDash: [10],
      },
    },
  }

  return (
    <div style={{ width: "500px", height: "500px", marginLeft: "20px" }}>
      <Line data={data} options={options}></Line>
    </div>
  )
}

export default ActivitiesChart
