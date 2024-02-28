async function search(inputValue, checkbox, sex) {
  for (i = 0; i < checkbox.length; i++) {
    if (checkbox[i]) {
      loadProducts(`&type=${i + 1}&q=${inputValue}`, sex);
    }
  }
}
async function Search(sex = "") {
  checks = [];
  for (i = 1; i < 4; i++)
    checks.push(document.getElementById(`checkbox${i}`).checked);
  search(document.getElementById("searchbox").value, checks, sex);
}
