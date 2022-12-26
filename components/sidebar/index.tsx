// TYPES
import { SidebarProps } from "../../types/sidebar";

// STYLES
import * as S from "./styles";

const Sidebar = function ({
  handleSevenDays,
  handleCompanyName,
}: SidebarProps) {
  return (
    <S.Container>
      <S.Title>Filter by</S.Title>
      <S.ButtonsContainer>
        <S.FilterButton onClick={handleSevenDays}>Last 7 Days</S.FilterButton>
        <S.FilterButton >Company Name</S.FilterButton>
      </S.ButtonsContainer>
    </S.Container>
  );
};

export default Sidebar;
