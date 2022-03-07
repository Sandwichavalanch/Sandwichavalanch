let turns = 1
document.querySelector("button").onclick = function(){
    let userRow = document.querySelector("#row").value-1
    let userColumn = document.querySelector("#column").value-1
    let rows = document.querySelectorAll("tr")
    let cells = rows[userRow].querySelectorAll("td")
    console.log(cells)
    let cell = cells[userColumn]
    console.log(cell)
    cell.innerHTML = "X"
}
//     document.body.style.background = "#f3f3f3 url('bg2.jpg') repeat right top";