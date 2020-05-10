// Assign the data from `data.js` to a descriptive variable
var tableData = data;

console.log(tableData);

// Setup

// Select the tbody
var tbody = d3.select("tbody");
// Select the buttons
var filter_button = d3.select("#filter-btn");
var clear_button = d3.select("#clear-btn");
// Select the input element and get the raw HTML node
var filter_bar_0 = d3.select("#datetime");


// Create a function to display the data list

table(tableData);

function table() {
    data.forEach((ufo) => {
        var tr = tbody.append("tr");
        for (key in ufo) {
            tr.append("td").text(ufo[key]);
        }
    });
};


// Create event handlers

filter_button.on("click", runEnter);
clear_button.on("click", reset);


// Complete the filter button function 

function runEnter() {

    // Get the value property of the input element
    var input0 = filter_bar_0.property("value");
    console.log(input0)

    var filteredData = tableData;

    // Define conditions for filteredData

    if (input0) {
        filteredData = filteredData.filter(data => data.datetime === input0);
    }

    if (filteredData != tableData) {
        tbody.selectAll('tr').remove();
        tbody.selectAll('td').remove();

        filteredData.forEach((search) => {
            var new_tr = tbody.append("tr");
            for (key in search) {
                new_tr.append("td").text(search[key]);
            }
        })
    } else {
        // Revert to displaying all the ufo sightings in a table format
        table(tableData);
    }
};


// Complete the reset button function 

function reset() {

    // Clear the input element
    d3.select("datetime").value = "";

    // Remove any children from the table
    tbody.html("");

    // Revert to displaying all the ufo sightings in a table format
    table(tableData);
}