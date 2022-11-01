function addnew(){
    var data = prompt("YOUR LIST TO DO")
    let id = Date.now();
    if (data != '' && data != null){
        Listadd(data,id);
        setcookie(id,data);
    }
}
function Listadd(value, id = 'Nill'){
    var ft = document.getElementById('ft_list');
    var sorce = document.createTextNode(value);
    var div = document.createElement('div');
    div.appendChild(sorce); div.id = id ;
    if (value === '' && id === 'None') alert('YOUR LIST TO DO');
    else{ft.prepend(div);}
    div.onclick = function(){
     if(confirm("Are you sure to delete List : "+value)){deletelist(this.id);this.remove();}}  
}
function deletelist(cokkieid){
    var date = new Date() ; 
    date.setMonth(date.getYear() - 1);
    document.cookie = cokkieid + '=; expires=Wed, 31 Oct 2012 08:50:17 UTC;';
}

function setcookie(cokkieid , cookieva){
    document.cookie = cokkieid + '=' + cookieva ;
    var date = new Date() ; 
    date.setMonth(date.getYear() + 3000);
    document.cookie += ('; expires=' + date.toUTCString());
}

function checklist(){
    let data = document.cookie.split(";");
    console.log(data);
    if (!(data[0] == '' && data.length === 1)){
        for(let i = 0 ; i < data.length ; i++){
            let cookiepath = data[i].split("=") ;
            Listadd(cookiepath[1] , cookiepath[0]);
        }
    }
}