import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserService } from '../_services/user.service';
import { AuthenticationService } from '../_services/authentication.service';
import { AlertService } from '../_services/alert.service';
import { EndUserLinkService } from '../end-user-link.service';
import { StoreUidService } from '../store-uid.service';
import { EndUserService } from '../end-user.service';
import { MustMatch } from "../_helpers/must-match.validator";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService,
        private eul: EndUserLinkService,
        private euid: StoreUidService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    euser: EndUserService;
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.minLength(3)]],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            phone: ['', Validators.required],
            gender: ['', Validators.required],
            type: ['', Validators.required]
        },
        {
          validator: MustMatch('password', 'confirmPassword')
        }
  );
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        console.log("Registerrr");
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        console.log("after validation");

        // building JSON for form data
        const formData = {

            firstname: this.f.firstName.value,
            lastname: this.f.lastName.value,
            email: this.f.email.value,
            username: this.f.email.value,
            password: this.f.password.value,
            phone: this.f.phone.value,
            gender: this.f.gender.value,
            type: this.f.type.value
        };

        this.loading = true;
        this.userService.register(formData)
            .pipe(first())
            .subscribe(
                data => {
                    console.log("regiTSSS");
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });

        // this.eul.createEndUser(this.registerForm.value)
        //     .pipe(first())
        //     .subscribe(
        //         data => {
        //             this.alertService.success('Registration successful', true);
        //             this.router.navigate(['/login']);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
        //     this.eul.findId(this.registerForm.value).subscribe(data => this.euid.uId = data);
        //     this.router.navigate(['/user-dashboard']);
    }
}
