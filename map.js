$(document).ready(function(){
  $('search_select_boxselect').selectpicker();
})

function changeMap(getMap){
    let bg = document.getElementsByClassName("search_select_box");
    document.getElementsByName("search_select_box").style.display="block";
}