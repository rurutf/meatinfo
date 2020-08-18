//let question = document.getElementById('question-link');
function ChangeText (btn) {
    //document.getElementById("question-link").innerHTML="Отменить запрос в сотрудники";
    if (btn.innerHTML == 'Работаете в этой компании?') {
        btn.innerHTML = 'Отменить запрос в сотрудники';
        setTimeout(function() {
            btn.innerHTML = 'Я работаю в этой компании';
            btn.className = "question-link-green";
        }, 2000);
        btn.className = 'question-link';
    } 
    else if (btn.innerHTML == 'Отменить запрос в сотрудники') {
        setTimeout(function() {
            btn.innerHTML = 'Работаете в этой компании?';
            btn.className = "question-link";
        }, 2000);
        btn.className = "question-link";
    }
    else {btn.innerHTML = 'Работаете в этой компании?';
        btn.className = "question-link";
    }
}