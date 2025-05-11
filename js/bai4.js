function toggleConnections() {
  const type = document.getElementById("customerType").value;
  const group = document.getElementById("connectionsGroup");
  const connectionsInput = document.getElementById("connections");

  if (type === "business") {
    group.style.display = "block";
    connectionsInput.disabled = false;
  } else {
    group.style.display = "none";
    connectionsInput.value = 0;
    connectionsInput.disabled = true;
  }
}

function calculateFee() {
  const type = document.getElementById("customerType").value;
  const premiumChannels =
    parseInt(document.getElementById("premiumChannels").value) || 0;
  const connections =
    type === "business"
      ? parseInt(document.getElementById("connections").value) || 0
      : 0;

  let total = 0;

  if (type === "residential") {
    total += 4.5;
    total += 20.5;
    total += 7.5 * premiumChannels;
  } else {
    total += 15;
    total += 75;
    if (connections > 10) {
      total += (connections - 10) * 5;
    }
    total += 50 * premiumChannels;
  }

  document.getElementById("result").textContent =
    "Tổng tiền cáp: $" + total.toFixed(2);
}
