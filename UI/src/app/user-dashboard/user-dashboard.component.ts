import { Component, OnInit } from "@angular/core";
import { AdvertisementService } from "../advertisement.service";
import { Advertisement } from "../advertisement.model";
import { Router } from "@angular/router";
import { EndUserLinkService } from "../end-user-link.service";
import { StoreUidService } from "../store-uid.service";
import { AuthenticationService } from "../_services/authentication.service";
import { UserService } from "../_services/user.service";
import { User } from "../_models/user";

@Component({
  selector: "app-user-dashboard",
  templateUrl: "./user-dashboard.component.html",
  styleUrls: ["./user-dashboard.component.css"]
})
export class UserDashboardComponent implements OnInit {
  advts: Advertisement[];
  credits;
  ide;
  currentUser: User;
  reedemAmount;
  singleAd: Advertisement;
  clicklimit: number;
  categories: String[];
  categoryList: String[];
  adclicklimit: number;

  clickList: number[];
  walletBalance:number;

  messageStatus: string;

  constructor(
    private service: AdvertisementService,
    private router: Router,
    private eul: EndUserLinkService,
    private euid: StoreUidService,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) { }
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  ngOnInit() {
    // this.ide = this.euid.uId;
    // this.getAllAdsById(this.ide);
    this.creditShow();
    this.getCurrentUserDetails();
    this.getAllAds();
    this.getCategoryList();
    this.findPerdayClicks();

    this.getClickList();
    this.WalletCheck();

  }

  getAllAds() {
    this.service.getAllAdvt().subscribe(
      data => {
        this.advts = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  getCurrentUserDetails() {
    this.userService.getCurrentUserDetails().subscribe(
      data => {
        console.log(data);
        this.currentUser = data;
      },
      error => console.log(error)
    );
  }

  getAllAdsById(id: number) {
    this.eul.getAllAdsByEid(id).subscribe(
      data => {
        this.advts = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  clickCount(id: number) {
    this.userService.clickify(id).subscribe(
      data => {
        console.log(data);
      },

      err => {
        console.log(err);
      }
    );
  }

  creditCount(vid: number) {

    this.getAdById(vid);
      console.log(vid);
    //this.credits=0;

    if (this.existsClick(vid)) {
      this.messageStatus = `You have already earned credits for this ad`;
    }
    else if(this.clicklimit === 0){
      this.messageStatus = `You have exceeded daily click limit`;
    }
    else {

      // this.clickCount(vid);
      // console.log("clicked");

      this.userService.creditFlow(vid).subscribe(
        data => {
          this.credits = data;
          this.creditShow();
          this.findPerdayClicks();
          this.getCategoryList();
          this.getClickList();
          this.messageStatus = `Congratulations... Added 2 credits`;
          console.log(this.credits);

        },
        err => {
          console.log(err);
        }
      );
    }
  }

  creditShow() {
    this.userService.showCredits().subscribe(
      data => {
        this.credits = data;
        console.log('User Credit:' + data);
      },
      err => {
        console.log(err);
      }
    );

    // console.log(this.credits)
    // return this.credits;
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }

  clickAdd(id: number) {
    this.getAdById(id);
  }

  getAdById(aid: number) {
    this.service.getAdById(aid).subscribe(
      data => {
        this.singleAd = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  reedemFunc() {
    console.log(this.reedemAmount);

    if(this.reedemAmount>0 && this.credits>0 && this.reedemAmount<=this.credits){
      alert("Amount Reedemed Successfully...!!!");

    }


    if( this.reedemAmount >this.credits){
      alert("Insufficient Credits...!!!");
      return;
    }
    this.userService.updateUpcredits(this.reedemAmount).subscribe(

      data => {

        this.credits = data;
        if(this.reedemAmount<=0){
          alert("Please Enter A Valid Amount");
          return;
        }




      },
      error => {
        console.log(error);
      }
    );
    /*if(this.credits==0 ){
      alert("Insufficient Credits...!!!");
      return;
    }*/
  }

  findPerdayClicks() {

    this.userService.getPerdayClick().subscribe(
      data => {
        this.clicklimit = data[0];
        console.log('Per day clicklimit: ' + data[0]);
      },

      error => {
        console.log(error);
      }
    )
  }

  getCategoryList() {

    this.service.getCategoryList().subscribe(
      data => {
        this.categoryList = data;
      },
      error => {
        console.log(error);
      }
    );

  }

  // filter(cat: string){
  //   [].forEach.call(document.querySelectorAll(`.${cat}`), function (el) {
  //     el.style.display = ;
  //   });
  // }

  findVidClickLimit(vid: number) {

    this.userService.getVidClick(vid).subscribe(
      data => {
        this.adclicklimit = data;
        console.log('Add present in table:' + data);
      },
      error => { console.log(error); }
    )

  }

  filter(cat: string) {

    this.service.getAdsByCategory(cat).subscribe(

      data => { this.advts = data; },
      error => {

        console.log(error);
      }
    );
  }

  // getMessage() {
  //   let message = '';
  //   if (this.clicklimit === 0 && this.adclicklimit === 0) {
  //     message = `Sorry...You have already gained maximum credits for today..!!!`;
  //   }
  //   else if (this.clicklimit >= 1 && this.adclicklimit == 0) {
  //     message = `Congratulations!!!! You have earned 2 credits..`;
  //   }
  //   else if (this.adclicklimit >= 1) {
  //     message = `Sorry You Have Already Earned The Credits For This Advertisement`;
  //   }
  //   return message;
  // }


  getClickList() {
    this.service.getClickList()
      .subscribe(
        data => {
          this.clickList = data;
          console.log(data);
        }
      );
  }

  existsClick(aid: number) {
    if (this.clickList === undefined || this.clickList === null) {
      console.log(aid+' false');
      return false;
    }
    else {
      let flag = this.clickList.indexOf(aid) !== -1 ? true : false;
      console.log(aid);
      console.log(flag);
      return flag;
    }
  }

WalletCheck(){

  return this.userService.viewBalance().subscribe(data=>{console.log(data);this.walletBalance=data;},
    err=>{console.log(err);}
    );
}

}
