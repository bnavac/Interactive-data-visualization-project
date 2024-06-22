
const ctx = document.getElementById('myChart');

const data = {
    labels: [ "2010", "2015", "2020", "2025", "2030", "2035", "2040"],
    datasets: [
    {
      label: 'Software Developer',
      data: [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170],
     borderColor: "#962DFF",
      fill: false,
      tension: 0.4
    },
    {
      label: 'Software Developer',
      data: [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170],
     borderColor: "#4A3AFF",
      fill: false,
      tension: 0.4
    },
    {
      label: 'Software Developer',
      data: [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170],
     borderColor: "#93AAFD",
      fill: false,
      tension: 0.4
    },
    {
      label: 'Software Developer',
      data: [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170],
     borderColor: "#D013EE",
      fill: false,
      tension: 0.4
    },
    {
      label: 'Software Developer',
      data: [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170],
     borderColor: "#B36CFA",
      fill: false,
      tension: 0.4
    },
    {
      label: 'Software Developer',
      data: [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170],
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

