const tabs = document.querySelector('.tabs');
const btns = document.querySelectorAll('.btn');
const articles = document.querySelectorAll('.content');

tabs.addEventListener('click', function (e) {
  const id = e.target.id;
  if (id) {
    // remove other buttons when the selected one clicked
    btns.forEach(function (btn) {
      btn.classList.remove('live');
    });
    e.target.classList.add('live');
    // hide other articles when the selected on clicked
    articles.forEach(function (article) {
      article.classList.remove('live');
    });
    const element = document.getElementById(id);
    element.classList.add('live');
  }
});
