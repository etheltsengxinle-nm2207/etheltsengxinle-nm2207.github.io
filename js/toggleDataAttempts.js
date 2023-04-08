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



for (let i=0; i < coldwar.length; i++) {
  data.datasets[0].data[0] = coldwar[i];
  console.log(data.datasets[0].data[0]);

}


counter = counter + 1;
  data.datasets[0].data[0] = coldwar[counter];
  console.log(data.datasets[0].data[0])  ;
