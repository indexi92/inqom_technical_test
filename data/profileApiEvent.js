import {expect} from '@playwright/test';
import { Globals } from '../utils/globals';
export const profileApiEvent = {
  expectedInProfileApi: {
    data: {
      Id: expect.any(Number),
      Email: Globals.admin_email,
      Gender: 'Mrs',
      FirstName: 'Ca',
      LastName: 'Ca',
      UrlAvatar: expect.any(String),
      TwoFactorEnabled: expect.any(Boolean),
      ManagedAccount: expect.any(Boolean)
    }
  }
};
