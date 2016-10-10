(function () {

    var $h2 = $('h2');
    var $divs = $('div');
    var $music = $divs.get(0);
    var $games = $divs.get(1);
    var $movies = $divs.get(2);

    $('h1').html('My Favorite Things!');
    $('h2').html('Click here to see my favorite things.');
    $divs.addClass('hide');
    $($music).attr('id', 'music');
    $($games).attr('id', 'games');
    $($movies).attr('id', 'movies');

    $('h2').on('click', function () {
        $divs.removeClass('hide');
        $h2.remove('h2');
        $($music).append('<h3>Music</h3>');
        $($games).append('<h3>Games</h3>');
        $($movies).append('<h3>Movies</h3>');
    })

    $($music).on('click', function () {
        $($music).append('<p>My favorite music genres are; Metal, Metalcore, Deathcore, Dubstep, Drum&Bass, Trap, and Riddim. Too many bands/artists to type!</p>');
        //$music.hide('music');
        //$(this).parent().hide(); 
    })

    $($games).on('click', function () {
        $($games).append('<p>My favorite game genres are; Action/Adventure, Action, Strategy, RPG, MMORPG, Sandbox, Fantasy, and Hack and Slash. Once again, too many specific games to type.</p>');
    })


    $($movies).on('click', function () {
        $($movies).append('<p>My favorite movie genres are; Action, Comedy, Adventure, Comics(DC, Marvel, Etc.), Mystery, Horror, Gore, and Fantasy, Sci-Fi, and Thriller.</p>');
    })

}());