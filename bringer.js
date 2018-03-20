$(document).ready(function(){

      // sets current user logged in
      const currentUserStatus = $('#currentUserStatus');

      // set up as a json array for when when we need to set up the DB
      let guestList = [
        {
          "id": "0",
          "name" : "Marty McFly",
          "email": "martymcfly@gmail.com",
          "status" : "Going",
          "encourageCount" : 3,
          "admin": false
        },
        {
          "id": "1",
          "name" : "Doc Brown",
          "email": "docbrown@gmail.com",
          "status" : "Going",
          "encourageCount": 2,
          "admin": true
        },
        {
          "id": "2",
          "name" : "Lorraine Baines",
          "email": "lorrainebaines@gmail.com",
          "status" : "Not Going",
          "encourageCount": 4,
          "admin": false
        },
        {
          "id": "3",
          "name" : "George McFly",
          "email": "georgemcfly@gmail.com",
          "status" : "Going",
          "encourageCount": 1,
          "admin": false
        },
        {
          "id": "4",
          "name" : "Biff Tannen",
          "email": "bifftanne@gmail.com",
          "status" : "Maybe",
          "encourageCount": 0,
          "admin": false
        }
      ];

      // loads guest list
      $.each(guestList, function(index){
        $('#guestList ul').append(
          "<li class='list-group-item'>" + 
            "<div class='row'>" + 
              "<div class='col'>" + guestList[index].name + "</div>" + 
              "<div class='col text-center'>" + 
                "<button type='button' class='btn btn-"+
                (function(){
                  if(guestList[index].status == 'Maybe'){
                    return 'warning';
                  }
                  if(guestList[index].status == 'Going'){
                    return 'success';
                  }
                  if(guestList[index].status == 'Not Going'){
                    return 'danger';
                  }
                })()
                +"'>" + guestList[index].status + "</button>" + 
              "</div>" + 
              "<div id='encourage"+guestList[index].id+"' class='col text-center'>" + 
                "<button type='button' class='btn btn-info'>Encourage</button>"+
            "</div>" + 
            "</div>" + 
          "</li>" 
        );
        $('#encourage' + guestList[index].id + ' button').click(function(){
          $('#encourage' + guestList[index].id + ' button').remove();
          $('#encourage' + guestList[index].id).append("<button style='background-color: lightblue; border-color: lightblue' type='button' class='btn btn-info'>"+
            (function(){
              guestList[index].encourageCount++;
              return guestList[index].encourageCount;
            })()
          +" Votes</button>");
         });
      });

      // BUTTONS: MAYBE, GOING, NOT GOING 
      const $maybeButton = $('<button type="button" class="btn btn-warning">Maybe</button>');
      const $goingButton = $('<button type="button" class="btn btn-success">Going</button>');
      const $notGoingButton = $('<button type="button" class="btn btn-danger">Not Going</button>');

      // append "MAYBE" but when DB is setup, set this up to pull the correct button needed.
      currentUserStatus.append($maybeButton);

      $('#selectStatus').change(function(){
        const currentlySelected = $('#selectStatus').val();
        if(currentlySelected == "maybe"){
          currentUserStatus.children().remove();
          currentUserStatus.append($maybeButton);
        }
        if(currentlySelected == "going"){
          currentUserStatus.children().remove();
          currentUserStatus.append($goingButton);
        }
        if(currentlySelected == "notGoing"){
          currentUserStatus.children().remove();
          currentUserStatus.append($notGoingButton);
        }
      });

      $('#addNewGuest').click(function(){
        const newGuestName = $('#newGuestName').val(); 
        const guestList = $('#guestList ul');
        guestList.append(
          "<li class='list-group-item'>" + 
            "<div class='row'>" + 
              "<div class='col'>" + newGuestName + "</div>" + 
              "<div class='col text-center'>" + 
                "<button type='button' class='btn btn-warning'>Maybe</button>" + 
              "</div>" + 
              "<div class='col text-center'>" + 
                "<button type='button' class='btn btn-info'>Encourage</button>" + 
              "</div>" + 
            "</div>" + 
          "</li>" 
        );
        $('#newGuestName').val('');
      }); // addNewGuest() ends...


      $('#addNewItem').click(function(){
        const newItem = $('#newItem').val();
        const itemList = $('#itemList ul');
        itemList.append(
          "<li class='list-group-item'>" + 
            "<div class='row'>" + 
              "<div class='col-md-7'>" + newItem + "</div>" + 
              "<div class='col text-center'>" + 
              "</div>" + 
              "<div class='col text-center'>" + 
                "<button type='button' class='btn btn-info'>Bring</button>" + 
              "</div>" + 
            "</div>" + 
          "</li>" 
        );
        $('#newItem').val('');
      }); // addNewItem() ends...

      $('#bringItem').click(function(){
        const newItemToBring = $('#newItemToBring').val(); 
        const bringersList = $('#bringersList ul');
        bringersList.append(
          "<li class='list-group-item'>" + 
            "<div class='row'>" + 
              "<div class='col-md-7'>" + newItemToBring + "</div>" + 
            "</div>" + 
          "</li>" 
        );
        $('#newItemToBring').val('');
      });
    });