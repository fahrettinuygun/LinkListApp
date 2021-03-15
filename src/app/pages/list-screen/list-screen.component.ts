import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LinkList } from 'src/app/models/link-list/link-list';
import { Link } from 'src/app/models/link/link';
import { LinkService } from 'src/app/services/link-service/link.service';

@Component({
  selector: 'app-list-screen',
  templateUrl: './list-screen.component.html',
  styleUrls: ['./list-screen.component.scss']
})
export class ListScreenComponent implements OnInit {

  linkList:LinkList;

  pageSize:number = 5;
  pageSizeOptions: number = 5;
  pageEvent: PageEvent;

  sortTypes = [
    {key:"Most Voted", value: 1},
    {key:"Less Voted", value: 2}
  ]
  selectedSortType:number
  constructor(
    private linkService: LinkService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getLinkList();
    this.linkService.$linkList.subscribe(list => {
      this.linkList = new LinkList();
      this.linkList.linkCount = list.linkCount;
      this.linkList.linkList = list.linkList;
      this.linkList.linkList.reverse();
    })
  }

  getLinkList(){
    this.linkList = this.linkService.getLinkList();
    this.linkList.linkList = this.linkList.linkList.reverse();
  }

  addLink(){
    let link = new Link();
    link.name = "Fahrettin UYGUN";
    link.url = "https://www.fahrettinuygun.com";
    link.voteCount = 0;
    this.linkService.addLink(link);
  }

  updateLinkList(list:LinkList){
    this.linkService.updateLinkList(list);
  }

  goToAddLinkScreen(){
    this.router.navigate(["AddLink"]);
  }

  onChangeSort(){
    this.sortList(this.selectedSortType);
  }

  sortList(sortType:number){
    this.linkList.linkList.sort((a,b) => a.voteCount - b.voteCount);
    if(sortType == 1){
      this.linkList.linkList.reverse();
    }
  }


}
