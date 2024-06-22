const ctx = document.getElementById('myChart');

const data = {
  labels: ['2010', '2015', '2020', '2025', '2030', '2035', '2040'],
  datasets: [
   {
    label: 'App Developer',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: "#962DFF",
    borderWidth: 1,
    borderRadius: 100,
  },   
   {
    label: 'Software Developer',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: "#4A3AFF",
    borderWidth: 1,
    borderRadius: 100,
  },   
   {
    label: 'Data Scientist',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: "#93AAFD",
    borderWidth: 1,
    borderRadius: 100,
  },   
   {
    label: 'Electrician',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: "#D013EE",
    borderWidth: 1,
    borderRadius: 100,
  },   
   {
    label: 'Carpenter',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: "#B36CFA",
    borderWidth: 1,
    borderRadius: 100,
  },   
   {
    label: 'Surveyer',
    data: [12, 19, 3, 5, 2, 3],
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

