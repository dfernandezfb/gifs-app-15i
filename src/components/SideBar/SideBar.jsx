import styled from "styled-components";
import SearchBar from "../SearchBar/SearchBar";

const SideBar = ({setResults, search, setSearch, isSearching, setIsSearching}) => {
  const SideBarContainer = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  `
  return (
    <SideBarContainer>
      <SearchBar setResults={setResults} search={search} setSearch={setSearch} isSearching={isSearching} setIsSearching={setIsSearching}/>
    </SideBarContainer> 
  );
}
 
export default SideBar;