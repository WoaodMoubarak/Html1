$(document).ready(function() {
    // Initialize the carousel
    $('.carousel').carousel({
        interval: 2000 
    });

    
    $('.carousel-control-prev').click(function() {
        // Move to the previous slide
        $('.carousel').carousel('prev');
    });

    $('.carousel-control-next').click(function() {
        // Move to the next slide
        $('.carousel').carousel('next');

      
        let $activeItem = $('.content-wrapper .item.active');
        let $nextItem = $activeItem.next('.item');
        
        // If there's no next item, loop back to the first item
        if ($nextItem.length === 0) {
            $nextItem = $('.content-wrapper .item').first();
        }

        $activeItem.removeClass('active');
        $nextItem.addClass('active');
    });

   
    $('.content-wrapper .item').on('click', function() {
        $('.content-wrapper .item').removeClass('active');
        $(this).addClass('active');
    });
});
