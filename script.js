console.log("App Start");

let appName = "Mini Dashboard";

function showAppInfo() {
  let version = "1.0";
  console.log("App:", appName);
  console.log("Version:", version);
}

showAppInfo();

const transactions = [
  { id: 1, customer: "Dani", total: 200000, status: "paid" },
  { id: 2, customer: "Rizqi", total: 150000, status: "unpaid" },
  { id: 3, customer: "Ayu", total: 300000, status: "paid" },
  { id: 4, customer: "Naila", total: 180000, status: "paid" },
];


function renderData(data) {
  const list = document.getElementById("list");
  list.innerHTML = "";

  data.map(item => {
    const li = document.createElement("li");
    li.innerText = `${item.customer} - Rp ${item.total} - ${item.status}`;
    list.appendChild(li);
  });
}


function calculateTotal(data) {
  const total = data.reduce((acc, item) => acc + item.total, 0);
  document.getElementById("total").innerText = "Total: Rp " + total;
}


function filterByStatus(status) {
  const filtered = transactions.filter(item => item.status === status);
  renderData(filtered);
  calculateTotal(filtered);
}

function fetchTransactions() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(transactions), 2000);
  });
}

async function loadData() {
  document.getElementById("total").innerText = "Loading...";
  const data = await fetchTransactions();
  renderData(data);
  calculateTotal(data);
}

document.getElementById("loadBtn").addEventListener("click", loadData);

document.getElementById("filterBtn").addEventListener("click", () => {
  filterByStatus("paid");
});

document.getElementById("filterUnpaidBtn").addEventListener("click", () => {
  filterByStatus("unpaid");

});
