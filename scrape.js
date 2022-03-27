Array.from(document.querySelectorAll('a.card')).map(el => {
  const title = el.querySelector('.card-content').innerText;
  // const points = parseInt(el.nextSibling.querySelector('.score').innerText);
  // const url = el.querySelector('a.titlelink').href;
  // const dt = el.nextSibling.querySelector('.age').title;
  // const submitter = el.nextSibling.querySelector('.hnuser').innerText;
  // const commentsUrl = el.nextSibling.querySelector('.age a').href;
  // const id = commentsUrl.split('?id=')[1];

  return {title};
})
