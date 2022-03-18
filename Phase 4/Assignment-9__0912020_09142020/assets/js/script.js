
$(document).ready(function () {

    // DEFINE DRAGGED ITEM
    var draggedItem = null;

    // GET THE IMAGE WHEN DRAGGED AND SET DRAGGEDITEM
    $('img').on({

        'dragstart': function () {
            draggedItem = $(this)
        },
        'dragend': function () {
            draggedItem = null;
        }
    })

    // GET THE IMAGE AND APPEND IN FRAME
    $('.frame').on({

        'dragover': function (e) {
            e.preventDefault();
            $(this).append($(draggedItem));
        }

        // 'dragover': function (e) {
           
        // }
    })

    // INTERCHANGE IMAGES
    var sourceFrame = null;
    var oldImage = null;

    $('#drop .frame').on({

        'dragstart': function () {

            sourceFrame = $(this);
        },
        
        'dragenter' : function () {
            oldImage = $(this).context.children[0]
        },

        'dragend': function () {
            console.log(sourceFrame);
            console.log(oldImage);
            $(sourceFrame).html(oldImage)
        }
    })

     // 'drop': function () {
        //     draggedFrame.html(draggedImage);
        // }
        // 'dragover': function () {

        //     var z = $(this).context.children[1]
        //     // console.log(z);
        //     // $(draggedImage).html($(z))
        // },
        // 'dragover': function () {

        //     // $(draggedImage).html($(z))

        //     // alert('hi');
        //     // console.log(this.children[0]);
        //     $(draggedImage).html(this.children[0])
        //     // $('#drag .frame').off('dragover')
        // },
        // 'drop': function () {
        //     $(draggedImage).html($(z))
        // }
    // $('.frame').on({
    //     'dragover': function drop (e, draggedItem) {
    //         e.preventDefault();

    //         console.log($('.hi'));
    //         this.append($(draggedItem))
    //     }
    // })

    // $(".frame").sortable({
    //     connectWith: ".frame"
    // });
    // $("#drop").draggable({ revert:true });
    // $("#drop .frame").sortable({
    //     connectWith: "#drop .frame",

    //     stop: function (e, ui) {

    //         console.log($(ui.item.context.nextSibling));
    //         console.log(this);

    //         $(this).html($(ui.item.context.nextSibling));
    //     }
    // });
});


 // $('img').on({
    //     'dragstart': function () {

    //         // console.log($(this));

    //         $(this).addClass('dragging')
    //     },
    //     'dragend': function () {
    //         $(this).removeClass('dragging')
    //         console.log(draggedItem);


    //     }
    // })