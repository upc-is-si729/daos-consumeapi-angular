import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  invalidUrl: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  navigateToHome() {
    this.router.navigate(['home']).then();
  }

  ngOnInit(): void {
    this.invalidUrl = this.route.snapshot.url[0].path;
  }

}
