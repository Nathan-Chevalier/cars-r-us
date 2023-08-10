export const getOrders = async () => {
  const response = await fetch(
    "http://localhost:8088/orders?_expand=color&_expand=interior&_expand=package&_expand=wheels&_expand=type"
  );
  const orders = await response.json();

  let html = `<h2>Current Orders</h2>`;
  const ordersArray = orders.map((order) => {
    let orderPrice =
      order.color.price +
      order.interior.price +
      order.package.price +
      order.wheels.price;
    orderPrice = orderPrice * order.type.multiplier;
    let convertedPrice = orderPrice.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    return `<div class="order"> Order #${order.id} costs ${convertedPrice}</div>`;
  });
  html += ordersArray.join("");

  return html;
};
