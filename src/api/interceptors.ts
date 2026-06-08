import type {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";

export function attachInterceptors(http: AxiosInstance) {
  // ── REQUEST ──────────────────────────────────────────────
  http.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = localStorage.getItem("access_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  // ── RESPONSE ─────────────────────────────────────────────
  http.interceptors.response.use(
    (response: AxiosResponse) => response, // 2xx → pass through
    async (error) => {
      const original = error.config;

      // Token expired → try refresh once
      if (error.response?.status === 401 && !original._retry) {
        original._retry = true;
        try {
          const { data } = await http.post("/auth/refresh");
          localStorage.setItem("access_token", data.access_token);
          original.headers.Authorization = `Bearer ${data.access_token}`;
          return http(original); // retry the original request
        } catch {
          localStorage.removeItem("access_token");
          window.location.href = "/login"; // hard redirect on refresh failure
        }
      }

      return Promise.reject(error);
    },
  );
}
