'use client';

import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { sumaTipoProducto } from '@/app/servicios/api';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Page() {

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Total por Tipo de Producto',
        data: [],
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      }
    ]
  });

  useEffect(() => {

    sumaTipoProducto()
      .then((data) => {

        const labels = data.data.map((item: any) => item.productType);
        const suma = data.data.map((item: any) => item.total_valor);

        setChartData({
          labels,
          datasets: [
            {
              label: 'Total por Tipo de Producto',
              data: suma,
              backgroundColor: 'rgba(10, 67, 246, 0.6)',
              borderColor: 'rgba(59, 130, 246, 1)',
              borderWidth: 1,
            }
          ]
        });

      });

  }, []);

  return (
    <div style={{ width: '600px', margin: 'auto' }}>
      <h2>Bar Chart - Total por Tipo de Producto</h2>
      <Bar data={chartData} />
    </div>
  );
}