import {expect} from '@playwright/test';
import { Globals } from '../utils/globals';

export default class LoginPage {
  constructor(page) {
    this.page = page;
  }

  /**
  * Methode to login to inqom 
  * @param email - user email
  * @param password - user password
  * @expect staut 200 from profile token, if not methode failed
  */
  async login(email, password) {
    await this.page.getByRole('textbox', {name: 'Email'}).fill(email);
    await this.page.getByRole('textbox', {name: 'Mot de passe'}).fill(password);
    const responsePromise = this.page.waitForResponse(Globals.token_api_url);
    await this.page.getByRole('button', {name: 'Se connecter', exact: true}).click();
    await this.page.waitForLoadState('networkidle');
    const response = await responsePromise;
    
    expect(response.status()).toBe(200);
  }
}
