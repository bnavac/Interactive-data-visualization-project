
const ctx = document.getElementById('myChart');

const data = {
    labels: [ "2010", "2015", "2020", "2025", "2030", "2035", "2040"],
    datasets: [
    {
      label: 'Software Developer',
      data: [16300,100000, 70000, 33000, 19000, 10000, 4000],
     borderColor: "#962DFF",
      fill: false,
      tension: 0.4
    },
    {
      label: 'App Developer',
      data: [15000,80000, 55000, 30000, 10000, 0, 0],
     borderColor: "#4A3AFF",
      fill: false,
      tension: 0.4
    },
    {
      label: 'Elevator Mechanic',
      data: [20000,12000,4000,2000,0,0,0],
     borderColor: "#93AAFD",
      fill: false,
      tension: 0.4
    },
    {
      label: 'Electrician',
      data: [20000,18000,15000,10000,8000,4000,0],
     borderColor: "#D013EE",
      fill: false,
      tension: 0.4
    },
    {
      label: 'Data Scientist',
      data: [30000,120000,105000,80000,50000,10000,2000],
     borderColor: "#B36CFA",
      fill: false,
      tension: 0.4
    },
    {
      label: 'Surveyer',
      data: [35000,20000,15000,8000,5000,0,0],
     borderColor: "#7E74EB",
      fill: false,
      tension: 0.4
    },
    ]
};


new Chart(ctx, {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
          display: true,
          title: {
              display: true,
              text: 'Total Debt In US Dollars'
          }
      },
        x: {
            beginAtZero: true,
            display: true,
            title: {
                display:true,
                text: 'Years'
            }
        }
    },
    interaction: {
        intersect: false,
    },
    plugins: {
        legend: { 
            position: 'top',
        },
        title: {
            display: true,
            text: 'Projected Debt After Graduation'
        }
    }
  }
});

