//Translate the json to a variable
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

//Fetch the json data in the console
d3.json(url).then(function(data) {
    console.log(data);
});

//Next step here
function init() {

    //Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");

    //Initialize the dropdrown menu
    d3.json(url).then((data) => {
        
        let names = data.names;
        
        //Add values to the dropdown menu
        names.forEach((id) => {
            console.log(id);
            dropdownMenu.append("option")
            .text(id).property("value", id);
        });

        //Populate the default option
        let default_sample = names[0];
        console.log(default_sample);

        //Build the initial plots here
    });
}