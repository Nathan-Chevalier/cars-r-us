export const getOrders = async () => {
  const response = await fetch(
    "http://localhost:8088/orders?_expand=color&_expand=interior&_expand=package&_expand=wheels"
  );
  const orders = await response.json();

  let html = `<h2>Current Orders</h2>`;
  const ordersArray = orders.map((order) => {
    const orderPrice =
      order.color.price +
      order.interior.price +
      order.package.price +
      order.wheels.price;
    return `<div class="order"> Order #${order.id} costs $${orderPrice}</div>`;
  });
  html += ordersArray.join("");

  return html;
};
