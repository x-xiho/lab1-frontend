import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import '../PagesCss/PageCss.css'
import axios from 'axios';

import { models } from 'powerbi-client';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

import PowerBI from './PowerBI';
// import Powerbitest from './Powerbitest';

function PageEnd() {
  // 로컬에 저장된 유저 이름을 변수에 저장
  const userName = localStorage.getItem('name');

  // 백엔드에서 받은 추천 지역 데이터 저장
  const [data, setData] = useState([]);

  const [get, setGet] = useState(false);

  const navigate = useNavigate();


  //관심목록 하트 클릭 여부
  const [heartClicked1, setHeartClicked1] = useState(false);
  const [heartClicked2, setHeartClicked2] = useState(false);
  const [heartClicked3, setHeartClicked3] = useState(false);

  // 파워비아이 연동 함수
  const powerbibtn = async (name) => {
    console.log("선택한 지역 이름", name)
    console.log('파워비아이 연동 함수 실행됨 ds', typeof name);

    const basicFilter = {
      $schema: "http://powerbi.com/product/schema#basic",
      target: {
        table: "데이터통합",
        column: "자치구"
      },
      operator: "In",
      values: [`${name}`],
      filterType: models.FilterType.BasicFilter
    };

    if (window.report) {
      const pages = await window.report.getPages();
      const page = pages[0]; // 페이지 넘버

      const visuals = await page.getVisuals();
      const visual = visuals[1]; // 시각적 객체 요소 선택

      console.log('비주얼 찍음 ', visual)

      await visual.setSlicerState({
        filters: [basicFilter]
      });
    }
  }


  // 관심목록에 지역 저장
  const putHeart = (areas) => {

    if (areas === data.location1) {
      axios.put(`http://localhost:4000/users/${userName}/favorites/${areas}`, { name: userName, favorites: areas })
      console.log("관심목록에 추가할 지역", areas)
      setHeartClicked1(!heartClicked1);

    } else if (areas === data.location2) {
      axios.put(`http://localhost:4000/users/${userName}/favorites/${areas}`, { name: userName, favorites: areas })
      console.log("관심목록에 추가할 지역", areas)
      setHeartClicked2(!heartClicked2);

    } else if (areas === data.location3) {
      axios.put(`http://localhost:4000/users/${userName}/favorites/${areas}`, { name: userName, favorites: areas })
      console.log("관심목록에 추가할 지역", areas)
      setHeartClicked3(!heartClicked3);
    }
  }

  // 관심목록에서 지역 삭제
  const deleteHeart = (area) => {

    if (area === data.location1) {
      axios.delete(`http://localhost:4000/users/${userName}/favorites/${area}`, { data: { name: userName, favorites: area } })
        .then(response => {
          console.log('관심목록에 삭제할 지역', area)
          setHeartClicked1(!heartClicked1);
        })
        .catch(error => {
          console.error('관심목록을 삭제하는 과정에서 오류가 발생했습니다.', error);
        });
    }
    else if (area === data.location2) {
      axios.delete(`http://localhost:4000/users/${userName}/favorites/${area}`, { data: { name: userName, favorites: area } })
        .then(response => {
          console.log('관심목록에 삭제할 지역', area)
          setHeartClicked2(!heartClicked2);
        })
        .catch(error => {
          console.error('관심목록을 삭제하는 과정에서 오류가 발생했습니다.', error);
        });
    }
    else if (area === data.location3) {
      axios.delete(`http://localhost:4000/users/${userName}/favorites/${area}`, { data: { name: userName, favorites: area } })
        .then(response => {
          console.log('관심목록에 삭제할 지역', area)
          setHeartClicked3(!heartClicked3);
        })
        .catch(error => {
          console.error('관심목록을 삭제하는 과정에서 오류가 발생했습니다.', error);
        });
    }
  }

// 다시하기
const reset = () => {
  const confirmed = window.confirm('설문조사를 처음부터 다시 시작하시겠습니까?');

  if (confirmed) {
    axios.delete(`http://localhost:4000/users/${userName}`, { data: { name: userName } })
      .then(response => {
        console.log('다시 시작')
        navigate('/myhome/pagesex');
      })
      .catch(error => {
        console.error('관심목록을 삭제하는 과정에서 오류가 발생했습니다.', error);
      });
    console.log("삭제되었습니다.");
  } else {
    // 사용자가 "아니요"를 눌렀을 때의 동작
    console.log("취소되었습니다.");
  }
}

  ////////////////////////////////////////////////////////////////

  //백엔드에서 지역추천 결과 데이터 받아옴 {1 : 지역, 2: 지역, 3: 지역}

  useEffect(() => {
    if (userName) {
      axios.get(`http://localhost:4000/users/${userName}/locations`)
        .then(response => {
          setData(response.data);

          console.log('백엔드에서 받은 지역추천 결과 데이터', data);
          setGet(!get);
        })

        .catch(error => {
          console.error('데이터를 불러오는 중 오류가 발생했습니다.', error);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  ////////////////////////////////////////////////////////////////////////////



  return (
    <div className='End-container'>

      <div className='End-powerbi-wrap'>
        <PowerBI />
        {/* <Powerbitest/> */}
      </div>

      <div className='End-recommend'>
        <div className='End-recommend-text'>나에게 딱 맞는 주거지역 순위</div>

        <div className='End-result'>
          {get ?
            <div className='End-recommend-result'>

              <div className="End-recomend-text">

                <button className='End-recommend-btn'
                  onClick={() => { powerbibtn(data.location1) }}>
                  {/* 함수 속에 들어가는 글자는 추후에 바꾸면 됨 */}

                  <div className='End-text-btn'>
                    <div className='End-rank'>1위</div>
                    <div className='End-first'>{data.location1}</div>
                  </div>

                  {heartClicked1 ?
                    <AiFillHeart onClick={() => deleteHeart(data.location1)} size="30" color="red" className='End-heart' />
                    : <AiOutlineHeart onClick={() => putHeart(data.location1)} size="30" color="red" className='End-heart' />}

                </button>

                <button className='End-recommend-btn'
                  onClick={() => { powerbibtn(data.location2) }}>

                  <div className='End-text-btn'>
                    <div className='End-rank'>2위</div>
                    <div className='End-first'>{data.location2}</div>
                  </div>
                  {heartClicked2 ?
                    <AiFillHeart onClick={() => deleteHeart(data.location2)} size="30" color="red" className='End-heart' />
                    : <AiOutlineHeart onClick={() => putHeart(data.location2)} size="30" color="red" className='End-heart' />}
                </button>

                <button className='End-recommend-btn'
                  onClick={() => { powerbibtn(data.location3) }}>
                  <div className='End-text-btn'>
                    <div className='End-rank'>3위</div>
                    <div className='End-first'>{data.location3}</div>
                  </div>
                  {heartClicked3 ?
                    <AiFillHeart onClick={() => deleteHeart(data.location3)} size="30" color="red" className='End-heart' />
                    : <AiOutlineHeart onClick={() => putHeart(data.location3)} size="30" color="red" className='End-heart' />}
                </button>

              </div>
              <div>
                {/* 1. 백엔드에 유저 정보 delete 요청하기 2. 설문조사 첫 페이지로 이동하기 */}
                <button onClick={() => { reset() }}> 다시하기 </button>
              </div>
            </div>

            : <div><em>데이터를 불러오는데 실패했습니다.</em></div>}


        </div>
      </div>
    </div>

  )
}
export default PageEnd