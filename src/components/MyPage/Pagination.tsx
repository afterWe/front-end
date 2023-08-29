import styled from 'styled-components';
import { PaginationProps } from '../../types/components';
import { theme } from '../../Styles/theme';

const Pagination: React.FC<PaginationProps> = ({
  data,
  currentPage,
  setCurrentPage
}) => {
  const startPage = Math.max(1, Math.ceil(currentPage / 5) * 5 - 4);
  const endPage =
    startPage + 4 > data.total_pages ? data.total_pages : startPage + 4;
  const seperatePage = new Array(endPage - startPage + 1).fill(startPage);

  const changepage = (index: number) => {
    setCurrentPage(index + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < data.total_pages) setCurrentPage(currentPage + 1);
  };

  const firstPage = () => {
    setCurrentPage(1);
  };

  const lastPage = () => {
    setCurrentPage(data.total_pages);
  };

  return (
    <PaginationContainer>
      <PaginationWrap>
        <PaginationLeftSide
          onClick={firstPage}
          src="images/arrow-double.png"
          alt="Left End"
        />
        <PaginationButton
          onClick={prevPage}
          src="images/arrow.png"
          alt="Previous"
        />
        {seperatePage.map((pageBaseNumber, index) => {
          const pageNumber = pageBaseNumber + index;
          if (pageNumber > data.total_pages) return null;
          return (
            <CurrentPage
              style={currentPage === pageNumber ? ClickStyle : undefined}
              key={pageNumber}
              onClick={() => changepage(pageNumber - 1)}
            >
              {pageNumber}
            </CurrentPage>
          );
        })}
        <PaginationButtonRight
          onClick={nextPage}
          src="images/arrow.png"
          alt="Next"
        />
        <PaginationSide
          onClick={lastPage}
          src="images/arrow-double.png"
          alt="Right End"
        />
      </PaginationWrap>
    </PaginationContainer>
  );
};
const PaginationContainer = styled.div`
  padding-top: 1.3rem;
`;

const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
`;

const PaginationButtonRight = styled.img`
  width: 17x;
  height: 17px;
  cursor: pointer;
`;

const CurrentPage = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 17px;
  cursor: pointer;
  width: 23px;
  height: 23px;
  margin: 0 5px;
  box-sizing: border-box;
`;

const PaginationButton = styled(PaginationButtonRight)`
  transform: rotate(180deg);
  position: relative;
`;

const PaginationSide = styled.img`
  width: 19x;
  height: 19px;
  cursor: pointer;
`;

const PaginationLeftSide = styled(PaginationSide)`
  transform: rotate(180deg);
  position: relative;
`;

const ClickStyle = {
  color: 'white',
  backgroundColor: theme.keyColor,
  border: `1px solid ${theme.keyColor}`,
  borderRadius: '50%',
  width: '23px',
  height: '23px'
};

export default Pagination;
