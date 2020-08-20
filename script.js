//Кнопка "Работаете в этой компании?"
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

//Всплывающая подсказка
let tooltipElem;

    document.onmouseover = function(event) {
    let target = event.target;

      // если у нас есть подсказка...
    let tooltipHtml = target.dataset.tooltip;
    if (!tooltipHtml) return;

      // ...создадим элемент для подсказки

    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = tooltipHtml;
    document.body.append(tooltipElem);

      // спозиционируем его сверху от аннотируемого элемента (top-center)
    let coords = target.getBoundingClientRect();

    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
      if (left < 0) left = 0; // не заезжать за левый край окна

    let top = coords.top - tooltipElem.offsetHeight - 5;
      if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
        top = coords.top + target.offsetHeight + 5;
    }

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';
    };

    document.onmouseout = function(e) {

    if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
    }

    };

