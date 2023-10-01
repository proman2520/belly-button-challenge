//Translate the json to a variable
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

//Fetch the json data in the console
d3.json(url).then(function(data) {
    console.log(data);
});

//Next step here
function init() {

    //Use D3 to select the dropdown menu
    let dropdown_menu = d3.select("#selDataset");

    //Initialize the dropdrown menu
    d3.json(url).then((data) => {
        
        let names = data.names;
        
        //Add values to the dropdown menu
        names.forEach((id) => {
            console.log(id);
            dropdown_menu.append("option")
            .text(id).property("value", id);
        });

        //Populate the default option
        let default_sample = names[0];
        console.log(default_sample);

        //Build the initial plots here
        barChart(default_sample);
    });
}

function barChart(sample) {

    //Retrieve data with D3
    d3.json(url).then((data) => {
        let sample_data = data.samples;
        let value = sample_data.filter(result => result.id == sample);
        let value_data = value[0];
        
        //Use sample_values as the values for the bar chart.
        let sample_values = value_data.sample_values;

        //Use otu_ids as the labels for the bar chart.
        let otu_ids = value_data.otu_ids;

        //Use otu_ids as the labels for the bar chart.
        let otu_labels = value_data.otu_labels;

        console.log(otu_ids, otu_labels, sample_values);

        //Display top 10 items (descending)
        let yticks = otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse();
        let xticks = sample_values.slice(0,10).reverse();
        let labels = otu_labels.slice(0,10).reverse();

        let trace = {
            x: xticks,
            y: yticks,
            text: labels,
            type: "bar",
            orientation: "h"
        };

        Plotly.newPlot("bar", [trace]);

    })
}

function bubbleChart() {

}

function metadata() {

}

// function gaugeChart() {
    //Put in bonus.js
// }

function changeSample() {

}

//Call the initialize function
init();