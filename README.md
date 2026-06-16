# KHZENTI
[![React][React]][react-url]
[![React Query][react-query]][rq-url]
[![Tailwind][Tailwind CSS]][Tailwind-url]
[![TypeScript][TypeScript]][ts-url]
[![pnpm][pnpm]][pnpm-url]
[![Prettier][prettier]][prettier-url]



## CHAT USED 
https://claude.ai/chat/8999d150-e562-457b-8e39-4f1ed23d7660

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

## GITHUB REPO TO FOLLOW 
- https://github.com/COT-WORLD/CHATCAMPUS/tree/main/frontend/src



# 07-08-11-15-16/06/2026 
- [X] Implement the structure
- [ ] Authentification
    - [ ] SignUp
      - [X] Test the error msg ( validation msg )
      - [X] true credentials
      - [X] Test if there is any regression on login feature
      - [X] Display a msg incase of the same email
    - [X] SignIn 
      - [X] in case of invalid user it will be a msg
      - [X] in case of valid user
    - [ ] Logout (front)
    - [X] Found a bug ! the login is not inside the reactQuery 


# TODO NEXT 
- [ ] The user will make more then one authentification => he will not be able 
- [ ] Add the token in the cookies or localStorage , then check in the login part if the token is their or not 
- [ ] Refactoring the services/api.ts
- [ ] Review the exist code / Exist UI
    - [ ]  delete the section of the weather in dashboard (only premium users can see it)
    - [ ]  Add jacket to the dashboard number with the statistique
    - [ ]  Update or change the calendar page (Only Premium users can see it )
    
- [ ] Implement the tanstack query 
- [ ] Implement the base route
- [ ] Get profil user
- [ ] Update Profil user
- [ ] Create wardrobe item
- [ ] Get the wardrobe items
- [ ] Update the wardrobe items
- [ ] Implement Husky
- [ ] Implement Prettier
- [ ] Implement oxlint
- [ ] Implement Storybook
- [ ] Implement Unit test