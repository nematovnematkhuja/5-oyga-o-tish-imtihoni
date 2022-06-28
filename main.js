let phones
$.ajax(`http://myjson.dit.upm.es/api/bins/emgj` ,{
    success: function(ress){
        render(ress)
        console.log(ress);
        accessories = ress
    },
    error: function (err){
        console.log(err);
    }
})

function render(phone){
    phone.map(item =>{
        let col = `
        <div class="col-3 ms-5">
        <div class="card p-4 m-4 bg-light">
        <p class="d-flex justify-content-start "><i class="fa-regular fa-heart"></i></p>
           <img class="images" src="${item.img}">
           <div class="text-center text-primary my-1">${item.name}</div>
           <button class=" btn btn-primary  my-1 form-control text-white">Korzinka</button>
        </div>
        </div>
           
        `
        $(".row1").append(col)
    })
}


let searchResult = ""
$("#search").on("input", () => {
    let value = $("#search").val()
    searchResult = accessories.filter(item => {
        return item.name.toLowerCase().includes(value.toLowerCase())
    })
    $(".row")
    render(searchResult)
})