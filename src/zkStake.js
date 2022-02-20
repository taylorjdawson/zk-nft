export default [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'entityId',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'editor',
        type: 'address'
      }
    ],
    name: 'EntityCreated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'groupId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'depth',
        type: 'uint8'
      }
    ],
    name: 'GroupAdded',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'groupId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'identityCommitment',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'root',
        type: 'uint256'
      }
    ],
    name: 'MemberAdded',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'groupId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'identityCommitment',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'root',
        type: 'uint256'
      }
    ],
    name: 'MemberRemoved',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'nullifierHash',
        type: 'uint256'
      }
    ],
    name: 'NullifierHashAdded',
    type: 'event'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'entityId',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'identityCommitment',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      }
    ],
    name: 'addDAOIdentity',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'entityId',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'editor',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'token',
        type: 'address'
      }
    ],
    name: 'createEntity',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'groupId',
        type: 'uint256'
      }
    ],
    name: 'getDepth',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'groupId',
        type: 'uint256'
      }
    ],
    name: 'getRoot',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'groupId',
        type: 'uint256'
      }
    ],
    name: 'getSize',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'membershipTokens',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes'
      }
    ],
    name: 'onERC721Received',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'entityId',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'identityCommitment',
        type: 'uint256'
      },
      {
        internalType: 'uint256[]',
        name: 'proofSiblings',
        type: 'uint256[]'
      },
      {
        internalType: 'uint8[]',
        name: 'proofPathIndices',
        type: 'uint8[]'
      },
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address'
      }
    ],
    name: 'removeDAOIdentity',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'challenge',
        type: 'string'
      },
      {
        internalType: 'uint256',
        name: 'nullifierHash',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'entityId',
        type: 'uint256'
      },
      {
        internalType: 'uint256[8]',
        name: 'proof',
        type: 'uint256[8]'
      }
    ],
    name: 'verifyIdentityChallenge',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256[2]',
        name: 'a',
        type: 'uint256[2]'
      },
      {
        internalType: 'uint256[2][2]',
        name: 'b',
        type: 'uint256[2][2]'
      },
      {
        internalType: 'uint256[2]',
        name: 'c',
        type: 'uint256[2]'
      },
      {
        internalType: 'uint256[4]',
        name: 'input',
        type: 'uint256[4]'
      }
    ],
    name: 'verifyProof',
    outputs: [
      {
        internalType: 'bool',
        name: 'r',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
]
