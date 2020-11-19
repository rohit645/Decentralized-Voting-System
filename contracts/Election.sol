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
    // stote accounts that have voted
    mapping(uint => Candidate) public candidates;
    mapping(address => bool) public voters;

    // Store a candidate count
    uint public candidatesCount;

    // voted event
    event votedEvent (
        uint indexed _candidateId
    );

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

    // cast a vote 
    function vote(uint _candidateId) public {
        // check if voter has not voted before
        require(!voters[msg.sender]);

        // check if candidate is valid
        require(_candidateId > 0 && _candidateId <= candidatesCount);

        voters[msg.sender] = true;
        // record the voter has voted

        // update the candidate's vote count
        candidates[_candidateId].voteCount++;

        // trigger voted event
        emit votedEvent(_candidateId);
    }
}