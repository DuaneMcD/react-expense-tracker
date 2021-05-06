import React, { useContext } from 'react';
import { ExpenseContext } from '../contexts/ExpenseContext';
import { Doughnut, defaults } from 'react-chartjs-2';

defaults.global.legend.position = 'right';

const DonutChart = () => {
  let categories = {};
  const { expenses } = useContext(ExpenseContext);

  let rows = expenses.length;
  for (let i = 0; i < rows; i++) {
    let c = expenses[i].category;
    let a = expenses[i].amount;
    if (!categories[c]) {
      categories = { ...categories, [c]: a };
    } else {
      categories[c] += a;
    }
  }

  const labels = [...Object.keys(categories)];
  const data = [...Object.values(categories)];
  return (
    <>
      <div className='chart-container'>
        <Doughnut
          data={{
            labels,
            datasets: [
              {
                data,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.7)',
                  'rgba(54, 162, 235, 0.7)',
                  'rgba(255, 206, 86, 0.7)',
                  'rgba(75, 192, 192, 0.7)',
                  'rgba(153, 102, 255, 0.7)',
                  'rgba(155, 90, 102, 0.7)',
                  'rgba(74, 122, 255, 0.7)',
                  'rgba(255, 250, 200, 0.7)',
                  'rgba(75, 75, 190, 0.7)',
                  'rgba(100, 200, 55, 0.7)',
                ],
                borderColor: 'none',
                borderWidth: 3,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            fontColor: 'black;',
            tooltips: {
              displayColors: false,
            },
            // plugins: {
            legend: {
              labels: {
                fontSize: 16,
                fontWeight: 'bold',
                fontColor: 'black',
              },
            },
            // },
          }}
        />
      </div>
    </>
  );
};

export default DonutChart;
