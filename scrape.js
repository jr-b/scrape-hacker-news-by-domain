Array.from(document.querySelectorAll('article')).map(el => {
  const title = el.querySelector('h1.text-huge-from-xs').innerText;
  const info = el.querySelector('div.line-height-normal').innerText;
  const descrip = el.querySelector('div.text-current-to-xs').innerText;
  // const points = parseInt(el.nextSibling.querySelector('.score').innerText);
  // const url = el.querySelector('a.titlelink').href;
  // const dt = el.nextSibling.querySelector('.age').title;
  // const submitter = el.nextSibling.querySelector('.hnuser').innerText;
  // const commentsUrl = el.nextSibling.querySelector('.age a').href;
  // const id = commentsUrl.split('?id=')[1];

  return {title, info, descrip};
})
