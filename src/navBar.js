function Nav() {
  return (
    <nav class="bp5-navbar {{.modifier}}">
    <div class="bp5-navbar-group bp5-align-left">
      <div class="bp5-navbar-heading">Solver</div>
      <input class="bp5-input" placeholder="Search files..." type="text" />
    </div>
    <div class="bp5-navbar-group bp5-align-right">
      <button class="bp5-button bp5-minimal bp5-icon-home">ProblemCode</button>
      <button class="bp5-button bp5-minimal bp5-icon-document">Files</button>
      <span class="bp5-navbar-divider"></span>
      <button class="bp5-button bp5-minimal bp5-icon-user"></button>
      <button class="bp5-button bp5-minimal bp5-icon-notifications"></button>
      <button class="bp5-button bp5-minimal bp5-icon-cog"></button>
    </div>
    </nav>
    
  );
}

export default Nav;