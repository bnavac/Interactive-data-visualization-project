
const ctx = document.getElementById('myChart');

const data = {
  labels: ['Application Developer', 'Software Developer', 'Data Scientist', 'Electrician', 'Carpenter', 'Surveyor'],
  datasets: [
   {
    label: '1',
    data: [4, 12, 12, 20, 15, 12],
    backgroundColor: "#962DFF",
    borderWidth: 1,
    borderRadius: 10,
  },   
   {
    label: '2',
    data: [4, 27, 33, 22, 15, 15],
    backgroundColor: "#4A3AFF",
    borderWidth: 1,
    borderRadius: 10,
  },   
   {
    label: '3',
    data: [4, 25, 22, 22, 15, 12],
    backgroundColor: "#93AAFD",
    borderWidth: 1,
    borderRadius: 10,
  },   
   {
    label: '4',
    data: [6, 8, 10, 10, 15, 8],
    backgroundColor: "#D013EE",
    borderWidth: 1,
    borderRadius: 10,
  },   
   {
    label: '5',
    data: [6, 7, 7, 5, 18, 10],
    backgroundColor: "#B36CFA",
    borderWidth: 1,
    borderRadius: 10,
  },   
   {
    label: '6',
    data: [2, 7, 8, 13, 7, 18],
    backgroundColor: "#7E74EB",
    borderWidth: 1,
    borderRadius: 10,
  },   
   {
    label: '7',
    data: [74, 14, 8, 8, 15, 25],
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

