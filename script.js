$.getJSON('https://www.googleapis.com/youtube/v3/channels?part=snippet, statistics&id=UCoSrY_IQQVpmIRZ9Xf-y93g&key=AIzaSyBL8uKTfItK22ivcE5JpwIDYra9YaU6SLg', function (data) {
    $('.account').append(`
        <div class="foto" style="width : 15rem;">
        <img src="`+ data.items[0].snippet.thumbnails.medium.url + `" class="card-img-top rounded-circle shadow p-1 mb-2 bg-white rounded">
        <div class="card-body text-center">
        <hr>
        <p class="card-text font-weight-bold"> `+ data.items[0].snippet.title + ` </p>
        </div>
        </div>
    `);
});

$.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCoSrY_IQQVpmIRZ9Xf-y93g&order=date&key=AIzaSyBL8uKTfItK22ivcE5JpwIDYra9YaU6SLg&maxResults=4', function (data) {
    
    var lastes = data.items;

    $.each(lastes, function (i, core) {
        $('.video-list').append(`

        <div class="col-md-6">
            <div class="card mb-6 shadow p-1 mb-2 bg-white rounded">
                <div class="embed-responsive embed-responsive-16by9 card-img-top">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/`+ core.id.videoId + `" allowfullscreen></iframe>
                </div>
                <div class="card-body">
                <p class="card-title">`+ core.snippet.title + `</p>
                </div>    
            </div>
        </div>
    
        `);
    });

});