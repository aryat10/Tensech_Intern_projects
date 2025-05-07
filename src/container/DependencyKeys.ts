// container/DependencyKeys.ts
export const DependencyKeys = {
  Routes: Symbol.for("Routes"),
  AuthService: Symbol.for("AuthService"),
};

// This will help to have a unique key which will identify the routes across the app
// To segregate for logic class and implementation seperate blueprint
// This makes independency of class

// Use dependency injections
