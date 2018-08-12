var StoryTeller = artifacts.require("StoryTeller");

module.exports = function(deployer) {
  // Only deploy ENS if there's not already an address already.
  // i.e., don't deploy if we're using the canonical ENS address,
  // but do deploy it if we're on a test network and ENS doesn't exist.
  deployer.deploy(StoryTeller).then(function() {
    //return deployer.deploy(StoryTeller, ENS.address);
  });
};