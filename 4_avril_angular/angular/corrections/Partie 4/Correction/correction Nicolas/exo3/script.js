const rep1 = document.getElementById('rep1');
const rep2 = document.getElementById('rep2');
const rep3 = document.getElementById('rep3');
const rep4 = document.getElementById('rep4');
const rep5 = document.getElementById('rep5');

const questDiv1 = document.getElementById('question1Div');
const questDiv2 = document.getElementById('question2Div');
const questDiv3 = document.getElementById('question3Div');
const questDiv4 = document.getElementById('question4Div');
const questDiv5 = document.getElementById('question5Div');

function question1(reponse) {
    let userReponse = reponse.toUpperCase();
    switch (userReponse) {
        case 'LARAVEL':
            rep1.innerHTML = "Perdu";
            break;

        case 'ANGULAR':
            rep1.innerHTML = "Bien joué réponse : Angular";
            break;

        case 'CAKEPHP':
            rep1.innerHTML = "Perdu";
            break;

        default:
            rep1.innerHTML = "Perdu";
    }

    questDiv1.style.display = 'none';

    questDiv2.style.display = '';
}

function question2(reponse) {
    let userReponse = reponse.toUpperCase();
    switch (userReponse) {
        case 'LAPIN':
            rep2.innerHTML = "Bien joué réponse : LAPIN";
            break;

        case 'VEGETARIEN':
            rep2.innerHTML = "Bien joué réponse : Vegetarien";
            break;

        case 'BARBU':
            rep2.innerHTML = "Perdu";
            break;

        default:
            rep1.innerHTML = "Perdu";
    }
    questDiv2.style.display = 'none';

    questDiv3.style.display = '';
}

function question3(reponse) {
    let userReponse = reponse.toUpperCase();
    switch (userReponse) {
        case 'LARAVEL':
            rep3.innerHTML = "Perdu";
            break;

        case 'ANGULAR':
            rep3.innerHTML = "Bien joué réponse : Angular";
            break;

        case 'CAKEPHP':
            rep3.innerHTML = "Perdu";
            break;

        default:
            rep3.innerHTML = "Perdu";
    }
    questDiv3.style.display = 'none';

    questDiv4.style.display = '';
}

function question4(reponse) {
    let userReponse = reponse.toUpperCase();
    switch (userReponse) {
        case 'LARAVEL':
            rep4.innerHTML = "Perdu";
            break;

        case 'ANGULAR':
            rep4.innerHTML = "Bien joué réponse : Angular";
            break;

        case 'CAKEPHP':
            rep4.innerHTML = "Perdu";
            break;

        default:
            rep4.innerHTML = "Perdu";
    }
    questDiv4.style.display = 'none';
    questDiv5.style.display = '';
}

function question5(reponse) {
    let userReponse = reponse.toUpperCase();
    switch (userReponse) {
        case 'LARAVEL':
            rep5.innerHTML = "Perdu";
            break;

        case 'ANGULAR':
            rep5.innerHTML = "Bien joué réponse : Angular";
            break;

        case 'CAKEPHP':
            rep5.innerHTML = "Perdu";
            break;

        default:
            rep5.innerHTML = "Perdu";
    }
    questDiv5.style.display = 'none';
}