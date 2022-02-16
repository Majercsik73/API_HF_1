var buttonElement = document.getElementById("beolvas2");
var loaderElement = document.getElementById("loadingGif2");

buttonElement.addEventListener('click', function(){
    loaderElement.classList.remove('hidden');
    $.ajax({
        url: "https://api.coinbase.com/v2/currencies",
        method: "GET",
        success: function(data){
            console.log(data);
        
            document.getElementById("leiras2").innerHTML = "Nemzetközi fizetőeszközök";

            var tbody2 = document.getElementById("tbody2");
            tbody2.innerHTML = "";

            var table = document.createElement("table");
            var cimsor  = true;
            for(var i = 0; i < 164; i=i+4){
                var tr = document.createElement("tr");

                var cella1 = document.createElement("td");
                var cella2 = document.createElement("td");
                var cella3 = document.createElement("td");          
                    
                if(cimsor){
                    cella1.innerHTML = "Jelölés";
                    cella1.style.fontSize= "150%";
                    cella2.innerHTML = "Megnevezés";
                    cella2.style.fontSize= "150%";
                    cella3.innerHTML = "Legkisebb egység";
                    cella3.style.fontSize= "150%";

                    cimsor = false;
                }
                else{
                    
                    cella1.innerHTML = data.data[i].id;
                    cella2.innerHTML = data.data[i].name;
                    cella3.innerHTML = data.data[i].min_size;
                }

                tr.appendChild(cella1);
                tr.appendChild(cella2);
                tr.appendChild(cella3);
                
                table.appendChild(tr);
            }
            loaderElement.classList.add('hidden');
            tbody2.appendChild(table);
        }
    });
});  