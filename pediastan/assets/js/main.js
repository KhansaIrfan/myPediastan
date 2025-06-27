
  let toggleButton = document.querySelector('.mobile-menu-button');
  let sidebar = document.querySelector('.sidebar-nav');
  let rightSideBar = document.querySelector('.right-sidebar');

  toggleButton.addEventListener('click', function(){
    sidebar.classList.toggle('active');
   rightSideBar.classList.toggle('active');
    document.body.style.overflow = 'hidden';
  });