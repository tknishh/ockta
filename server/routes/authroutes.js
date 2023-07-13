app.get('/login', (req, res) => {
    res.render('login');
  });
  
  app.get('/dashboard', (req, res) => {
    // Once authenticated, the user can proceed to the dashboard
    res.render('dashboard', { user: req.user });
  });
  
  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });  