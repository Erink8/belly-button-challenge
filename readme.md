# Belly Button Biodiversity
<img width="851" alt="Screenshot 2023-04-06 at 4 08 30 PM" src="https://user-images.githubusercontent.com/119360371/230494737-66a67ae8-735f-4a9c-9d60-1be00b6445e1.png">

## Background
In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

Dataset: (http://robdunnlab.com/projects/belly-button-biodiversity/)

Instructions
Complete the following steps:

Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

 - Use sample_values as the values for the bar chart.

 - Use otu_ids as the labels for the bar chart.

 - Use otu_labels as the hovertext for the chart.



Create a bubble chart that displays each sample.

 - Use otu_ids for the x values.

 - Use sample_values for the y values.

 - Use sample_values for the marker size.

 - Use otu_ids for the marker colors.

 - Use otu_labels for the text values.


Display the sample metadata, i.e., an individual's demographic information.

Display each key-value pair from the metadata JSON object somewhere on the page.

Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file

Note: parts of the JS code were completed with support from workplace peers and Stack Overflow
