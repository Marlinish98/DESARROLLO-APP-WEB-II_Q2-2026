'use client';

import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { maxMinProductos } from '@/app/servicios/api';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function page() {

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Valor Máximo por Tipo',
        data: [],
        backgroundColor: [
          '#3b82f6',
          '#ef4444',
          '#22c55e',
          '#f59e0b',
          '#a855f7',
        ],
        borderWidth: 1,
      }
    ]
  });

  useEffect(() => {

    maxMinProductos()
      .then((data) => {

        const labels = data.data.map((item: any) => item.productType);
        const values = data.data.map((item: any) => item.valor_maximo);

        setChartData({
          labels,
          datasets: [
            {
              label: 'Valor Máximo por Tipo',
              data: values,
              backgroundColor: [
                '#3b82f6',
                '#ef4444',
                '#22c55e',
                '#f59e0b',
                '#a855f7',
              ],
              borderWidth: 1,
            }
          ]
        });

      });

  }, []);

  return (
    <div style={{ width: '500px', margin: 'auto' }}>
      <h2 className='text-center'>Valores Maximo</h2>
      <Pie data={chartData} />
    </div>
  );
}