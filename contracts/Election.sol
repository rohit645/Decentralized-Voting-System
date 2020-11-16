pragma solidity >= 0.4.2;

contract Election {
    // store candidate 
    // read candidate 
    string public candidate;

    // constructor
    constructor() public {
        candidate = "Candidate 1";
    }
}