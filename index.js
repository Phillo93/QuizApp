document.addEventListener("DOMContentLoaded", function () {
  const firstCardBookmarkButton = document.querySelector(
    ".card-list__item:first-child .bookmark"
  );
  const firstCardAnswerButton = document.querySelector(
    ".card-list__item:first-child .card__button-answer"
  );

  firstCardBookmarkButton.addEventListener("click", function () {
    this.classList.toggle("bookmark--active");
  });

  firstCardAnswerButton.addEventListener("click", function () {
    const answer = this.parentElement.querySelector(".card__answer");
    answer.classList.toggle("card__answer--active");
  });
});
