$(function () {

    $(".Project-AV-popup-container").modalPlugin({
        selectors: {
            openbutton: 'Project-AV', // give the element to open the modal an id (exclude the # in this code)
            opencontainer: 'AV-Container', // give element that is going to displayed an id (exclude the # in this code)
            closebutton: 'ex1closebtn', // give the button to close the modal an id (exclude # in this code)
        },
        modal:{
            effect: 'fade', // Open/close effect - fade / toggle / slide
            duration: '', // Open/close duration 1000 = 1 sec. Default is 20
        },
        style:{
            closebutton: '', // styling the close button
            background: '', // Background color of the container.
        },
        closing:{
            clickanywhere: 'yes' // if yes then you can click anywhere to close the box. Else leave blank.
        }

    });
    $(".Project-DDP-popup-container").modalPlugin({
        selectors: {
            openbutton: 'Project-DDP', // give the element to open the modal an id (exclude the # in this code)
            opencontainer: 'DDP-Container', // give element that is going to displayed an id (exclude the # in this code)
            closebutton: 'ex1closebtn', // give the button to close the modal an id (exclude # in this code)
        },
        modal:{
            effect: 'fade', // Open/close effect - fade / toggle / slide
            duration: '', // Open/close duration 1000 = 1 sec. Default is 20
        },
        style:{
            closebutton: '', // styling the close button
            background: '', // Background color of the container.
        },
        closing:{
            clickanywhere: 'yes' // if yes then you can click anywhere to close the box. Else leave blank.
        }

    });
    $(".Project-CClub-popup-container").modalPlugin({
        selectors: {
            openbutton: 'Project-CClub', // give the element to open the modal an id (exclude the # in this code)
            opencontainer: 'CClub-Container', // give element that is going to displayed an id (exclude the # in this code)
            closebutton: 'ex1closebtn', // give the button to close the modal an id (exclude # in this code)
        },
        modal:{
            effect: 'fade', // Open/close effect - fade / toggle / slide
            duration: '', // Open/close duration 1000 = 1 sec. Default is 20
        },
        style:{
            closebutton: '', // styling the close button
            background: '', // Background color of the container.
        },
        closing:{
            clickanywhere: 'yes' // if yes then you can click anywhere to close the box. Else leave blank.
        }

    });


});
