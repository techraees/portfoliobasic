export function middleware(request) {
  if (request.nextUrl.pathname.startsWith("/api/users")) {
    request.auth = { name: "Raees" };
    console.log("Calling API USERS USERS USERS USERS USERS USERS USERS");
    // This logic is only applied to /about
  }

  if (request.nextUrl.pathname.startsWith("/api/category")) {
    console.log(
      "Calling API CATEGORUES CATEGORUES CATEGORUES CATEGORUES CATEGORUES CATEGORUES CATEGORUES"
    );

    // This logic is only applied to /dashboard
  }
}
