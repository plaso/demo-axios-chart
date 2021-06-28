const key = "demo";
const functionName = "TIME_SERIES_DAILY";
let symbolName = "MSFT";

function generateApiUrl() {
  return `https://www.alphavantage.co/query?function=${functionName}&symbol=${symbolName}&apikey=${key}`;
}

function getData() {
  axios
    .get(generateApiUrl())
    .then((response) => {
      console.log("The response from API: ", response);
      printTheChart(response.data);
    })
    .catch((err) => console.log("Error while getting the data: ", err));
}

function printTheChart(stockData) {
  const dailyData = stockData["Time Series (Daily)"];

  const stockDates = Object.keys(dailyData);
  const stockPrices = stockDates.map((date) => dailyData[date]["4. close"]);

  const ctx = document.getElementById("my-chart").getContext("2d");
  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: stockDates,
      datasets: [
        {
          label: "Stock Chart",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: stockPrices,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "rgb(255, 99, 132)",
          },
        },
      },
    }
  });
}

function loadIBM() {
  symbolName = "IBM";
  getData();
}

getData();
