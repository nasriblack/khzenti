## state-based navigation (navigation like the mobile with state)
- the user will lost the state
- url don't work 
- browser back dosen't work  
- SEO prb

## WHAT SHOULD I DO 
<Route path="/" element={<HomePage />} />
<Route path="/wardrobe" element={<WardrobePage />} />
<Route path="/generate" element={<GenerateOutfitPage />} />
<Route path="/calendar" element={<CalendarPage />} />
<Route path="/profile" element={<ProfilePage />} />

<NavLink to="/wardrobe">


## Hybrid solution (best solution)

<Route path="/" element={<Layout />}>
  <Route index element={<HomePage />} />
  <Route path="wardrobe" element={<WardrobePage />} />
  <Route path="generate" element={<GenerateOutfitPage />} />
  <Route path="calendar" element={<CalendarPage />} />
  <Route path="profile" element={<ProfilePage />} />
</Route>

<div className="pb-20">
  <Outlet />
</div>

<BottomNav />


## Improve Existing code 

const pages = {
  home: <HomePage onAddClothes={() => setShowAddWizard(true)} />,
  wardrobe: <WardrobePage onAddClothes={() => setShowAddWizard(true)} />,
  generate: <GenerateOutfitPage />,
  calendar: <CalendarPage />,
  profile: (
    <ProfilePage
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
    />
  ),
};

<main className="pb-20">
  {pages[currentPage]}
</main>



# TODO NEXT 
- [ ] Review the exist code / Exist UI
    - [ ]  delete the section of the weather in dashboard
    - [ ]  Add jacket to the dashboard number with the statistique
    - [ ]  Update or change the calendar page
    
- [ ] Implement the tanstack query 
- [ ] Implement the base route
- [ ] Authentification
    - [ ] SignUp
    - [ ] SignIn
- [ ] Get profil user
- [ ] Update Profil user
- [ ] Create wardrobe item
- [ ] Get the wardrobe items
- [ ] Update the wardrobe items