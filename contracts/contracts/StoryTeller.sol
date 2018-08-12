pragma solidity ^0.4.22;


contract StoryTeller {

  struct Story{
    uint256 id;
    address publisher;
    uint256 timestamp;
    string brief;
    string fullContent;
  }

  address public owner;
  mapping(uint256=>Story) public stories;
  uint256[] storyIds;


  constructor() {
    owner = msg.sender;
    
  }

  event StoryTold(uint256 sid,address publisher,uint256 timestamp,string brief,string fullContent);
  function tellStory(string brief,string fullContent) public payable {
    require(msg.value > 0);
    Story memory s = Story(storyIds.length,msg.sender,block.timestamp,brief,fullContent);
    stories[storyIds.length] = s;
    storyIds.push(storyIds.length);

    msg.sender.transfer(msg.value);
    emit StoryTold(s.id,s.publisher,s.timestamp,s.brief,s.fullContent);
  }

  function getStoryIds() public view returns(uint256[]){
    return storyIds;
  }

  function countStories() public view returns(uint256){
    return storyIds.length;
  }

  function getStory(uint256 sid) public view returns(uint256 id,address publisher,uint256 timestamp,string brief,string fullContent){
    Story storage s = stories[sid];
    return (s.id,s.publisher,s.timestamp,s.brief,s.fullContent);

  }
}
