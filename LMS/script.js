
document.addEventListener("DOMContentLoaded", function () {

    const ctx = document.getElementById("issueReturnChart").getContext("2d");

    new Chart(ctx, {
        type: "bar",

        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

            datasets: [
                {
                    label: "Books Issued",
                    data: [12, 19, 8, 15, 10, 14, 9],
                    backgroundColor: "rgba(108, 61, 244, 0.85)",
                    borderColor: "#6c3df4",
                    borderWidth: 1,
                    borderRadius: 10,
                    borderRadius: 8
                },

                {
                    label: "Books Returned",
                    data: [8, 14, 6, 11, 9, 10, 7],
                    backgroundColor: "rgba(22, 163, 74, 0.85)",
                    borderColor: "#16a34a",
                    borderWidth: 1,
                    borderRadius: 10,
                    borderRadius: 8
                }
            ]
        },

        options: {
            responsive: true,

            plugins: {
                legend: {
                    position: "top"
                }
            },

            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

});
function showTab(tabId, element) {

    // Hide all sections
    document.querySelectorAll(".tab-content").forEach(section => {
        section.style.display = "none";
    });

    // Remove active class
    document.querySelectorAll(".tab").forEach(tab => {
        tab.classList.remove("active-tab");
    });

    // Show selected section
    document.getElementById(tabId).style.display = "block";

    // Add active class
    element.classList.add("active-tab");
}

if (window.ChartDataLabels) {
    Chart.register(ChartDataLabels);
}
document.addEventListener("DOMContentLoaded", function () {

    /* ================= BOOKS ISSUED TREND ================= */

    const issueCtx = document.getElementById("issueChart");

    if(issueCtx){
        const ctx = issueCtx.getContext("2d");

        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, "rgba(108,76,255,0.35)");
        gradient.addColorStop(1, "rgba(108,76,255,0)");


        new Chart(issueCtx, {

            type: "line",

            data: {

                labels: ["Week 1", "Week 2", "Week 3", "Week 4"],

                datasets: [{

                    label: "Books Issued",

                    data: [65, 120, 90, 160],

                    borderColor: "#6c4cff",

                    backgroundColor: "rgba(108,76,255,0.1)",

                    fill: true,

                    tension: 0.2,

                    borderWidth:1,

                    pointBackgroundColor: "#1c10bd",

                    pointHoverRadius: 3,
                    pointBorderWidth: 2,

                    pointRadius: 2

                }]

            },

            options: {

                responsive: true,

                plugins: {

                    legend: {
                        display: false
                    }

                },

                scales: {

                    y: {

                        beginAtZero: true,

                        grid: {
                            color: "#eee"
                        }

                    },

                    x: {

                        grid: {
                            display: false
                        }

                    }

                }

            }

        });

    }

    /* ================= TOP CATEGORIES ================= */

    const categoryCtx = document.getElementById("categoryChart");

    if(categoryCtx){

        new Chart(categoryCtx, {

            type: "doughnut",

            data: {

                labels: [
                    "Fiction",
                    "Self Help",
                    "Dystopian",
                    "Finance",
                    "Others"
                ],

                datasets: [{

                    data: [40, 20, 15, 15, 10],

                    backgroundColor: [

                        "#6c4cff",
                        "#24b35a",
                        "#f0b429",
                        "#4285f4",
                        "#d6d6d6"

                    ],

                    borderWidth: 0

                }]

            },

            options: {

                cutout: "68%",

                plugins: {

                    legend: { display: false },

                    datalabels: {
                        color: "#fff",
                        font: { weight: "bold", size: 12 },
                        align: "center",
                        anchor: "center",
                        formatter: (value) => value + "%"
                    }
                }
            }

        });

    }

});
const logoutModal = document.getElementById("logoutModal");
const cancelLogout = document.getElementById("cancelLogout");
const confirmLogout = document.getElementById("confirmLogout");

// close modal
cancelLogout.onclick = function(){
    logoutModal.style.display = "none";
}

// logout action
confirmLogout.onclick = function(){
    window.location.href = "login.html";
}

// click outside to close
logoutModal.onclick = function(e){
    if(e.target === logoutModal){
        logoutModal.style.display = "none";
    }
}
