import React from "react";
import styled from "styled-components";

const Trusted = () => {
  return (
    <div>
      <Wrapper className="brand-section">
        <div className="container">
          <div className="trusted">
            <h3>Trusted by 10000+ Companies</h3>
            <div className="imageholder">
              <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png" />
              <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png" />
              <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png" />
              <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image5.png" />
              <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png" />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .brand-section {
    padding: 12rem 0 0 0;
  }
  .imageholder {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
    padding-bottom: 3rem;
  }
  img {
    min-width: 10rem;
    height: 10rem;
    padding-right: 8rem;
  }
  img:hover {
    transform: skew(-10deg);
  }
`;
export default Trusted;
