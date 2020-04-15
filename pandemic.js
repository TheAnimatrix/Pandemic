function ConvertFormToJSON(form){
    var array = $(form).serializeArray();
    var json = {};
    
    $.each(array, function() {
        json[this.name] = this.value || '';
    });
    
    return json;
}

console.log("test");

function clickVerified()
{
    location.href='table.html';
}

function clickContributor()
{
    location.href='form.html';
}

jQuery(document).ready(function() {

    console.log("Ready");
    $('form#createData').bind('submit', function(event){
        event.preventDefault();
        
        var form = this;
        var json = ConvertFormToJSON(form);
        var tbody = $('#data > tbody');
        console.log(json);

        $.ajax({
            type: "POST",
            url: "https://mhjnqlztic.execute-api.ap-south-1.amazonaws.com/Prod/form/submit",
            data: JSON.stringify(json),
            dataType: "json",
            contentType:"text/plain"
        }).done(function() { 
            location.href='thankyou.html';
           console.log("posted")
        }).fail(function() { 
            alert("Failed to add to-do"); 
        });

        return true;
    });

    $('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('value'));
    });
/*End Dropdown Menu*/
});

