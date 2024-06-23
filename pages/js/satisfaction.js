
const ctx = document.getElementById('myChart');
const num = { 'Application Developer': 0,
    'Software Developer': 1,
    'Data Scientist': 2,
    'Electrician': 3,
    'Carpenter': 4,
    'Surveyor': 5,
};

const numTo = { 0: 'Application Developer',
    1: 'Software Developer',
    2: 'Data Scientist',
    3: 'Electrician',
    4: 'Carpenter',
    5: 'Surveyor',
};

const thing = {
    0: [4, 4, 4, 6, 6, 2, 74],
    1: [12, 27, 25, 8, 7, 7, 14],
    2: [12, 33, 22, 10, 7, 8, 8],
    3: [20, 22, 22, 10, 5, 13, 8],
    4: [15, 15, 15, 15, 18, 7, 15],
    5: [12, 15, 12, 8, 10, 18, 25],
}
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

const chart = new Chart(ctx, {
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


//num
//thing
function val(x,y) {
    const find = document.getElementById(x);
    const attr = find.getAttributeNode("checked");
    if (attr === null) {
        if (chart.data.datasets.length > 0) {
            const labels = chart.data.labels;
            const arr = [];
            let i = 0;
            for (i = 0; i < labels.length; i++) {
                arr.push(num[labels[i]]);
            }
            for (i = 0; i < arr.length; i++) {
                if (y < arr[i]){
                    break;
                }
            }
            chart.data.labels.splice(i, 0, numTo[y]);
            const stuff = chart.data.datasets;
            for (let j = 0; j < stuff.length; j++) {
                stuff[j].data.splice(i, 0, thing[y][j]);
            }
            chart.update();
            find.setAttribute("checked", "");
        }
    }else {
        const labels = chart.data.labels;
        let i = 0;
        const arr = [];
        for (i = 0; i < labels.length; i++) {
            arr.push(num[labels[i]]);
        }
        for (i = 0; i < arr.length; i++) {
            if (y < arr[i]){
                break;
            }
        }
        labels.splice(i-1, 1);
        const stuff = chart.data.datasets;
        for (let j = 0; j < stuff.length; j++) {
            stuff[j].data.splice(i-1, 1);
        }
        chart.update();
        find.removeAttributeNode(attr);
    }
}
