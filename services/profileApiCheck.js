import {request, expect} from '@playwright/test';
import {Globals} from '../utils/globals';

export default class ProfileApi {
  /**
   * Methode to go get profile api Datas
   * @return data in json format
   */
  async getprofileApiResponse() {
    const context = await request.newContext();
    const reponse = await context.get('https://api-staging.inqom.com/api/app/users/674883/profile', {
      headers: {
        Authorization: `${Globals.token}`
      }
    });
    const data = await reponse.json();
    return data;
  }

  /**
  * Methode to check email from profile api datas
  * @expect Email data to equal user email
  */
  async checkIsTheGoodEmail() {
    const data = await this.getprofileApiResponse();
    const verifyEmail = data.Email;

    expect(verifyEmail).toEqual(Globals.admin_email);
  }

  /**
  * Methode to check Id from profile api datas
  * @expect id not to be null
  */
  async checkIdIsNotNull() {
    const data = await this.getprofileApiResponse();
    const idActivity = data.Id;

    expect(idActivity).not.toBeNull();
  }

  /**
  * Methode to check Url Avatar from profile api datas
  * @expect Url Avatar not to be null
  */
  async checkUrlAvatarIsNotNull() {
    const data = await this.getprofileApiResponse();
    const urlAvatar = data.urlAvatar;

    expect(urlAvatar).not.toBeNull();
  }
}
