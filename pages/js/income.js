const ctx = document.getElementById('myChart');

const data = {
  labels: ['2010', '2015', '2020', '2025', '2030', '2035', '2040'],
  datasets: [
   {
    label: 'App Developer',
    data: [10000, 45000, 70000, 100000, 155000, 185000, 230000],
    backgroundColor: "#962DFF",
    borderWidth: 1,
    borderRadius: 100,
  },   
   {
    label: 'Software Developer',
    data: [6000, 55000, 75000, 115000, 165000, 200000, 240000],
    backgroundColor: "#4A3AFF",
    borderWidth: 1,
    borderRadius: 100,
  },   
   {
    label: 'Data Scientist',
    data: [5000, 45000, 65000, 110000, 155000, 180000, 260000],
    backgroundColor: "#1370bd",
    borderWidth: 1,
    borderRadius: 100,
  },   
   {
    label: 'Electrician',
    data: [45000, 60000, 75000, 100000, 135000, 145000, 165000],
    backgroundColor: "#D013EE",
    borderWidth: 1,
    borderRadius: 100,
  },   
   {
    label: 'Carpenter',
    data: [75000, 80000, 85000, 95000, 120000, 140000, 155000],
    backgroundColor: "#57109e",
    borderWidth: 1,
    borderRadius: 100,
  },   
   {
    label: 'Surveyor',
    data: [58000, 75000, 82000, 100000, 148000, 160000, 185000],
    backgroundColor: "#7E74EB",
    borderWidth: 1,
    borderRadius: 100,
  },   
  ]
};

new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
          display: true,
          title: {
              display: true,
              text: 'Total Income In US Dollars'
          }
      },
        x: {
            display: true,
            title: {
                display: true,
                text: 'Years'
            }
        }
    },
    plugins: {
        legend: { 
            position: 'right',
        },
        title: {
            display: true,
            text: 'Projected Gross Income'
        }
    }
  }
});

