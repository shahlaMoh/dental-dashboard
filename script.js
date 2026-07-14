window.onload = function () {

const canvas = document.getElementById("chart");

if (!canvas) return;

new Chart(canvas, {
    type: "bar",
    data: {
        labels: ["الشمال","الشرق","الإسكان","الأفق","الزرقاء"],
        datasets: [{
            label: "الدخل",
            data: [10,20,15,30,25],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

};
