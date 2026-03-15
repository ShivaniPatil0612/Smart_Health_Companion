import { useEffect, useState } from "react";
import axios from "axios";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function AnalyticsDashboard() {

  const [data,setData] = useState(null);

  useEffect(() => {

    axios.get("http://localhost:8080/analytics/weekly")
    .then(res => setData(res.data))
    .catch(err => console.error("Analytics Error",err));

  },[]);

  if(!data) return <h2>Loading dashboard...</h2>;

  const labels = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

  /* Workouts Chart */

  const workoutChart = {
    labels,
    datasets:[
      {
        label:"Workout Calories Burned",
        data:data.workoutCalories,
        backgroundColor:"#4CAF50"
      }
    ]
  };

  /* Stress Chart */

  const stressChart = {
    labels,
    datasets:[
      {
        label:"Stress Level",
        data:data.stressLevels,
        borderColor:"#e74c3c",
        backgroundColor:"#f8c9c9",
        tension:0.4
      }
    ]
  };

  /* Nutrition Chart */

  const caloriesChart = {
    labels,
    datasets:[
      {
        label:"Calories Intake",
        data:data.nutritionCalories,
        backgroundColor:"#3498db"
      }
    ]
  };

  /* Steps Chart */

  const stepsChart = {
    labels,
    datasets:[
      {
        label:"Daily Steps",
        data:data.steps,
        borderColor:"#8e44ad",
        backgroundColor:"#d9c6ef",
        tension:0.4
      }
    ]
  };

  const options = {
    responsive:true,
    plugins:{
      legend:{
        position:"top"
      },
      title:{
        display:false
      }
    }
  };

  return (
    <div style={{padding:"40px"}}>

      <h1>📊 Weekly WellNest Analytics</h1>

      <div style={gridStyle}>

        <div style={card}>
          <h3>💪 Workout Calories</h3>
          <Bar data={workoutChart} options={options}/>
        </div>

        <div style={card}>
          <h3>🧠 Stress Levels</h3>
          <Line data={stressChart} options={options}/>
        </div>

        <div style={card}>
          <h3>🍎 Nutrition Intake</h3>
          <Bar data={caloriesChart} options={options}/>
        </div>

        <div style={card}>
          <h3>🚶 Daily Steps</h3>
          <Line data={stepsChart} options={options}/>
        </div>

      </div>

    </div>
  );
}

const gridStyle = {
  display:"grid",
  gridTemplateColumns:"repeat(2,1fr)",
  gap:"30px",
  marginTop:"30px"
}

const card = {
  background:"white",
  padding:"20px",
  borderRadius:"10px",
  boxShadow:"0 5px 15px rgba(0,0,0,0.2)"
}

export default AnalyticsDashboard;