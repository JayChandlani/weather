$(document).ready(function () {
    $('#submit').on('click', () => {
        let loc = $('#input').val();
        $('#input').val("");
        if (loc != "") {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&appid=0b8ad2fe23a75e129639b88871a75453`
            console.log(loc)


            $.get(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&appid=0b8ad2fe23a75e129639b88871a75453`,
                function (data, textStatus, jqXHR) {
                    let obj = data
                    console.log(obj)
                    let { main, name, weather,visibility } = obj
                    $('.box2 .extra .humidity').text(`${main.humidity}%`);
                    $('.box2 .extra .pressure').text(`${main.pressure}`);
                    $('.box2 .extra .visibility').text(`${visibility/1000}km`);
                    $('#temperature').text(`${parseInt(main.temp) }${String.fromCharCode(176)} C`);
                    $('#climate').text(`${weather[0].main}`);
                    $('#location').text(`${name}`);
                    $('#image').attr({
                        src: "pngwing.com.png"
                    });
                    $('.error p').text('')
                });
        } else {
            $('.error p').text('Please Enter Some Thing')
        }

    });
    $('.btn2').on('click', () => {
        $('.box2 .extra p').text('');
        $('#temperature').text('');
        $('#climate').text('');
        $('#location').text('');
        $('#image').attr({
            src: ""
        });
        $('.error p').text('')
    })
});