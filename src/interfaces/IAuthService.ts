// interfaces/IAuthService.ts
export interface IAuthService {
    register(email: string, password: string): string;
    login(email: string, password: string): string;
  }
  