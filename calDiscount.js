/*
เขียน API สำหรับคำนวณโปรโมชั่น 
 input: list สินค้า sku กับ จำนวนสินค้าที่ซื้อ
 output: ราคาที่ต้องจ่าย
 รายละเอียดเพิ่มเติม: ทางเราจะกำหนดราคาสินค้าไว้ กับโปรโมชั่น ไว้เป็นตัวแปรค่าคงที่ก่อน จากนั้นตอนคำนวณเงินให้ไปหาจากตัวแปรที่กำหนด

**ตัวอย่าง Input**
**สินค้า** 
 A ราคา 99 บาท
 B ราคา 199 บาท
 C ราคา 3990 บาท

**โปรโมชั่น**
  ซื้อ ครบ 200 บาท ลด 10%
  ซื้อ A + B ลด 50 บาท
*/

//element
const form = document.querySelector(".form");

const productA_price = document.getElementById("productA_price");
const productB_price = document.getElementById("productB_price");
const productC_price = document.getElementById("productC_price");
const total_price = document.getElementById("total_Price");

const productA_qty = document.getElementById("productA_qty");
const productB_qty = document.getElementById("productB_qty");
const productC_qty = document.getElementById("productC_qty");

// product a cost=99 qty = 4;
const productA = {
  name: "A",
  price: 99,
  //   qty: 1,
};
// product b cost=199 qty = 2;
const productB = {
  name: "B",
  price: 199,
  //   qty: 1,
};
// product c cost=3990 qty = 1;
const productC = {
  name: "C",
  price: 3990,
  //   qty: 0,
};

const discount1 = 0.1; //10%
const discount2 = 50; //dicsount 50

productA_price.innerHTML = productA.price;
productB_price.innerHTML = productB.price;
productC_price.innerHTML = productC.price;

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    productA.qty = +productA_qty.value;
    productB.qty = +productB_qty.value;
    productC.qty = +productC_qty.value;

    verifyPromotion();
  });
}

const verifyPromotion = () => {
  let payPrice =
    productA.qty * productA.price +
    productB.qty * productB.price +
    productC.qty * productC.price;

  //promotion
  // Promotion buy A&B save 50  /this case A&B 2 times
  if (productA.qty && productB.qty) {
    const discount =
      productB.qty >= productA.qty
        ? productA.qty * discount2
        : productB.qty * discount2;

    payPrice -= discount;
  }

  // Promotion buy more than 200 get discount 10% (0.1)
  if (payPrice > 200) {
    const discount = payPrice * discount1;
    payPrice -= discount;
  }

  total_price.innerHTML = payPrice;
};
