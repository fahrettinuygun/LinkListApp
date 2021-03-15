import { Component, Input, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link/link';
import { LinkService } from 'src/app/services/link-service/link.service';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.scss']
})
export class LinkCardComponent implements OnInit {

  @Input()
  link:Link

  constructor(
    private linkService:LinkService
  ) { }

  ngOnInit(): void {
  }

  vote(count){
    this.link.voteCount += count;
    this.updateLink();
  }

  remove(){
    this.linkService.removeLink(this.link);
  }

  updateLink(){
    this.linkService.updateLink(this.link);
  }

}
