var shelly = [
    '"Bazinga!"',
    '"WHEATON.......................!"',
    '"That\'s no reason to cry. One cries because one is sad. For example, I cry because others are stupid, and it makes me sad."',
    '"I am not crazy, my mother had me tested."',
    '"On the contrary. I found the Grinch to be a relatable, engaging character, and I was really with him right up to the point that he succumbed to social convention and returned the presents and saved Christmas. What a buzz kill that was!"',
    '"My mother says when we deceive people for personal gain we make Jesus cry."',
    '"Live long and suck it, Zachary Quinto."',
    '"Don\'t you think if I was wrong I\'d know."',
    '"I\'m Batman. Shhh."',
    '"Leonard, I\'m clearly too evolved for driving."',
    '"How could somebody possibly think we\'re going to blow up the moon? That\'s a great question."'
]

function generateQuote(){
    var randNum = Math.floor(Math.random() * (shelly.length));
    document.getElementById('disp').innerHTML = shelly[randNum];
}