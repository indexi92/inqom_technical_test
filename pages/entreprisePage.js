import {expect} from '@playwright/test';
import { Globals } from '../utils/globals';

export default class EntreprisePage {
  constructor(page) {
    this.page = page;
  }

  /**
  * Methode to Check I'am on entreprise Page
  * @expect url to contain /home, if not methode failed
  */
  async checkIAmOnEntreprisePage() {
    const url = await this.page.url();
    expect(url).toContain('/home');
  }

  /**
  * Methode to go to my profile page from entreprise page
  * @expect staut 200 from profile API, if not methode failed
  */
  async goToMyProfile() {
    const responsePromise = this.page.waitForResponse(Globals.profile_api_url);
    await this.page.getByRole('link', {name: 'Ca'}).click();
    await this.page.waitForLoadState('networkidle');
    const response = await responsePromise;

    expect(response.status()).toBe(200);
  }
}
