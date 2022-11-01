function addnew(){
    let input = prompt("ํYOUR LIST TO DO");
    if (input !== '' && input !== null) {
        let div = $("<div></div>").text(input);
        div.attr("onclick", "Deletelist(this)");
        $("#ft_list").prepend(div);
        setCookie("listd", $("#ft_list").html(), 30);
    }
}
function Deletelist(elem){
  let txt = $(elem).text();
  if (confirm("Are you sureto delete : "+txt)) {
        $(elem).remove();
        setCookie("listd", $("#ft_list").html(), 30);
    }
}


function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
function getCookie(cname) {
    let listd = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(listd) == 0) {
        return c.substring(listd.length, c.length);
      }
    }
    return "";
}

function checkCookie(){
    let listd = getCookie("listd");
    if (listd !== "") {
      $("#ft_list").html(listd);
    }
}