$(function() {

    $('#js-shopping-list-form').submit(function(event) {
            event.preventDefault();  // ignore default responses for form

            /* Get the item wanted for the shopping list */
            const itemWanted = $(this).find('input[name="shopping-list-entry"]').val();
 
            /* Add the item to the shopping list */
            $('ul').prepend(
                `<li>
                <span class="shopping-item">${itemWanted}</span>
                <div class="shopping-item-controls">
                  <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                  </button>
                  <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                  </button>
                </div>
              </li>`
            );
    });

    /* Find the click on the Check button */
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {

        /* the event.currentTarget is the Check button. traverse up the DOM to the shopping item */
        var shoppingItem = $(this).closest('li');
        /* traverse down the DOM to the shopping item text and toggle the strike thru text */
        shoppingItem.find('.shopping-item').toggleClass('shopping-item__checked');

    });

    /* Find the click on the Delete button */
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {

        /* the event.currentTarget is the Delete button. traverse up the DOM to the li */
        $(this).closest('li').remove();

    });

});