const radioBtn = document.querySelectorAll(".radio-button");
const priceCards = document.querySelectorAll(".price-card");
const toggleTable = document.querySelectorAll(".toggler");
const price = document.querySelectorAll(".price");
const selectTable = document.querySelectorAll(".tableRenderJs");

radioBtn.forEach((radioButton, index) => {
  console.log("index", index);
  radioButton.addEventListener("change", function () {
    
    priceCards.forEach((card) => {
      card.classList.remove("active");
    });
    var qtyTable = `<table>
      <tr>
      <td></td>
      <td>Size</td>
      <td>Colour</td>
      </tr>
      <tr>
      <td>#1</td>
      <td>
        <select>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
      </td>
      <td>
        <select>
          <option value="colour" disabled selected>Colour</option>
          <option class="navy">Navy</option>
          <option class="violet">Violet</option>
        </select>
       </td>
       </tr>
       <tr>
            <td>#2</td>
            <td>
              <select>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
            </td>
            <td>
              <select>
                <option value="colour" disabled selected>Colour</option>
                <option class="navy">Navy</option>
                <option class="violet">Violet</option>
              </select>
            </td>
          </tr>
    </table>`;

    selectTable[1].innerHTML = qtyTable;

    
    if (this.checked) {
      priceCards[index].classList.add("active");

      selectTable[1].innerHTML = qtyTable;
      selectTable[index].innerHTML = qtyTable;
      if (index === 0) {
        selectTable[1].innerHTML = "";
        selectTable[2].innerHTML = "";
      } else if (index === 1) {
        selectTable[0].innerHTML = "";
        selectTable[2].innerHTML = "";
      } else if (index === 2) {
        selectTable[0].innerHTML = "";
        selectTable[1].innerHTML = "";
      }

      let newTotal = price[index].innerHTML;
      document.getElementById("total").innerHTML = "Total: " + newTotal;
    }
  });
});

priceCards.forEach((priceCard, index) => {
  priceCard.addEventListener("click", function () {
    radioBtn[index].click();
  });
});


const addToCart=()=>  confirm("Item Successfully Added To Cart");
