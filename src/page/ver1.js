import React from 'react';
import styled from 'styled-components';
import Preview from '../preview';
import '../App.css';
import paperBg from '../paper.jpg';
import circleBg from '../circleBg.png';
import img1 from '../img1.jpg';
import img2 from '../img2.jpg';
import imgLeftBottom from '../left_bottom.png';
import imgRightTop from '../right_top.png';



const Wrapper = styled.div`
  width: 100%;
  font-family: 'Noto Serif KR', serif;
  color: #726a70;
  width: 360px;
  height: auto;
  background-image: url(${paperBg});
  @media screen and (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

const Container = styled.div`
  position: relative;
  width: 360px;
  height: auto;
  padding: 24px 12px;
  font-size: 14.8px;
  line-height: 22px;
  word-break: keep-all;
  font-weight: 200;
  background-size: cover;
  /* padding-bottom: 80px; */
  @media screen and (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

const Greeting = styled.p`
  width: 100%;
  text-align: center;
  margin: 24px 0px;
`;

const Circle = styled.div`
  position: relative;
  width: 100%;
  padding: 50% 0;
  margin-bottom: 24px;
  overflow: hidden;
`;

const CircleBg = styled.div`
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background-image: url(${circleBg});
  background-size: cover;
  -webkit-animation: rotation 500s infinite linear;
`;

const PeopleContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top:0;
  left:0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const People = styled.p`
  width: 100%;
  text-align: center;
  display:flex;
  ${props => props.index === 0 ? 'padding-right: 12px' : 'padding-left: 12px'};
  flex-direction: ${props => props.index === 0 ? 'row' : 'row-reverse'};
  justify-content: center;
  align-items: flex-end;
  font-size: 12px;
  line-height: 44.8px;
  span.big{
    margin:0px 8px;
    font-size: 32px;
    font-weight: 600;
  }
  span.bold{
    margin:0px 2px;
    font-weight: 600;
  }
`;

const Info = styled.div`
  width: 100%;
  padding: 0 64px;
  display:flex;
  flex-wrap:wrap;
  text-align: center;
  font-size: 14px;
  line-height: 22px;
  font-weight: 600;
  margin-top: 8px;
  margin-bottom: 24px;
  /* margin: 24px 0px; */
  p{
    width: 100%;
    margin: 0px 0px 16px 0px;
  }
`;

const Date = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 33%;
  height: 40px;
  span{
    color: #EF9a23;
    font-weight: 600;
  }
  border-left: ${props => props.border ? 'solid 0.25px #ffb833' : 'none'};
  border-right: ${props => props.border ? 'solid 0.25px #ffb833' : 'none'};
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  /* border-width: 12px 0px;
  border-style: solid;
  border-image: linear-gradient(to right, #ffb833ff 0%, #ffb83300 92%);
  border-image-width: 3px 0 3px 0; 
  border-image-slice: 1; */
  /* border-top: solid 2px #ffb833;
  border-bottom: solid 2px #ffb833; */
  margin-bottom: 64px;
`;

const Square = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 32px;
  span{
    color: #EF9a23;
  }
  img{
    width: 100%;
    height: auto;
  }
  ${props => props.index===2&&`background-image: url(${imgRightTop});`}
  ${props => props.index===3&&`background-image: url(${imgLeftBottom});`}
  background-size: cover;
`;

const BttContainer = styled.div`
  /* position: fixed; */
  padding: 12px 24px;
  left:0;
  bottom:0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Btt = styled.a`
  text-decoration: none;
  width: calc(50% - 8px);
  height: 32px;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${props => props.type === 'naver' ? '#fafafa' : '#403838'
  };
  background-color: ${props => props.type === 'naver' ? '#3EAF0E' : '#ffe812'
  };
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  box-shadow: 0px 0px 8px rgba(0,0,0,0.08);
`;

const str_greeting = `
  앞날을 축복하여 주시면 더없는 기쁨으로 간직하겠습니다.
`;

const str_people = [
  {
    f: "김동주",
    m: "김혜원",
    g: "우진"
  },
  {
    f: "최영철",
    m: "이정옥",
    g: "정문"
  },
];

const str_date = `
  2021년 5월 1일 토요일 오전 11시
`;

const str_location = `
  더컨벤션 반포점 . 2층
`;

const naver_link = 'https://map.naver.com/v5/search/%EB%8D%94%EC%BB%A8%EB%B2%A4%EC%85%98%EB%B0%98%ED%8F%AC/place/1831004045?c=14136708.3012874,4508958.1934571,15,0,0,0,dh';
const kakao_link = 'https://map.kakao.com/?urlX=499229&urlY=1110976&urlLevel=3&itemId=598171385&q=%EB%8D%94%EC%BB%A8%EB%B2%A4%EC%85%98%20%EB%B0%98%ED%8F%AC%EC%A0%90&srcid=598171385&map_type=TYPE_MAP';

function Ver1() {
  return (
    <Wrapper>
      <Preview
        title={'우진.정문의 결혼식 5월 1일 오전 11시'}
        description={'우진.정문의 결혼식 5월 1일 오전 11시'}
      />
      <Container>
        <Greeting>
          {str_greeting}
        </Greeting>
        <Circle>
          <CircleBg />
          <PeopleContainer>
            {
              str_people.map((group, i) =>
                <People index={i}>
                  {i === 1 && '의 차녀'}
                  <span className='bold'>{group.f}</span>.
                <span className='bold'>{group.m}</span>
                  {i === 0 && '의 장남'}
                  <span className='big'>{group.g}</span>
                </People>
              )
            }
          </PeopleContainer>
        </Circle>
        <Info>
          {/* <p>{str_date}</p> */}
          <p>{str_location}</p>
          <Date>
            2021<br />
            <span>5월</span>
          </Date>
          <Date border={true}>
            1일<br />
            <span>토</span>
          </Date>
          <Date>
            오전<br />
            <span>11시</span>
          </Date>
        </Info>
      </Container>
      <Grid>
        <Square>
          <img src={img2} alt={''} />
        </Square>
        <Square index={2}>W<span>J</span></Square>
        <Square index={3}><span>J</span>M</Square>
        <Square>
          <img src={img1} alt={''} />
        </Square>
      </Grid>
      <Container>
        <BttContainer>
          <Btt
            type='naver'
            href={naver_link}
            target={'_blank'}
          >
            네이버 지도보기
        </Btt>
          <Btt
            type='kakao'
            href={kakao_link}
            target={'_blank'}
          >
            카카오 지도보기
        </Btt>
        </BttContainer>
      </Container>
    </Wrapper>
  );
}

export default Ver1;
