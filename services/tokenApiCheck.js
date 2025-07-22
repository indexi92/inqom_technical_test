import {request, expect} from '@playwright/test';
import {Globals} from '../utils/globals';
export default class TokenApi {
  /**
   * Methode to go get token api Datas
   * @return data in json format
   */
  async getTokenApiResponse() {
    const context = await request.newContext();
    const reponse = await context.post('https://auth-staging.inqom.com/identity/connect/token');
    const data = await reponse.json();
    return data;
  }

  /**
  * Methode to check API status from token api data
  * @expect API status to be 500
  */
  async isApiStatus500() {
    const data = await this.getTokenApiResponse();
    const idActivity = data.statusCode;

    expect(idActivity).toBe(500);
    //Or we can return idActivity to have the assertion in the test
  }

  /**
  * Methode to check Id Activity from token api datas
  * @expect Id Activity not to be null
  */
  async isIdActivityNotNull() {
    const data = await this.getTokenApiResponse();
    const idActivity = data.activityId;

    expect(idActivity).not.toBeNull();
  }
}
