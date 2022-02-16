
var buttonElement = document.getElementById("beolvas1");
var loaderElement = document.getElementById("loadingGif1");

buttonElement.addEventListener('click', function(){
    loaderElement.classList.remove('hidden');
    $.ajax({
        url: "https://archive.org/metadata/TheAdventuresOfTomSawyer_201303",
        method: "GET",
        success: function(data){
            console.log(data);
        
            var leiras = data.metadata.description;
            document.getElementById("leiras1").innerHTML = "Description: " + leiras;

            var tbody1 = document.getElementById("tbody1");
            tbody1.innerHTML = "";

            var table = document.createElement("table");
            var cimsor = true;
            for(var i = 3; i < 9; i++){
                var tr = document.createElement("tr");

                var cella1 = document.createElement("td");
                var cella2 = document.createElement("td");
                var cella3 = document.createElement("td");
                var cella4 = document.createElement("td");
                var cella5 = document.createElement("td");
                var cella6 = document.createElement("td");                
                    
                if(cimsor){
                    cella1.innerHTML = "Név";
                    cella1.style.fontSize= "150%";
                    cella2.innerHTML = "Forrás";
                    cella2.style.fontSize= "150%";
                    cella3.innerHTML = "Formátum";
                    cella3.style.fontSize= "150%";
                    cella4.innerHTML = "Eredet";
                    cella4.style.fontSize= "150%";
                    cella5.innerHTML = "mtime";
                    cella5.style.fontSize= "150%";
                    cella6.innerHTML = "Hash md5";
                    cella6.style.fontSize= "150%";

                    cimsor = false;
                }
                else{
                    
                    cella1.innerHTML = data.files[i].name;
                    cella2.innerHTML = data.files[i].source;
                    cella3.innerHTML = data.files[i].format;
                    cella4.innerHTML = data.files[i].original;
                    cella5.innerHTML = data.files[i].mtime;
                    cella6.innerHTML = data.files[i].md5;
                }

                tr.appendChild(cella1);
                tr.appendChild(cella2);
                tr.appendChild(cella3);
                tr.appendChild(cella4);
                tr.appendChild(cella5);
                tr.appendChild(cella6);
                
                table.appendChild(tr);
            }
            loaderElement.classList.add('hidden');
            tbody1.appendChild(table);
        }
    });
});  