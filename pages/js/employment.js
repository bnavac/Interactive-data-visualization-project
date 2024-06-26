const soft = [
   {
    label: 'Unemployment',
    data: [28, 24, 25, 36, 15, 13, 12],
    backgroundColor: "#962DFF",
    borderWidth: 1,
    borderRadius: 10,
  },   
   {
    label: 'Underemployment',
    data: [19, 13, 20, 8, 10, 10, 6],
    backgroundColor: "#4A3AFF",
    borderWidth: 1,
    borderRadius: 10,
  },   
   {
    label: 'Employment',
    data: [53, 63, 55, 56, 75, 77, 82],
    backgroundColor: "#93AAFD",
    borderWidth: 1,
    borderRadius: 10,
  },   
];

const app = [
   {
    label: 'Unemployment',
    data: [15, 13, 10, 10, 8, 4, 5],
    backgroundColor: "#962DFF",
    borderWidth: 1,
    borderRadius: 10,
  },   
   {
    label: 'Underemployment',
    data: [33, 22, 19, 18, 17, 19, 15],
    backgroundColor: "#4A3AFF",
    borderWidth: 1,
    borderRadius: 10,
  },   
   {
    label: 'Employment',
    data: [52, 65, 71, 72, 75, 77, 80],
    backgroundColor: "#93AAFD",
    borderWidth: 1,
    borderRadius: 10,
  },   
];
const elev = [
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
const elec = [
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
const dataS = [
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
const surv = [
   {
    label: 'Unemployment',
    data: [7, 6, 8, 5, 5, 6, 2],
    backgroundColor: "#962DFF",
    borderWidth: 1,
    borderRadius: 10,
  },   
   {
    label: 'Underemployment',
    data: [5, 2, 2, 4, 5, 8, 7],
    backgroundColor: "#4A3AFF",
    borderWidth: 1,
    borderRadius: 10,
  },   
   {
    label: 'Employment',
    data: [88, 92, 90, 91, 90, 87, 91],
    backgroundColor: "#93AAFD",
    borderWidth: 1,
    borderRadius: 10,
  },   
];

const careers = [soft, app, elev, elec, dataS, surv];
const ctx = document.getElementById('myChart');

const data = {
    labels: [ "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
    datasets: careers[0],
};


var chart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    scales: {
      y: {
        max: 100,
        beginAtZero: true,
          stacked: true,
          display: true,
          title: {
              display: true,
              text: 'Percentage(%)'
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
            text: 'Employment Statistics'
        }
    }
  }
});

function val(x) {
    const thing = document.getElementById('dropthing');
    thing.textContent = x; 
}
