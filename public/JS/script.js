// add cards to web
const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.image + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + 
            '</a></p></div>' + '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
            '<p class="card-text"><span style="color: black;">' + item.desciption + '</span></p>' +
            '</div></div></div>';
        $("#card-section").append(itemToAppend);
    });
}

// when the 'formSubmit' bottom clicked, get form data from web and invoke addDuck()
const submitForm = () => {
    let formData = {};
    formData.title = $('#title').val();
    formData.image = $('#image').val();
    formData.link = $('#link').val();
    formData.desciption = $('#desciption').val();

    console.log("Form Data Submitted: ", formData);
    addDuck(formData);
}

/* sends a GET request to the /api/ducks endpoint using the jQuery $.get() method. When the server responds with a 200 OK status code 
and a JSON object containing an array of duck objects, the addCards(items) function is called with the array of ducks as its argument. */
const getDucks = () => {
    $.get('/api/ducks',(response) => {
        if(response.statusCode === 200){
            addCards(response.data);
        }
    });
}

// post request to server.router.post('/api/ducks', 
const addDuck = (duck) => {
    $.ajax({
        url: 'api/ducks',
        data: duck,
        type: 'POST',
        success: (result) => {
            alert(result.message);
            location.reload();
        }
    });
}

let socket = io();
socket.on('number', (message) => {
    console.log('received from server: ' + message);
});

$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('.modal').modal();

    getDucks();

    $('#formSubmit').click(() => {
        submitForm();
    });
});
