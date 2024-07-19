import { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import api from '../api/api';
import Breadcrumbs from "../breadscrumb/breadscrumb";
import NavbarConnected from '../general-component/navbarConnected';

const Chartt = () => {
  const [chartData, setChartData] = useState({ labels: [], data: [] });
  const fetchTransactions = async () => {
    try {
      const response = await api.get('/transaction');
      const transactions = response.data;
      console.log("trans");

      const categories = [...new Set(transactions.map((t) => t.categorie))];
      const data = categories.map((cat) =>
        transactions
          .filter((t) => t.categorie === cat)
          .reduce((sum, t) => sum + t.montant, 0)
      );

      setChartData({ labels: categories, data });
    } catch (error) {
      console.log("error dans fetching data", error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  useEffect(() => {
    if (chartData.labels.length > 0 && chartData.data.length > 0) {
      const ctx = document.getElementById('myChart').getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'bar', // ou 'line', 'pie', etc.
        data: {
          labels: chartData.labels,
          datasets: [
            {
              label: 'Depenses pour le mois courant',
              data: chartData.data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [chartData]);

  return (<>
  <NavbarConnected/>
  <Breadcrumbs/>
    <div className='div-chart'>
      <canvas id="myChart" />
    </div>
    </>
  );
};

export default Chartt;
