
const ctx = document.getElementById('myChart');

const data = {
  labels: ['Application Developer', 'Software Developer', 'Data Scientist', 'Electrician', 'Carpenter', 'Surveyer'],
  datasets: [
   {
    label: '1',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: "#962DFF",
    borderWidth: 1,
    borderRadius: 10,
  },   
   {
    label: '2',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: "#4A3AFF",
    borderWidth: 1,
    borderRadius: 10,
  },   
   {
    label: '3',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: "#93AAFD",
    borderWidth: 1,
    borderRadius: 10,
  },   
   {
    label: '4',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: "#D013EE",
    borderWidth: 1,
    borderRadius: 10,
  },   
   {
    label: '5',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: "#B36CFA",
    borderWidth: 1,
    borderRadius: 10,
  },   
   {
    label: '6',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: "#7E74EB",
    borderWidth: 1,
    borderRadius: 10,
  },   
   {
    label: '7',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: "#1839B0",
    borderWidth: 1,
    borderRadius: 10,
  },   
  ]
};

new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    indexAxis: 'y',
    responsive: true,
    scales: {
      y: {
        stacked:true,
        beginAtZero: true,
          display: true,
          title: {
              display: true,
              text: 'Occupation'
          }
      },
        x: {
        stacked:true,
            display: true,
            title: {
                display: true,
                text: 'Rating In Percentage (%)'
            }
        }
    },
    plugins: {
        legend: { 
            position: 'top',
        },
        title: {
            display: true,
            text: 'Projected Gross Income'
        }
    }
  }
});

