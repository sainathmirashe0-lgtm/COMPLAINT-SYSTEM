console.log("Dashboard loaded");

const bar = document.getElementById("barChart");
if (bar) {
  new Chart(bar, {
    type: "bar",
    data: {
      labels: ["Jan","Feb","Mar","Apr","May"],
      datasets: [{
        label: "Complaints",
        data: [5,8,6,10,7],
        backgroundColor: "#4f46e5"
      }]
    }
  });
}

const pie = document.getElementById("pieChart");
if (pie) {
  new Chart(pie, {
    type: "doughnut",
    data: {
      labels: ["Approved","Pending","Rejected"],
      datasets: [{
        data: [10,4,2],
        backgroundColor: ["#22c55e","#facc15","#ef4444"]
      }]
    }
  });
}
