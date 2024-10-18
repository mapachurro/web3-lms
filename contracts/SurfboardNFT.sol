// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

contract SurfboardNFT is ERC721 {
    using Strings for uint256;
    using EnumerableSet for EnumerableSet.UintSet;

    uint256 private _nextTokenId;
    mapping(address => EnumerableSet.UintSet) private _tokensOwned;
    mapping(uint256 => string) private _tokenURIs;

    constructor() ERC721("SurfboardNFT", "SURF") {}

   function mintTo(address to, string memory _tokenURI) public returns (uint256) {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, _tokenURI);
        return tokenId;
    }

    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual {
        require(_exists(tokenId), "ERC721Metadata: URI set of nonexistent token");
        _tokenURIs[tokenId] = _tokenURI;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        string memory _tokenURI = _tokenURIs[tokenId];
        return _tokenURI;
    }

    function getNFTsOwned(address owner) public view returns (uint256[] memory) {
        return _tokensOwned[owner].values();
    }

    function _update(address to, uint256 tokenId, address auth) internal override returns (address) {
        address from = _ownerOf(tokenId);
        
        if (from != address(0)) {
            _tokensOwned[from].remove(tokenId);
        }
        
        if (to != address(0)) {
            _tokensOwned[to].add(tokenId);
        }
        
        return super._update(to, tokenId, auth);
    }

    function _exists(uint256 tokenId) internal view returns (bool) {
        return _ownerOf(tokenId) != address(0);
    }
}