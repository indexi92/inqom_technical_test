import {expect} from '@playwright/test';
import {url} from 'inspector';
import { Globals } from '../utils/globals';

export default class ProfilePage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Methode to Check I'am on profile Page
   * @expect url to contain /profile, if not methode failed
   */
  async checkIAmOnProfilePage() {
    const url = await this.page.url();
    expect(url).toContain('/profile');
  }

  /**
   * Methode to upload a profile picture
   * @expect staut 200 from blob API, if not methode failed
   */
  async uploadProfileImage() {
    await this.page.setInputFiles('input[type="file"]', './images/imageProfileForTest.jpg');
    const responsePromise = this.page.waitForResponse((resp) =>
      resp.url().startsWith('blob:https://staging.inqom.com/')
    );
    await this.page.getByRole('button', {name: 'OK'}).click();
    await this.page.waitForLoadState('networkidle');
    const response = await responsePromise;

    expect(response.status()).toBe(200);
  }

  /**
   * Methode to save modification on profile 
   * @expect staut 200 from profile API, if not methode failed
   */
  async clickOnSaveModificationsBtn() {
    const responsePromise = this.page.waitForResponse(Globals.profile_api_url);
    await this.page.getByRole('button', {name: 'Enregistrer les modifications'}).click();
    await this.page.waitForLoadState('networkidle');
    const response = await responsePromise;

    expect(response.status()).toBe(200);
  }
}
