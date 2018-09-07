$(function() {
    $(".change-devour").on("click",function(event) {
        var id = $(this).data("id");

        var newState = {
            devoured: true
        };

        //PUT request
        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: newState
        }).then(function() {
            location.reload();
        });
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var name = $("[name=burger-name]").val().trim();

        if(name !== "") {
            var newBurger = {
                name: name
            };

            //Sends POST request - it calls JavaScript to new URL 
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(function() {
                console.log("Created new burger");
                location.reload();
            });
        }
        else {
            $("[name=buger-name]").val("");
        }
    });
    $(".delete-sleep").on("click",function(event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers" + id, {
            type: "DELETE"
        }).then(function() {
            location.reload();
        });
    });
});