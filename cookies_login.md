* the backend should send:
```http
Set-Cookie: accessToken=xxxxx;
HttpOnly;
Secure;
SameSite=Strict;
Path=/
```

* In the front end 

```js
onSuccess: () => {
      // no token storage
      // cookie already stored by browser
    },
```

* axios configuration
```ts
import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});
```

* for the Backend we need to send a request to 
```http
GET /auth/me
```

* example response 
```json
{
  "success": true,
  "data": {
    "id": "123",
    "email": "test@gmail.com",
    "name": "Nasri"
  }
}
```

* create a hook
```ts

export const useMe = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const { data } = await api.get("/auth/me");
      return data;
    },
    retry: false,
  });
};
```

* App.tsx
instead of this 
``` ts
const [isLoggedIn, setIsLoggedIn] = useState(false);
```
* we should use react query
``` ts
const { data, isLoading, isError } = useMe();
// 
if (isLoading) {
  return <div>Loading...</div>;
}
//
if (isError) {
  return (
    <LoginPage
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
    />
  );
}
```