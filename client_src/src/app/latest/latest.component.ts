import { Component, OnInit } from '@angular/core';
import { Story } from '../story';
import { Stories } from '../mock-stories';
import { ChainService } from '../chain.service';

declare let window: any;

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {

  stories = Stories;
  selectedStory:Story;

  public balance:number;

  constructor(private cs:ChainService) { 
    cs.getUserBalance().then(balance => this.balance = balance);
  }

  ngOnInit() {
    //console.log(this.web3Provider);
    console.log(window.web3);
  }

  onSelect(story: Story): void {
    this.selectedStory = story;
  }

}
