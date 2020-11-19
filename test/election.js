const { assert } = require("chai");

var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts){
    var electionInstance;

    it('Should initialize two candidates', () => {
        return Election.deployed().then((instance) => {
            return instance.candidatesCount();
        }).then((count) => {
            assert.equal(count, 2);
        });
    });

    it('should validate the data associated with candidates', () => {
        return Election.deployed().then((instance) => {
            electionInstance = instance;
            return electionInstance.candidates(1);
        }).then((candidate) => {
            assert.equal(candidate[0], 1);
            assert.equal(candidate[1], "Candidate 1");
            assert.equal(candidate[2], 0);
            return electionInstance.candidates(2);
        }).then((candidate) => {
            assert.equal(candidate[0], 2);
            assert.equal(candidate[1], "Candidate 2");
            assert.equal(candidate[2], 0);
        });
    });

    it('allows voter to cast a vote', () => {
        return Election.deployed().then((i) => {
            electionInstance = i;
            candidateId = 1;
            electionInstance.vote(candidateId, {from: accounts[0]});
        }).then(reciept => {
            return electionInstance.voters(accounts[0]);
        }).then(voted => {
            assert(voted, 'the voter was marked as voted!'); 
            return electionInstance.candidates(candidateId);
        }).then(candidate => {
            var voteCount = candidate.voteCount;
            assert.equal(voteCount, 1, "Increments the candidate's votecount");
        }) 
    });
        
    it('throws an exception for double voting', () => {
        return Election.deployed().then(i => {
            electionInstance = i;
            return electionInstance.vote(1, {from: accounts[0]});
        }).then(assert.fail).catch((error) => {
            assert(error.message.indexOf('revert') >= 0, "error must contain revert");
            return electionInstance.candidates(1);
        }).then(candidate => {
            var voteCount = candidate.voteCount;
            assert.equal(voteCount, 1, 'candidate1 did not receive any votes');
            return electionInstance.candidates(2);
        }).then(candidate => {
            var voteCount = candidate.voteCount;
            assert.equal(voteCount, 0, 'candidate 2 did not recieve any votes');
        })
    });
    
    
})