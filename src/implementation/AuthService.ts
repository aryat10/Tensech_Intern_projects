// implementation/AuthService.ts
import { injectable } from "inversify";
import { IAuthService } from "../interfaces/IAuthService";

@injectable()
export class AuthService implements IAuthService {
  register(email: string, password: string): string {
    // Dummy register logic
    return `User registered with email: ${email}`;
  }

  login(email: string, password: string): string {
    // Dummy login logic
    const mockEmail = "test@example.com";
    const mockPassword = "123456";

    if (email === mockEmail && password === mockPassword) {
      return "✅ Login successful";
    }
    return "❌ Invalid email or password";
  }
}
