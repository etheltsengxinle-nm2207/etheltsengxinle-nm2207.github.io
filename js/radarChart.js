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

//update the graph according to slider value
function changeSlider () {
  //get the slider value (a number from 0 to 1)
  var slidervalue = document.getElementById("slider").value;
  //console.log(slidervalue);
  
  //scale the slider value to an integer between 0 and 100
  var scaledvalue = Math.floor(slidervalue*100);
  //console.log(scaledvalue);

  //assign it to the data value of the array
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

  //indicate what year the data is from
  let year = scaledvalue + 1900;
  document.getElementById("year").innerHTML = "The year is: " + year;
  };
  

//event listener that calls the changeSlider function when slider is changed
slider.addEventListener ("change", function() {changeSlider()});
  


function next () {
  //get the slider value (a number from 0 to 1)
  var slidervalue = document.getElementById("slider").value;
  //console.log(slidervalue);
  
  //scale the slider value to an integer between 0 and 100
  var scaledvalue = Math.floor(slidervalue*100);

  var newvalue = scaledvalue + 1;
  console.log (newvalue);

  data.datasets[0].data[0] = coldwar[newvalue];
  data.datasets[0].data[1] = utopia[newvalue];
  data.datasets[0].data[2] = eden[newvalue];
  data.datasets[0].data[3] = amen[newvalue];
  data.datasets[0].data[4] = sandwich[newvalue];
  data.datasets[0].data[5] = whiskey[newvalue];
  data.datasets[0].data[6] = disco[newvalue];
  data.datasets[0].data[7] = jazz[newvalue];

  data.datasets[1].data[0] = lengzhan[newvalue];
  data.datasets[1].data[1] = wutuobang[newvalue];
  data.datasets[1].data[2] = yidianyuan[newvalue];
  data.datasets[1].data[3] = amen2[newvalue];
  data.datasets[1].data[4] = sanmingzhi[newvalue];
  data.datasets[1].data[5] = weishijijiu[newvalue];
  data.datasets[1].data[6] = disike[newvalue];
  data.datasets[1].data[7] = jueshiyue[newvalue];
  

  radarChart.update();

};


//To-do: 
//label steps for slider
//previous/ next buttons
//update chart while slider is moving, not when slider stops moving