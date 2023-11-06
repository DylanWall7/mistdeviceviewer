export const msalConfig = {
  auth: {
    clientId: "915c46fe-ee91-41c7-98ab-b257b04ea7ec",
    authority:
      "https://login.microsoftonline.com/07420c3d-c141-4c67-b6f3-f448e5adb67b", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: "http://localhost:3000/",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ["User.Read"],
};

export const GizmoRequest = {
  scopes: ["api://915c46fe-ee91-41c7-98ab-b257b04ea7ec/access_as_user"],
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};

export const PostReservation = {
  PostReservationEndpoint: "https://gizmo.kiewitplaza.com/api/dhcp/reservation",
};

export const PatchTheReservation = {
  PatchTheReservationEndpoint:
    "https://gizmo.kiewitplaza.com/api/dhcp/reservation",
};
export const DeleteTheReservation = {
  DeleteTheReservationEndpoint:
    "https://gizmo.kiewitplaza.com/api/dhcp/reservation",
};

export const DHCPStats = {
  DHCPStatsEndpoint:
    "https://gizmo.kiewitplaza.com/api/dhcp/statistics/10.154.80.0",
};
