const { assert } = require("chai");

var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts){
    var electionInstance;

    // to test whether two candidate are intialised
    it('Should initialize two candidates', () => {
        return Election.deployed().then((instance) => {
            return instance.candidatesCount();
        }).then((count) => {
            assert.equal(count, 2);
        });
    });

    // to test if candidate are intialised with correct values
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
    
})