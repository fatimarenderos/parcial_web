window.onload = () => {
    app.init();
}

let app = {
    init: function () {
        this.loadContent();
        //this.listenerEnviar();
    },
    listenerEnviar: function(){
        var enviar= document.getElementById('enviar');
        enviar.addEventListener('submit', this.anniadir());
    },
    addRows: function (element) {
        //console.log(element);
        var tbody = document.getElementsByClassName('tablaALlenar')[0];
        var tr = document.createElement('tr');
        
        tr.innerHTML = `<td>${element._id}</td>
                        <td>${element.marca}</td>
                        <td>${element.tipo}</td>
                        <td>${element.consumo}</td>
                        <td>${element.eficiencia}</td>
                        <td>
                            <a class="delete"><i class="fas fa-ban"></i>
                            <a class="actualizar"><i class="fas fa-pencil-alt"></i>
                        </td>`;
        tr.getElementsByClassName('delete')[0].addEventListener("click", (event) => {
            this.delete(event, element, tr, tbody);
        });
        tbody.appendChild(tr);
    },
    anniadir: function(){
        var nuevoJuego={
            marca: document.formRegistro.marca.value,
            tipo:document.formRegistro.tipo.value,
            consumo:document.formRegistro.consumo.value,
            eficiencia:document.formRegistro.eficiencia.value
        }
        fetch('/api/blog2', {
            method:'POST',
            body:JSON.stringify(nuevoJuego),
            headers:{
                'Content-type':'application/json'
            }
        })
        .then(res=>{
            return res.json();
        })
        .then(element=>{
            console.log(element);
            //this.addRows(element);
        })
    },

    delete: function (event, element, tr, tbody) {
        event.preventDefault();
        fetch('/api/blog2/'+element._id, {
            method: 'DELETE'
        })
            .then(res => {
                return res.json();
            })
            .then(element =>  {
                tbody.removeChild(tr);
            });
    },
    loadContent: function () {
        fetch('/api/blog2', {
            method: 'GET'
        })
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                data.datos.forEach(element => {
                    this.addRows(element);
                });
            })
    }
}