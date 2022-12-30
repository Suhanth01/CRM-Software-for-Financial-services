import React from "react";

export const columns = [
  {
    name: "Order number",
    selector: "ordernumber",
    sortable: true
  },
  {
    name: "Data",
    selector: "data",
    sortable: true
  },
  {
    name: "User details",
    selector: "user_details",
    sortable: true
  },
  {
    name: "Order Type",
    selector: "order_type",
    sortable: true
  },
  {
    name: "Amount",
    selector: "amount",
    sortable: true
  },
  {
    name: "Payment Type",
    selector: "pay_type",
    sortable: true
  },
  {
    name: "Status",
    selector: "status",
    sortable: true
  },
  {
    name: "Action",
    selector: "action",
    sortable: true
  }
];

export const data = [
  {
    id: 1,
    ordernumber:1213453,
    data: "abc1",
    user_details:"Rohit1",
    order_type:"online",
    amount:28903,
    pay_type:"UPI",
    status: "paid",
    action: "Act1",
  },
  {
    id: 2,
    ordernumber:1213453,
    data: "abc2",
    user_details:"Rohit2",
    order_type:"online",
    amount:28903,
    pay_type:"UPI",
    status: "pending",
    action: "Act2",
  },
  {
    id: 3,
    ordernumber:1213453,
    data: "abc3",
    user_details:"Mohit1",
    order_type:"online",
    amount:28903,
    pay_type:"Cash",
    status: "paid",
    action: "Act3",
  },
  {
    id: 4,
    ordernumber:1213453,
    data: "abc6",
    user_details:"Raman",
    order_type:"online",
    amount:28903,
    pay_type:"UPI",
    status: "paid",
    action: "Act1",
  },
  {
    id: 5,
    ordernumber:1213453,
    data: "abc1",
    user_details:"sohit1",
    order_type:"online",
    amount:28903,
    pay_type:"UPI",
    status: "paid",
    action: "Act1",
  },
 
];