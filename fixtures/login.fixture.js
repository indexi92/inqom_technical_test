import {test as base, expect} from '@playwright/test';
import {Globals} from '../utils/globals';
import {PageManager} from '../pages/managerPage';

export const loginFixture = base.extend({
  loginFixture: async ({page}, use) => {
    const pm = new PageManager(page);
    await page.goto(Globals.base_url);
    await pm.fromLoginPage().login(Globals.admin_email, Globals.admin_password);
    await use(page);
  }
});
