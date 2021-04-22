//creare un array con stringhe
$(document).ready(function(){

  var arrReminder = [
    "Comprare la pasta",
    "Comprare il pecorino",
    "Comprare il guanciale",
    "Comprare le uova"
  ];

  //ciclo for dell’array per stampare a video gli elementi facendo un append dentro ul
  for(var i = 0; i < arrReminder.length; i++){
    var reminderList = arrReminder[i];

    //prima clono il pezzo di html che mi serve quindi l'li che sta dentro template e lo chiudo in una var
    var reminderPush = $('.template li').clone();

    //dentro la var cerco il punto (in questo caso .text) dove voglio aggiungere 
    $(reminderPush).find('.text').append(reminderList);
    $('.reminder ul').append(reminderPush);
  }
  
  //al click del cestino eliminare il parent
  $(document).on('click', '.fa-trash-alt', function(event){
    $(this).parent().remove();
  });
  

  //intercettare il keyup dell’input di ENTER per aggiungere l’elemento alla lista e ripulire l’input
  $('input').keyup(function(event){
    if(event.which === 13){
      var reminder = $(this).val().trim();

      if(reminder.length >= 3){
        
        var strReminder = $('.template li').clone();
        $(strReminder).find('.text').append(reminder);
        $('.reminder ul').append(strReminder);
        $(this).val('');
      }
    }
  });
  


});