// This function is called when the "Scan Ports" button is clicked
function startScan() {

    // Gets the IP address entered by the user
    const ip = document.getElementById("ipAddress").value.trim();

    // Gets the HTML element where the status will be displayed
    const status = document.getElementById("status");

    // Gets the table body where scan results will be displayed
    const results = document.getElementById("results");

    // Checks whether the user entered an IP address
    if (ip === "") {

        // Displays an error message if the input is empty
        status.textContent = "Please enter an IP address.";

        // Stops the function
        return;
    }

    // Displays the scanning message
    status.textContent = "Scanning " + ip + "...";

    // Removes any previous scan results
    results.innerHTML = "";

    /*
     * IMPORTANT:
     *
     * JavaScript running inside a browser cannot directly execute
     * the Nmap command on your computer.
     *
     * Later, this section will send the IP address to a backend
     * (for example, your C++ Nmap program).
     */

    // Temporary example data for testing the frontend
    const exampleResults = [
        {
            port: 22,
            protocol: "TCP",
            state: "OPEN",
            service: "SSH"
        },
        {
            port: 80,
            protocol: "TCP",
            state: "OPEN",
            service: "HTTP"
        },
        {
            port: 443,
            protocol: "TCP",
            state: "OPEN",
            service: "HTTPS"
        }
    ];

    // Displays the example results after a short delay
    setTimeout(function () {

        // Changes the status message
        status.textContent = "Scan completed for " + ip;

        // Goes through every result
        exampleResults.forEach(function (result) {

            // Creates a new table row
            const row = document.createElement("tr");

            // Adds the port number
            row.innerHTML += `<td>${result.port}</td>`;

            // Adds the protocol
            row.innerHTML += `<td>${result.protocol}</td>`;

            // Adds the state
            row.innerHTML += `<td class="open">${result.state}</td>`;

            // Adds the service name
            row.innerHTML += `<td>${result.service}</td>`;

            // Adds the completed row to the results table
            results.appendChild(row);
        });

    }, 1000);
}
