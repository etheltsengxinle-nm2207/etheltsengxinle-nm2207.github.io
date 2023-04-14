//Attempt 1: clicking on the legend allows you to control which data is visible/ hidden
//but only works for specific words 

//Attempt 2: making separate buttons for each dataset, check if the dataset is visible/ hidden and use if statement to make it hidden/ visible
//works but takes 10-20 seconds to load when the button is clicked
function changeData(x){
  //check if dataset is visible
  //console.log(myChart.isDatasetVisible(x));
  const showValue = myChart.isDatasetVisible(x);
  //if it is visible, change it to hidden
  if (showValue === true) {
    myChart.data.datasets[x].hidden=true;
    console.log(myChart.data.datasets[x].hidden);
  }
  //if it is hidden, change it to visible
  if (showValue === false) {
    myChart.data.datasets[x].hidden=false;

  }
}

//Attempt 3: obtain input from user (from the text box with an id of "input1") to change the datasets shown
//but not sure how to tell the function that the input is also a dataset 
function changedata () {
  //console.log("changedata");
  var textinput = document.getElementById("input1").value;
  console.log(textinput);
  //tell the function that the input value is a dataset
  
  //for loop changes data for each line in the chart
  for (let x = 0; x < myChart.data.datasets.length; x++) {
    myChart.data.datasets[x].data = buttonvalue;
  }
}
//event listener to trigger the changeData function when the generate data button is clicked
input1.addEventListener ("click", function() {changedata()});

//Attempt 4: same concept as attempt 3, but using a button instead of text input (not fixed yet)
//to show only english or only chinese datasets
function chiData () {
  //to test if the function can replace data in the graph 
  //myChart.data.datasets[0].data = chinese[0];
  for (let i=0; i < myChart.data.datasets.length; i++) {
      myChart.data.datasets[i].data = [chinese[i]];
  }
  myChart.update();
}


function engData () {
  for (let x=0; x < myChart.data.datasets.length; x++) {
    myChart.data.datasets[x].data = [english[x]];
    //console.log(myChart.data.datasets[x].data)
  }
  myChart.update();
}



//old code for changing slider event  
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