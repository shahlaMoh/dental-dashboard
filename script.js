const ctx = document.getElementById('chart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['الشمال','الشرق','الإسكان','الأفق','الزرقاء'],
        datasets: [{
            label: 'الدخل',
            data: [0,0,0,0,0]
        }]
    },
    options: {
        responsive: true
    }
});
