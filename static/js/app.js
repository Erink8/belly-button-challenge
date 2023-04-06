// Get data from URL
    const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
    
//get the data & log it
    d3.json(url).then(function(data) {
    console.log(data);
    });

//Initialize dashboard
function init() {
//select drop down & populate sample names
    let dropDown = d3.select("#selDataset");
    d3.json(url).then((data) => {

        let names = (data.names);
        //add spamples to dropdown and log each id from the loop
        names.forEach((id) => {
            dropDown.append("option").text(id).property("value",id);
        });

        //set first sample tied to name value
        let firstSample = names[0];
        console.log(firstSample);

        //initial plots
        buildMetadata(firstSample);
        buildBarChart(firstSample);
        buildBubbleChart(firstSample);
       // buildGaugeChart(firstSample);
   })};

//populate metadata
function buildMetadata(sample) {
d3.json(url).then((data) => {
    let metadata = data.metadata;

    // Filter based on the value of the sample
    let value = metadata.filter(result => result.id == sample);

      //log metadata
    console.log(value)

     //first index value of the array
    let index = value[0];

     //reset metadata
    d3.select("#sample-metadata").html("");

    //add key and value pair to dashboard
    Object.entries(index).forEach(([key,value]) => {

        // Log the individual key/value pairs as they are being appended to the metadata panel
        console.log(key,value);

        d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
    });
});

};
//make bar chart
function buildBarChart(sample){

    //get the sample data 
    d3.json(url).then((data) => {
        
        let sampleDetails = data.samples;

        //filter on the value of the sample
        let value = sampleDetails.filter(result => result.id == sample);

        //get the first value from the array
        let valueData = value[0];

        //set the otu_ids, labels, and sample info variables
        let otu_ids = valueData.otu_ids;
        let otu_labels = valueData.otu_labels;
        let sample_values = valueData.sample_values;

        //log the data to the console
        console.log(otu_ids,otu_labels,sample_values);

        //set top ten items to display in descending order
        let yticks = otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse();
        let xticks = sample_values.slice(0,10).reverse();
        let labels = otu_labels.slice(0,10).reverse();
        
        //set up the plot trace for the bar chart
        let trace = {
            x: xticks,
            y: yticks,
            text: labels,
            type: "bar",
            orientation: "h"
        };

        //set the layout
        let layout = {
            title: "Top 10 OTUs Present"
        };

        //plot bar chart
        Plotly.newPlot("bar", [trace], layout)
    });
};

//build the bubble chart
function buildBubbleChart(sample) {

    //get the sample data
    d3.json(url).then((data) => {
        
        let sampleDetails = data.samples;

        //filter on the sample value
        let value = sampleDetails.filter(result => result.id == sample);

        //get the first value from the array
        let valueData = value[0];

        //set the otu_ids, labels, and sample info variables
        let otu_ids = valueData.otu_ids;
        let otu_labels = valueData.otu_labels;
        let sample_values = valueData.sample_values;

        //log to the console
        console.log(otu_ids,otu_labels,sample_values);
        
        //set up the plot trace for the bubble chart
        let trace1 = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Earth"
            }
        };

        //set the layout
        let layout = {
            title: "Bacteria Per Sample",
            hovermode: "closest",
            xaxis: {title: "OTU ID"},
        };

        //plot the bubble chart
        Plotly.newPlot("bubble", [trace1], layout)
    });
};

//update dashboard when drop down value is changed
function optionChanged(value) { 

    //log new value
    console.log(value); 

    //update with new value selection 
    buildMetadata(value);
    buildBarChart(value);
    buildBubbleChart(value);
};

init();