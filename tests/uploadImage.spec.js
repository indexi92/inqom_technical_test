import {expect, test} from '@playwright/test';
import {loginFixture} from '../fixtures/login.fixture';
import {PageManager} from '../pages/managerPage';
import {profileApiEvent} from '../data/profileApiEvent';

loginFixture('upload image', async ({loginFixture}) => {
  const pm = new PageManager(loginFixture);
  await test.step('check if entreprise page & token Api Status', async () => {
    await pm.fromEntrepisePage().checkIAmOnEntreprisePage();
    await pm.fromTokenApi().isApiStatus500();
    await pm.fromTokenApi().isIdActivityNotNull();
  });
  await test.step('go to profile page And Check Profile Api', async () => {
    await pm.fromEntrepisePage().goToMyProfile();
    await pm.fromProfilePage().checkIAmOnProfilePage();

    //We can check all the propreties of the Api reponse at once
    const check = await pm.fromProfileApi().getprofileApiResponse();
    expect(check).toEqual(profileApiEvent.expectedInProfileApi.data);

    //Or we can check some the propreties of the Api reponse one by one
    await pm.fromProfileApi().checkIsTheGoodEmail();
    await pm.fromProfileApi().checkIdIsNotNull();
  });
  await test.step('upload a profile Image', async () => {
    await pm.fromProfilePage().uploadProfileImage();
    await pm.fromProfilePage().clickOnSaveModificationsBtn();
    await pm.fromProfileApi().checkUrlAvatarIsNotNull();
  });
});
