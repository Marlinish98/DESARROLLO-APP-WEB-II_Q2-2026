'use client';
import { promedioCategoria } from '@/app/servicios/api';
import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function page() {

 const [chartData, setChartData] = useState({
  labels: [],
  datasets: [
    {
      label: 'Promedio por Categoría',
      data: [],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }
  ]
})

 useEffect(() => {

    promedioCategoria()
    .then((data) => {

        const labels = data.data.map((item: any) => item.categoryCode);
        const promedio = data.data.map((item: any) => item.promedioCategoria);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Promedio por Categoría',
              data: promedio,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            }
          ]
        })

    })

 }, [])

 return (
    <div>
      <Line data={chartData} />
    </div>
 )
}