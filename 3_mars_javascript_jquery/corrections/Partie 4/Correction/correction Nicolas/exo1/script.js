function boleenAge(age) {
    let result = document.getElementById('boolResult');
    if (Number(age) >= 18) {
        return result.innerHTML = 'Vous êtes majeur et vacciné(e)';
    } else {
        return result.innerHTML = 'Vous êtes mineur et innocent(e)';
    }
}

function trancheAge(age) {
    let result = document.getElementById('trancheResult');
    if (Number(age) >= 18) {
        return result.innerHTML = 'age >= 18  Entrée :' + age;
    } else if (Number(age) >= 15) {
        return result.innerHTML = 'age >= 15  Entrée :' + age;
    } else if (Number(age) >= 12) {
        return result.innerHTML = 'age >= 12  Entrée :' + age;
    } else {
        return result.innerHTML = 'age > 12  Entrée :' + age;
    }
}