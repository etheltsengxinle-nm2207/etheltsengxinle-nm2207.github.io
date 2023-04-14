const data = {
    labels: ["Cold War", "Utopia", "Eden", "Amen", "Sandwich", "Whiskey", "Disco", "Jazz"],

    datasets: [{
        label: "English",
        data: [coldwar[0], utopia[0], eden[0], amen[0], sandwich[0], whiskey[0], disco[0], jazz[0]],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      },
      {
        label: 'Chinese',
        data: [lengzhan[0], wutuobang[0], yidianyuan[0], amen2[0], sanmingzhi[0], weishijijiu[0], jueshiyue[0]],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
      }
    ]};

let radarChart = new Chart("radarChart", {
  type: "radar",
  data: data,
  options: {}
});

//add a slider in html with the id "slider"
var slider = document.getElementById("slider");

//update the graph dynamically according to slider value
slider.oninput = function() {
  //console.log(this.value);

  //scale the slider value to an integer between 0 and 100
  var scaledvalue = Math.floor(this.value*100);
  //console.log(scaledvalue);

  //assign it to the data value of the array
  data.datasets[0].data[0] = coldwar[scaledvalue];
  data.datasets[0].data[0] = coldwar[scaledvalue];
  data.datasets[0].data[1] = utopia[scaledvalue];
  data.datasets[0].data[2] = eden[scaledvalue];
  data.datasets[0].data[3] = amen[scaledvalue];
  data.datasets[0].data[4] = sandwich[scaledvalue];
  data.datasets[0].data[5] = whiskey[scaledvalue];
  data.datasets[0].data[6] = disco[scaledvalue];
  data.datasets[0].data[7] = jazz[scaledvalue];

  data.datasets[1].data[0] = lengzhan[scaledvalue];
  data.datasets[1].data[1] = wutuobang[scaledvalue];
  data.datasets[1].data[2] = yidianyuan[scaledvalue];
  data.datasets[1].data[3] = amen2[scaledvalue];
  data.datasets[1].data[4] = sanmingzhi[scaledvalue];
  data.datasets[1].data[5] = weishijijiu[scaledvalue];
  data.datasets[1].data[6] = disike[scaledvalue];
  data.datasets[1].data[7] = jueshiyue[scaledvalue];

  //update the chart
  radarChart.update();

  //indicate what year it is
  let year = scaledvalue + 1900;
  document.getElementById("year").innerHTML = "The year is: " + year;

}

