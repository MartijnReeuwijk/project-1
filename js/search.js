$(document).ready(function(){

    var filters = [],
    gridItem = $('main');

    // Function for filtering unique items
    function onlyUnique(value, index, self) {

        return self.indexOf(value) === index;
    }

    // Loop through all elements with class grid-item
    gridItem.each(function(i, obj) {

        // Push the element's second class in filters array
        filters.push(obj.classList[1]);

    });

    // Filter items
    filters = filters.filter(onlyUnique);

    // Append filter items to DOM
    filters.forEach(function(item){

        $('.options').append('<article class="button" data-filter=.' + item + '><p>' + item + '</p></article>');

    });

    new Konami(function() {
        var rickrolled = new Audio("http://mean2u.rfshq.com/downloads/music/giveyouup.mp3");
        gridItem.css('background-image',
        'url(https://45.media.tumblr.com/039b3f0a72fa064542ce39217482e69f/tumblr_n9pv2b3DCM1tx4oxqo1_400.gif)');
        rickrolled.play();

    });

}); // Document.ready
