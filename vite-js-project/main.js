const appElement = document.getElementById('app');

function generatePageHeaderHTML() {
  const outsidePageHeaderContainer = document.createElement('header');
  const insidePageHeaderContainer = document.createElement('div');

  const logoContainer = document.createElement('div');
  logoContainer.textContent = 'Blog Site';

  const navMenuList = document.createElement('ul');

  const navHomeItem = document.createElement('li');
  const navHomeLink = document.createElement('button');
  navHomeLink.addEventListener('click', () => displayPageContents('home'));
  navHomeLink.textContent = 'Home';

  navHomeItem.appendChild(navHomeLink);
  navMenuList.appendChild(navHomeItem);

  const navContactItem = document.createElement('li');
  const navContactLink = document.createElement('button');
  navContactLink.addEventListener('click', () => displayPageContents('contact'));
  navContactLink.textContent = 'Contact';

  navContactItem.appendChild(navContactLink);
  navMenuList.appendChild(navContactItem);

  const navPostsItem = document.createElement('li');
  const navPostsLink = document.createElement('button');
  navPostsLink.addEventListener('click', () => displayPageContents('posts'));
  navPostsLink.textContent = 'Posts';

  navPostsItem.appendChild(navPostsLink);
  navMenuList.appendChild(navPostsItem);

  insidePageHeaderContainer.append(logoContainer, navMenuList);
  outsidePageHeaderContainer.appendChild(insidePageHeaderContainer);

  return outsidePageHeaderContainer;
}

function generatePageFooterHTML() {
  const outerWrapper = document.createElement('div');
  const innerWrapper = document.createElement('footer');
  innerWrapper.classList.add('page-footer-inner-wrapper');

  const box1 = document.createElement('div');
  box1.style.backgroundColor = '#ff00ff';
  box1.textContent = 'Box 1';

  const box2 = document.createElement('div');
  box2.style.backgroundColor = '#ff0000';
  box2.textContent = 'Box 2';

  const box3 = document.createElement('div');
  box3.style.backgroundColor = '#0000ff';
  box3.textContent = 'Box 3';

  innerWrapper.append(box1, box2, box3);
  outerWrapper.appendChild(innerWrapper);

  return outerWrapper;
}

function generateMainPage() {
  const mainOutsideWrapper = document.createElement('div');
  const mainInsideWrapper = document.createElement('main');

  const heading = document.createElement('h1');
  heading.textContent = 'Main Page';

  const body = document.createElement('p');
  body.textContent = 'This is the main page';

  mainInsideWrapper.append(heading, body);
  mainOutsideWrapper.append(mainInsideWrapper);
  return mainOutsideWrapper;
}

function generateContactPage() {
  const contactOutsideWrapper = document.createElement('div');
  const contactInsideWrapper = document.createElement('main');

  const heading = document.createElement('h1');
  heading.textContent = 'Contact Page';

  const body = document.createElement('p');
  body.textContent = 'This is the contact page';

  contactInsideWrapper.append(heading, body);
  contactOutsideWrapper.append(contactInsideWrapper);
  return contactOutsideWrapper;
}

function displayPageContents(currentPage) {
  appElement.textContent = '';
  const pageHeader = generatePageHeaderHTML();


  // What page to show
  let pageMain = '';
  if (currentPage === 'home') {
    pageMain = generateMainPage();
  } else if (currentPage === 'contact') {
    pageMain = generateContactPage();
  }

  const pageFooter = generatePageFooterHTML();

  appElement.appendChild(pageHeader);
  appElement.appendChild(pageMain);
  appElement.appendChild(pageFooter);
}

function main() {
  console.log('Hello World!');
  displayPageContents('home');
}

main();