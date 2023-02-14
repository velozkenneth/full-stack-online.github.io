// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("myPieChart");
/*var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["NCS-5501", "NCS-5001", "NCS-5002", "NCS-5011", "NX-93180YC", "NX-9372"],
    datasets: [{
      label: "Total",
      backgroundColor: "rgba(242,156,55,255)",
      borderColor: "rgba(242,156,55,255)",
      data: [10, 20, 50, 15, 30, 10],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
*/
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["NCS-5501", "NCS-5001", "NCS-5002", "NCS-5011", "NX-93180YC", "NX-9372"],
    datasets: [{
      label: "Total",
      data: [10, 20, 50, 15, 30, 10],
      backgroundColor: [
        'rgba(255, 99, 132, 255)',
        'rgba(54, 162, 235, 255)',
        'rgba(255, 205, 86, 255)',
        'rgb(186, 245, 139)',
        'rgb(230, 167, 251)',
        'rgb(167, 251, 243)'
      ],
      hoverOffset: 4
    }]
  }
});