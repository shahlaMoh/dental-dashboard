fetch("data.json")
.then(response => response.json())
.then(data => {
    document.getElementById("dashboard").innerHTML = `
        <h2>Dashboard Connected Successfully</h2>
        <p>Total Patients: ${data.totalPatients}</p>
        <p>Total Revenue: ${data.totalRevenue} SAR</p>
    `;
});
