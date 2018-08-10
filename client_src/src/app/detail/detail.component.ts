import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ChainService }  from '../chain.service';
import { Story } from '../story';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  story:Story;

  constructor(
    private route: ActivatedRoute,
    private chainService: ChainService,
    private location: Location) { }

  ngOnInit() {
    this._initStory();
  }

  _initStory(){
    let txHash:string = this.route.snapshot.paramMap.get('txhash');
    let me = this;
    this.chainService.getInputStrByTxhash(txHash).then(inputString =>{
      me.story = {"txHash":txHash,"brief":inputString.slice(0,10) + "..." + inputString.slice(-10),"fullContent":inputString};
      console.log(me.story);
    })
  }

  goBack(): void {
    this.location.back();
  }

}
