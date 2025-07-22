import * as process from 'process';

export class Globals {
  // Url
  static base_url = process.env.BASE_URL ?? 'Wrong URL';
  static token_api_url = process.env.TOKEN_API_URL ?? 'Wrong URL';
  static profile_api_url = process.env.PROFILE_API_URL ?? 'Wrong URL';
  // Secrets
  static admin_email = process.env.ADMIN_EMAIL ?? 'Wrong Email';
  static admin_password = process.env.ADMIN_PASSWORD ?? 'Wrong Password';
  static token = process.env.TOKEN ?? 'Wrong Token';
}
