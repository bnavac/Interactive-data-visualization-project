

const ctx = document.getElementById('myChart');
const datasets = [
   {
    label: 'Unemployment',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: "#962DFF",
    borderWidth: 1,
    borderRadius: 10,
  },   
   {
    label: 'Underemployment',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: "#4A3AFF",
    borderWidth: 1,
    borderRadius: 10,
  },   
   {
    label: 'Employment',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: "#93AAFD",
    borderWidth: 1,
    borderRadius: 10,
  },   
];

const data = {
    labels: [ "1010", "2015", "2020", "2025", "2030", "2035", "2040"],
    datasets: datasets,
};


new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
          stacked: true,
          display: true,
          title: {
              display: true,
              text: 'Total Debt In US Dollars'
          }
      },
        x: {
            beginAtZero: true,
            display: true,
            stacked: true,
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
            position: 'right',
            align: 'start'
        },
        title: {
            display: true,
            text: 'Projected Debt After Graduation'
        }
    }
  }
});

