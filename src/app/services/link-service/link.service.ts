import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { LinkList } from 'src/app/models/link-list/link-list';
import { Link } from 'src/app/models/link/link';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  linkList:LinkList;
  $linkList = new Subject<LinkList>();

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { 
  }

  getLinkList():LinkList{
    let list = Object.assign(new LinkList(), JSON.parse(localStorage.getItem("linkList")));
    console.log("list",list);
    this.$linkList.next(list);
    this.linkList = list;
    return list;
  }

  addLink(link: Link){
    debugger;
    let links = this.getLinkList();
    if(links && links.linkList && links.linkList.filter(l => l.name == link.name).length > 0){
      this._snackBar.open("Bu bağlantı adı ile kayıtlı başka bağlantı mevcut",null, {
        duration: 2000,
      });
      return;
    }
    let newLinkList = new LinkList();
    newLinkList.linkList = links && links.linkList && links.linkList.length > 0 ? links.linkList : [];
    newLinkList.linkList.push(link);
    newLinkList.linkCount = 1;
    newLinkList.linkCount += links && links.linkCount ? links.linkCount : 0;
    localStorage.setItem("linkList", JSON.stringify(newLinkList));
    this.linkList = newLinkList;
    this.$linkList.next(newLinkList);
    this._snackBar.open("Bağlantı Eklendi",null, {
      duration: 2000,
    });
  }

  updateLinkList(list:LinkList){
    this.linkList = list;
    this.$linkList.next(list);
    localStorage.setItem("linkList", JSON.stringify(list));
  }

  updateLink(link: Link){
    if(!this.linkList || !this.linkList.linkList || this.linkList.linkList.length <= 0){
      this.getLinkList();
    }
    this.linkList.linkList.forEach(l => {
      if(l.name == link.name){
        l.voteCount = link.voteCount;
      }
    });
    this.updateLinkList(this.linkList);
  }

  removeLink(link:Link){
    if(!this.linkList || !this.linkList.linkList || this.linkList.linkList.length <= 0){
      this.getLinkList();
    }
    debugger;
    this.linkList.linkList = this.linkList.linkList.filter(l => l.name != link.name);
    this.updateLinkList(this.linkList);
  }
}
