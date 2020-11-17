pragma solidity >=0.4.22 <0.8.0;

contract Election {
    // model a candidate
    struct Candidate{
        uint id;
        string name;
        uint voteCount;
    }
    
    // store a candidate
    // fetch a candidate
    mapping(uint => Candidate) public candidates;

    // Store a candidate count
    uint public candidatesCount;

    // constructor
    constructor() public {
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
    }

    // function to add a candidate
    function addCandidate(string memory _name) private {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }
}