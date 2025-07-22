//Pages Import
import LoginPage from './loginPage';
import EntreprisePage from './entreprisePage';
import ProfilePage from './profilePage';
//Apis Import
import TokenApi from '../services/tokenApiCheck';
import ProfileApi from '../services/profileApiCheck';

export class PageManager {
  constructor(page) {
    this.page = page;
    //Pages
    this.loginPage = new LoginPage(this.page);
    this.entreprisePage = new EntreprisePage(this.page);
    this.profilePage = new ProfilePage(this.page);
    //Apis
    this.tokenApi = new TokenApi(this.page);
    this.profileApi = new ProfileApi(this.page);
  }

  //Pages
  fromLoginPage() {
    return this.loginPage;
  }
  fromEntrepisePage() {
    return this.entreprisePage;
  }
  fromProfilePage() {
    return this.profilePage;
  }

  //Apis
  fromTokenApi() {
    return this.tokenApi;
  }
  fromProfileApi() {
    return this.profileApi;
  }
}
