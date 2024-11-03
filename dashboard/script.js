function addComment() {
    const commentInput = document.getElementById("commentInput");
    const commentList = document.getElementById("commentList");

    if (commentInput.value !== "") {
        const newComment = document.createElement("li");
        newComment.textContent = commentInput.value;
        commentList.appendChild(newComment);
        commentInput.value = ""; // Clear input field
    }
}

// Chart.js configuration (optional if you want to add chart functionalities)
window.onload = function() {
    // Line Chart
    const lineCtx = document.getElementById("lineChart").getContext("2d");
    new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April'],
            datasets: [{
                label: 'Views',
                data: [500, 1000, 3000, 6000],
                backgroundColor: 'rgba(255, 255, 255, 255)',
                borderColor: 'rgba(255, 255, 255, 255)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Pie Chart
    const pieCtx = document.getElementById("pieChart").getContext("2d");
    new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4'],
            datasets: [{
                label: 'Data',
                data: [30, 20, 25, 25],
                backgroundColor: [
                    'rgb(131, 230, 255)',
                    'pink',
                    'magenta',
                    'yellow'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        }
    });
};

function addComment() {
    const nameInput = document.getElementById("nameInput");
    const commentInput = document.getElementById("commentInput");
    const commentList = document.getElementById("commentList");

    if (nameInput.value !== "" && commentInput.value !== "") {
        // Buat elemen baru untuk menampilkan nama dan komentar
        const newComment = document.createElement("li");
        newComment.innerHTML = `<strong>${nameInput.value}</strong>: ${commentInput.value}`;

        // Tambahkan elemen baru ke daftar komentar
        commentList.appendChild(newComment);

        // Kosongkan input setelah komentar dikirim
        nameInput.value = "";
        commentInput.value = "";
    }
}
