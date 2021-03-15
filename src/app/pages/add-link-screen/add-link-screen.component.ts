import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Link } from 'src/app/models/link/link';
import { LinkService } from 'src/app/services/link-service/link.service';

@Component({
  selector: 'app-add-link-screen',
  templateUrl: './add-link-screen.component.html',
  styleUrls: ['./add-link-screen.component.scss']
})
export class AddLinkScreenComponent implements OnInit {

  linkName:string;

  linkUrl:string;
  
  constructor(
    private router: Router,
    private linkService: LinkService,
  ) { }

  ngOnInit(): void {
  }

  goToList(){
    this.router.navigate(["List"]);
  }

  addLink(){
    let link = new Link();
    link.name = this.linkName;
    link.url = this.linkUrl;
    link.voteCount = 0;
    this.linkService.addLink(link);
    this.linkName = null;
    this.linkUrl = null;
  }


}
