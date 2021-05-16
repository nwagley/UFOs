// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    }
    );
  });
}
var filters = {}
function updateFilters() {
  // Grab the datetime value from the filter
  // 4a. Save the element that was changed as a variable.
  var inputelement = d3.select(this)
  // 4b. Save the value that was changed as a variable.
  var inputvalue = inputelement.property("value")
  // 4c. Save the id of the filter that was changed as a variable.
  var inputid = inputelement.attr("id")


  // Check to see if a date was entered and filter the
  // data using that date.
  if (inputelement) {
    filters[inputid] = inputvalue
  }
  else {
    delete filters[filterid]
  }
  // Apply `filter` to the table data to only keep the
  filterTable()
}
function filterTable() {
  let filteredData = tableData;
  Object.entries(filters).forEach(([key, value]) => {
    filteredData = filteredData.filter(row => row[key] === value);
  })
  buildTable(filteredData);
}

  
// Attach an event to listen for the form button
d3.selectAll("input").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData);