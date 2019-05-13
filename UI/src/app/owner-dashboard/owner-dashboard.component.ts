import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../advertisement.service';
import { Advertisement } from '../advertisement.model';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';


import { AdsModel } from '../_models/adsModel';
import { AlertService } from '../_services/alert.service';
import { AdsService } from '../_services/ads.service';
import { AuthenticationService } from '../_services/authentication.service';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.css']
})
export class OwnerDashboardComponent implements OnInit {

  myPosts: AdsModel[];
  myAds: Advertisement[];
  advtInfo: Advertisement;
  idA: any;
  category;
  brand;
  product;
  dop;
  desc;
  aid;
  downcredits;

  rechargeAmount;
  userList:string[];

  currentUser: User;
  constructor(private service: AdvertisementService,
    private router: Router, private alertService: AlertService,
    private postService: AdsService,
    private authenticationService: AuthenticationService,
    private userService: UserService) {

  }


  ngOnInit() {
    // this.getAllAdvt();
    this.downcreditshow();
    this.getCurrentUserDetails();
    this.getMyAds();
  }

  getCurrentUserDetails() {

    this.userService.getCurrentUserDetails()
      .subscribe(
        data => {
          console.log(data);
          this.currentUser = data;
        },
        error => console.log(error)
      );
  }

  getAllAdvt() {
    this.service.getAllAdvt().subscribe(
      data => {
        this.myAds = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  submitAdvt() {

    if (this.category !== undefined && this.brand !== undefined && this.product !== undefined && this.desc !== undefined) {

      let date = new Date();
      let fullDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

      let advtObj = {
        categoryadd: this.category,
        brand: this.brand,
        product: this.product,
        dop: fullDate,
        description: this.desc
      };

      if (this.downcredits < 20) {
        alert('Please reacharge..!!');
      } else {
        this.service.writeAdvt(advtObj)
          .subscribe(
            response => {
              this.getMyAds();
              this.downcreditshow();
              alert('Advertisement has been posted...!!');
              this.router.navigateByUrl('/showAdd');
            },
            error => {
              this.getMyAds();
              console.log(error);

            });
      }

      this.category = '';
      this.brand = '';
      this.product = '';
      this.dop = '';
      this.desc = '';


    }
  }

  getMyAds() {
    this.service.getMyAds()
      .subscribe(
        data => {
          this.myAds = data;
        },
        error => {
          console.log(error);
        }
      );
  }


  downcreditshow() {

    this.userService.showDowncredits()
      .subscribe(
        data => {
          this.downcredits = data;
        },
        error => {
          console.log(error);
        }
      );


  }

  deleteAd(id) {
    if (confirm(`Are you sure, you want to delete this Ad`)) {
      this.service.deleteAd(id)
        .subscribe(
          data => {
            alert('Ad deleted');
            this.getMyAds();
          },
          error => {
            this.getMyAds();
            console.log(error);
          }
        );
    }
  }

  loadEditData(id: number) {
    this.service.getAdById(id)
      .subscribe(
        data => {
          this.idA = data.id;
          this.category = data.categoryadd;
          this.brand = data.brand;
          this.product = data.product;
          this.dop = data.dop;
          this.desc = data.description;
        }, error => {
          console.log(error);
        });
  }

  updateAd() {
    const updateAdObj = {
      id: this.idA,
      categoryadd: this.category,
      brand: this.brand,
      product: this.product,
      dop: this.dop,
      description: this.desc
    }
    this.service.updateAd(updateAdObj)
      .subscribe(
        data => {
          this.getMyAds();
          alert('Advertisement Updated');
        },
        error => {
          console.log(error);
        }
      );
    this.category = '';
    this.brand = '';
    this.product = '';
    this.dop = '';
    this.desc = '';
  }


  rechargeFunc() {
    console.log(this.rechargeAmount);
    if(this.rechargeAmount<0){
      alert("Please Enter A Valid Amount");
      return;
    }
    this.userService.updateDowncredits(this.rechargeAmount).subscribe(
      data => {
        this.downcredits = data;

      },
      error => {

        console.log(error);
      }

    );
  }


  namesGet(vid:number){

    this.userService.getViews(vid).subscribe(data=>{this.userList=data;console.log(this.userList)},err=>{console.log(err);});


  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}


