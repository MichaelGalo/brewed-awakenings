import { getEmployees, getOrders } from "./database.js";

const employees = getEmployees();
const orders = getOrders();

document.addEventListener("click", (ClickEvent) => {
  const elementClicked = ClickEvent.target;

  if (elementClicked.dataset.type === "employee") {
    let productsSold = 0;

    for (const order of orders) {
      if (parseInt(elementClicked.dataset.id) === order.employeeId) {
        productsSold++;
      }
    }

    window.alert(
      `${elementClicked.dataset.name} has sold ${productsSold} products`
    );
  }
});

export const Employees = () => {
  let html = "<ul>";

  for (const employee of employees) {
    html += `<li data-type="employee" data-name=${employee.name} data-id=${employee.id}>${employee.name}</li>`;
  }

  html += "</ul>";

  return html;
};
