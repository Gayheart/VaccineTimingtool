function dateCalc() {

  // Intial date from form
    var x = document.getElementById("frm1");
    var text = x.elements[1].value;

    const d = new Date(text);
    
  // Calculate the dates for each dose
    const dates = [
      { label: "First Dose (Day 0)", date: new Date(d) },
      { label: "Second Dose (Day 3)", date: new Date(new Date(d).setDate(d.getDate() + 3)) },
      { label: "Third Dose (Day 7)", date: new Date(new Date(d).setDate(d.getDate() + 7)) },
      { label: "Fourth Dose (Day 14)", date: new Date(new Date(d).setDate(d.getDate() + 14)) },
      { label: "Fifth Dose (Day 28)", date: new Date(new Date(d).setDate(d.getDate() + 28)) },
    ];

  // Format the dates and output them to the page
    let output = ""; // Initialize an empty string to store the formatted dates

    // Iterate over the dates array using forEach()
    dates.forEach((dateObj) => {
    // Format each date object and append it to the output string
    output += `${dateObj.label}: ${dateObj.date.toLocaleDateString('en-US', { timeZone: 'UTC' })}\n`;
    });

  // Display the formatted dates on the web page
    document.getElementById("Dates").innerHTML = output;


  // Create a shareable JSON object
  let shareableData = {
      vaccinationSchedule: dates.map((dateObj) => ({
          label: dateObj.label,
          date: dateObj.date.toLocaleDateString('en-US', { timeZone: 'UTC' }),
      })),
  };
  localStorage.setItem("shareableData", JSON.stringify(shareableData));
}

// Function to share the vaccination schedule
function shareSchedule() {
  // Get the shareable JSON object from local storage
  let shareableData = JSON.parse(localStorage.getItem("shareableData"));

  // Share the data using AWS SNS or other sharing mechanisms
  // For demonstration purposes, we'll just log the data to the console
  console.log(shareableData);
}
