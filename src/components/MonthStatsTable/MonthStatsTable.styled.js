import styled from "styled-components";

export const DivContentWrapper = styled.div`
  width: 100%;
`;

export const MonthHeading = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--primary-black);

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`;

export const DivHeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DivMonthSwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  .arrow {
    background: transparent;
    border: none;
    padding: 0;
    width: 14px;
    height: 14px;
    cursor: pointer;
    transition: var(--animation-transition);
  }
  .arrow:is(:hover, :focus) {
    transform: translateY(-1px);
  }

  .month__name {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    color: var(--primary-blue);
  }
`;

export const UlMonth = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px 26px;
  margin-top: 16px;
  list-style: none;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(10, 1fr);
    gap: 20px 34px;
  }

  @media screen and (min-width: 1440px) {
    gap: 20px 22px;
  }
`;

export const LiDayStyles = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-align: center;
  font-weight: 400;
  letter-spacing: 0em;

  cursor: pointer;
  span {
    display: block;
  }
  .day {
    width: 32px;
    height: 32px;

    padding: ${({ $percentage }) => ($percentage < 100 ? "7px 6px" : "7px")};
    background: var(--white-color);
    border-radius: 50%;
    border: none;
    border: ${({ $percentage }) =>
      $percentage < 100 ? "1px solid var(--secondary-yellow)" : "none"};
    box-shadow: ${({ $isActive }) => ($isActive ? " 0px 2px 4px 0px #407BFF4D" : "none")};
    font-size: 16px;
    line-height: 20px;

    @media screen and (min-width: 768px) {
      width: 34px;
      height: 34px;
      font-size: 14px;
      line-height: 18px;
    }
  }
  .percentage {
    font-size: 10px;
    line-height: 16px;
    color: var(--secondary-skyblue);
  }
`;
