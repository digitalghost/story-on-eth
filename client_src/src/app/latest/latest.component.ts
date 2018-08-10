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
    //cs.getUserBalance().then(balance => this.balance = balance);
  }

  ngOnInit() {
    //console.log(this.web3Provider);
    //this.cs.getUserBalance().then(balance => this.balance = balance);
    //this.cs.getInputStrByTxhash(Stories[0].txHash).then(result => {
    //  console.log(result);
      //Stories[0].fullContent = result;

    //}).catch(err => console.log(err));
    this._updateStories().then(stories => this.stories = stories).catch(err => console.log(err));
  }

  onSelect(story: Story): void {
    this.selectedStory = story;
  }

  async _updateStories():Promise<Story[]> {
    let _stories:Story[] = [];
    for(var i=0;i<this.stories.length;i++){
      var txHash = this.stories[i].txHash;
      var s:Story = new Story();
      s.fullContent = await this.cs.getInputStrByTxhash(txHash);
      s.brief = s.fullContent.slice(0,10) + "..." + s.fullContent.slice(-10);
      s.txHash = txHash;
      _stories.push(s);
    }
    return _stories;
  }

}
