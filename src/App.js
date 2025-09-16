import './App.css';
import './css/lightSlider.css';
import './css/style.css';
import ImageGallery from "react-image-gallery";

import music_01_off from './images/mcard_35/music_01_off.png';
import music_01_on from './images/mcard_35/music_01_on.png';
import music_01 from './music/bgm01.mp3';
import { useEffect, useState } from 'react';
import $ from 'jquery';

function App() {
  const [audio] = useState(new Audio(music_01));
  const [isPlaying, setIsPlaying] = useState(false);
  const [copyText1, setCopyText1] = useState('');
  const [copyText2, setCopyText2] = useState('');

  const music_player = () => {
    audio.loop = true;
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying, audio]);

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  function popOpen(padding, id) { // 팝업 열기 onclick
    $("#menu-overlay")
      .addClass("pop-on")
      .attr("data-pop-id", id)
      .fadeIn(300);

    $("#" + id + "")
      .css({
        "padding": "" + padding + "", "margin-top": -$("#" + id + "")
          .outerHeight() / 2
      })
      .addClass("pop-on")
      .fadeIn(300);
  }

  function popClose(id) { // 팝업 닫기 onclick
    $("#menu-overlay[data-pop-id=" + id + "]")
      .removeClass("pop-on")
      .removeAttr("data-pop-id")
      .removeData()
      .fadeOut(100);

    $("#" + id + "")
      .removeClass("pop-on")
      .fadeOut(100);
  }

  function jsCopyLink(copyText, id, text1, text2) { // 링크 복사
    var tmpTextarea = document.createElement('textarea');
    tmpTextarea.value = copyText;

    document.body.appendChild(tmpTextarea);
    tmpTextarea.select();
    tmpTextarea.setSelectionRange(0, 9999);  // 셀렉트 범위 설정

    document.execCommand('copy');
    document.body.removeChild(tmpTextarea);
    popClose(id);
    setCopyText1(text1);
    setCopyText2(text2);
    popOpen('0 1rem', 'copyComplete');
  }

  return (
    <div className='mcard_35'>
      <div className='wrapper'>
        <section id="content">
          {/* PLAYER */}
          <div className="music">
            <button onClick={music_player} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
              <div>
                <img src={isPlaying ? music_01_on : music_01_off} alt='music' />
              </div>
            </button>
          </div>
          {/* PLAYER */}
          {/* 비주얼 */}
          <section className="visual-section">
            <div className="vertical-top">
              <div className="vertical-item name vertical-center">
                <p className="name">
                  <span className="vs-span">임현도</span>
                  <span className="vs-span bar">&</span>
                  <span className="vs-span">조보라</span>
                </p>
              </div>
              <div className="vertical-item info">
                <p className="p1">
                  <span className="vs-span">2026년01월</span>
                  <span className="vs-span bar">10</span>
                  <span className="vs-span">오후 14시 00분</span>
                </p>
                <p className="p2">
                  성균관컨벤션웨딩홀
                </p>
              </div>
            </div>
          </section>
          {/* 비주얼 */}
          {/* 인사말 */}
          <section className="greeting-section">
            <div className="sec-tit">초 대 합 니 다</div>
            <div className="sec-txt">서로가 마주보며 다져온 사랑을<br />
              이제 함께 한 곳을 바라보며<br />
              걸어갈 수 있는 큰 사랑으로<br />
              키우고자 합니다.<br />
              저희 두 사람이 사랑의 이름으로<br />
              지켜나갈 수 있도록<br />
              앞날을 축복해 주시면<br />
              감사하겠습니다.
            </div>
            <div className="info">
              <div className="ib">
                <div className="tb">
                  <div className="row">
                    <p className="honju">
                      <span className="gt-span">임정후</span>
                      <span className="gt-span bul"></span>
                      <span className="gt-span">양인자</span>
                    </p>
                    <p className="default">의</p>
                    <p className="gwangye">차남</p>
                    <p className="slsb">현도</p>
                  </div>
                  <div className="row">
                    <p className="honju">
                      <span className="gt-span">조인수</span>
                      <span className="gt-span bul"></span>
                      <span className="gt-span">박은경</span>
                    </p>
                    <p className="default">의</p>
                    <p className="gwangye">장녀</p>
                    <p className="slsb">보라</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 인사말 */}
          {/* 배너 */}
          <section className="banner-section">
            <div className="tb">
              <p className="txt">소 중 한 &nbsp; 당 신 을 &nbsp; 초 대 합 니 다</p>
            </div>
          </section>
          {/* 배너 */}
          {/* 신랑 신부에게 연락하기 */}
          <section className="slsbTel-section">
            <div className="ib">
              <div className="row">
                <div className="slsb-tit">신랑에게 연락하기</div>
                <div className="slsb-btn">
                  <button className="com-btn tel sl" style={{ cursor: 'pointer' }}>연락하기</button>
                  <button className="com-btn sms" style={{ cursor: 'pointer' }}>문자보내기</button>
                </div>
              </div>
              <div className="row">
                <div className="slsb-tit">신부에게 연락하기</div>
                <div className="slsb-btn">
                  <button className="com-btn tel sb" style={{ cursor: 'pointer' }}>연락하기</button>
                  <button className="com-btn sms" style={{ cursor: 'pointer' }}>문자보내기</button>
                </div>
              </div>
            </div>
          </section>
          {/* 신랑 신부에게 연락하기 */}
          {/* 혼주에게 연락하기 */}
          <section className="honjuTel-section">
            <div className="tit">혼주에게 연락하기</div>
            <div className="con">
              <div className="col">
                <div className="honju-tit sl">신랑 측 혼주</div>
                <div className="box first">
                  <div className="name"><span>아버지</span> <strong>임정후</strong></div>
                  <div className="honju-btn">
                    <button style={{ cursor: 'pointer' }} className="com-btn tel sl">연락하기</button>
                    <button style={{ cursor: 'pointer' }} className="com-btn sms">문자보내기</button>
                  </div>
                </div>
                <div className="box">
                  <div className="name"><span>어머니</span> <strong>양인자</strong></div>
                  <div className="honju-btn">
                    <button style={{ cursor: 'pointer' }} className="com-btn tel sl">연락하기</button>
                    <button style={{ cursor: 'pointer' }} className="com-btn sms">문자보내기</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="honju-tit sb">신부 측 혼주</div>
                <div className="box first">
                  <div className="name"><span>아버지</span> <strong>조인수</strong></div>
                  <div className="honju-btn">
                    <button style={{ cursor: 'pointer' }} className="com-btn tel sb">연락하기</button>
                    <button style={{ cursor: 'pointer' }} className="com-btn sms">문자보내기</button>
                  </div>
                </div>
                <div className="box">
                  <div className="name"><span>어머니</span> <strong>박은경</strong></div>
                  <div className="honju-btn">
                    <button style={{ cursor: 'pointer' }} className="com-btn tel sb">연락하기</button>
                    <button style={{ cursor: 'pointer' }} className="com-btn sms">문자보내기</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 혼주에게 연락하기 */}
          {/* 달력 */}
          <section className="calendar-section">
            <div className="calendar-wrap">
              <div id="calendar" className="hasDatepicker">
                <div className="ui-datepicker-inline ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" style={{ display: 'block' }}>
                  <div className="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all">
                    <div className="ui-datepicker-title">
                      <span className="ui-datepicker-month"><strong>1</strong> January</span>&nbsp;
                    </div>
                  </div>
                  <table className="ui-datepicker-calendar">
                    <tbody>
                      <tr>
                        <td className=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                        <td className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                        <td className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                        <td className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                        <td className=" " data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default">1</span>
                        </td>
                        <td className=" " data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default">2</span>
                        </td><td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default">3</span>
                        </td>
                      </tr>
                      <tr>
                        <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default">4</span>
                        </td>
                        <td className=" " data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default">5</span>
                        </td>
                        <td className=" " data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default">6</span>
                        </td>
                        <td className=" " data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default">7</span>
                        </td>
                        <td className=" " data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default">8</span>
                        </td>
                        <td className=" " data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default">9</span>
                        </td>
                        <td className=" ui-datepicker-week-end ui-datepicker-days-cell-over  ui-datepicker-current-day" data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default ui-state-active ui-state-hover">10</span>
                        </td>
                      </tr>
                      <tr>
                        <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default">11</span>
                        </td>
                        <td className=" " data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default">12</span>
                        </td>
                        <td className=" " data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default">13</span>
                        </td>
                        <td className=" " data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default">14</span>
                        </td>
                        <td className=" " data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default">15</span>
                        </td>
                        <td className=" " data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default">16</span>
                        </td>
                        <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default">17</span>
                        </td>
                      </tr>
                      <tr>
                        <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default">18</span>
                        </td>
                        <td className=" " data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default">19</span>
                        </td>
                        <td className=" " data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default">20</span>
                        </td>
                        <td className=" " data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default">21</span>
                        </td>
                        <td className=" " data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default">22</span>
                        </td>
                        <td className=" " data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default">23</span>
                        </td>
                        <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default">24</span>
                        </td>
                      </tr>
                      <tr>
                        <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default">25</span>
                        </td>
                        <td className=" " data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default">26</span>
                        </td>
                        <td className=" " data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default">27</span>
                        </td>
                        <td className=" " data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default">28</span>
                        </td>
                        <td className=" " data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default">29</span>
                        </td>
                        <td className=" " data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default">30</span>
                        </td>
                        <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="0" data-year="2026">
                          <span className="ui-state-default">31</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="day-time">
                <span className="day">sat.</span> <span className="time">pm 14:00</span>
              </div>
            </div>
          </section>
          {/* 달력 */}
          {/* 갤러리 */}
          <section className="gallery-section">
            <div className="sec-tit">하 나 되 는 날</div>
            <div className="contain">
              <ImageGallery
                items={images}
                showFullscreenButton={true}
                useBrowserFullscreen={false}
                autoPlay={true}
                showPlayButton={true}
                slideDuration={450}
              />
            </div>
          </section>
          {/* 갤러리 */}
          {/* 텍스트 배너 */}
          <section className="tbanner-section">
            <div className="text">두 사람의<br />
              아름다운 시작을<br />
              함께해 주세요.<br />
            </div>
          </section>
          {/* 텍스트 배너 */}
          {/* 오시는길 */}
          <section className="location-section">
            <div className="sec-tit">함 께 가 는 길</div>
            <div className="map-area">
              <div className="head">
                <div className="tit">성균관컨벤션웨딩홀</div>
                <div className="txt">
                  <p>서울특별시 종로구 성균관로 31 (명륜3가 53번지)</p>
                  <p>Tel. 02-744-0677</p>
                </div>
                <button style={{ cursor: 'pointer' }} className="tel">전화걸기</button>
              </div>
              <div id="map_canvas" className="map">
                <div style={{ font: 'normal normal 400 12px/normal dotum, sans-serif', width: '100%', height: '100%', color: '#333', position: 'relative' }}>
                  <div style={{ height: '100%' }}>
                    <a href="https://map.kakao.com/?urlX=499269.9999999987&amp;urlY=1134994.9999999988&amp;itemId=913429074&amp;q=%EC%84%B1%EA%B7%A0%EA%B4%80%EC%BB%A8%EB%B2%A4%EC%85%98%EC%9B%A8%EB%94%A9%ED%99%80&amp;srcid=913429074&amp;map_type=TYPE_MAP&amp;from=roughmap" target="_blank" rel="noreferrer">
                      <img className="map" src="http://t1.daumcdn.net/roughmap/imgmap/8b159ea69d2ffb8fde03cc4400ef8f646e6e2f9e92e964ccbf62660b2f6f7bbf" width="100%" height="100%" alt='map'></img>
                    </a>
                  </div>
                </div>
              </div>
              <div className="link">
                <ul>
                  <li>
                    <button className="tmap">티맵</button>
                  </li>
                  <li>
                    <button className="kakaonavi">카카오내비</button>
                  </li>
                  <li>
                    <button className="navermap">네이버지도</button>
                  </li>
                  <li>
                    <button className="kakaomap">카카오맵</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="info">
              <div className="contain">
                <dl>
                  <dt>지하철 이용시 : 4호선 혜화역 하차 → 4번 출구</dt>
                  <dd>셔틀버스 : 혜화역 4번 출구 T스토어 앞 (예식에 한함)</dd>
                  <dd>혜화역 1번출구 → 7번 마을버스 (성균관대 정문하차)</dd>
                  <dd>도보이용시 : 8분거리</dd>
                </dl>
                <dl>
                  <dt>버스 이용시 : 명륜3가, 성대입구 정류장 하차</dt>
                  <dd>간선버스 - 100, 102, 104, 107, 140, 143, 150, 151, 160, 162, 171, 172, 272, 301</dd>
                  <dd>광역버스 - 1101, 7101</dd>
                </dl>
                <dl>
                  <dt>자가용 이용시</dt>
                  <dd>네비게이션 : "성균관컨벤션웨딩홀" 검색</dd>
                  <dd>주차장 안내 : 본관 주차장, 제1주차장, 성균관대학교 주차장 (하객주차 2시간 무료)</dd>
                  <dd>성균관대학교 정문 안 주차팀 안내 배치</dd>
                </dl>
              </div>
            </div>
          </section>
          {/* 오시는길 */}
          {/* 축의금 계좌번호 */}
          <section className="account-section">
            <div className="sec-tit">신랑신부에게 마음 전하기</div>
            <div className="sec-txt">축하의 마음을 담아 축의금을 전달해보세요.</div>
            <div className="ib">
              <div className="row">
                <div className="slsb-tit">신랑측 마음</div>
                <div className="slsb-btn">
                  <button className="com-btn acc sl" style={{ cursor: 'pointer' }} onClick={() => { popOpen('0 1rem', 'accountCopyG'); }}>계좌번호 보기</button>
                </div>
              </div>
              <div className="row">
                <div className="slsb-tit">신부측 마음</div>
                <div className="slsb-btn">
                  <button className="com-btn acc sb" style={{ cursor: 'pointer' }} onClick={() => { popOpen('0 1rem', 'accountCopyB'); }}>계좌번호 보기</button>
                </div>
              </div>
            </div>
          </section>
          {/* 축의금 계좌번호 */}
          {/* 참석여부 */}
          <section className="livewed-section rsvp-section">
            <div className="sec-tit">참석여부전달</div>
            <div className="sec-txt">축하의 마음으로 참석해주시는 한 분 한 분<br />
              귀한 마음으로 모실 수 있도록<br />
              부담없이 알려주시면 정성을 다해 준비하겠습니다.<br />
            </div>
            <div className="sec-date"></div>
            <div className="button">
              <button style={{ cursor: 'pointer' }}>참석 의사 전달하기</button>
            </div>
          </section>
          {/* 참석여부 */}
          {/* 메시지 */}
          <section className="message-section">
            <div className="sec-tit">축 하 해 주 세 요</div>
            <div className="form">
              <form action="">
                <div className="group col-2 first">
                  <div>
                    <input type="text" name="" id="" className="input" placeholder="이름" />
                  </div>
                </div>
                <div className="group">
                  <div>
                    <textarea name="" id="" className="textarea"></textarea>
                  </div>
                </div>
                <div className="buttons">
                  <button type="button" className="btn submit">등록하기</button>
                </div>
              </form>
            </div>
          </section>
          {/* 메시지 */}
          {/* 푸터 */}
          <footer id="footer">
            <div className="foot-share">
              <ul className="foot-share-list">
                <li>
                  <button style={{ cursor: 'pointer' }} className="kakao">
                    카카오톡<br /> 공유하기
                  </button>
                </li>
                <li>
                  <button style={{ cursor: 'pointer' }} className="facebook">
                    페이스북<br /> 공유하기
                  </button>
                </li>
              </ul>
            </div>
          </footer>
          {/* 푸터 */}
          {/* 팝업 */}
          <div className="pop-wrap accountCopy" id="accountCopyG">
            <div className="pop-inner">
              <div className="pop-head">신랑측 계좌번호</div>
              <div className="pop-body">
                <div className="form">
                  <form action="">
                    <div className="group col-2 first">
                      <div>
                        신한은행
                      </div>
                      <div>
                        <span>예금주 : </span> 임현도
                      </div>
                    </div>
                    <div className="group">
                      <div>
                        <input name="GBankNum1" id="GBankNum1" className="input" readOnly value="110-519-445930" />
                        <button style={{ cursor: 'pointer' }} type="button" className="btn" onClick={() => { jsCopyLink('110-519-445930', 'accountCopyG', '신한은행 110-519-445930', '예금주 임현도') }}>복사</button>
                      </div>
                    </div>
                    <div className="group col-2">
                      <div>
                        국민은행
                      </div>
                      <div>
                        <span>예금주 : </span> 임정후
                      </div>
                    </div>
                    <div className="group">
                      <div>
                        <input name="GBankNum2" id="GBankNum2" className="input" readOnly value="000-123-456789" />
                        <button style={{ cursor: 'pointer' }} type="button" className="btn" onClick={() => { jsCopyLink('000-123-456789', 'accountCopyG', '국민은행 000-123-456789', '예금주 임정후') }}>복사</button>
                      </div>
                    </div>
                    <div className="group col-2">
                      <div>
                        국민은행
                      </div>
                      <div>
                        <span>예금주 : </span> 양인자
                      </div>
                    </div>
                    <div className="group">
                      <div>
                        <input name="GBankNum2" id="GBankNum2" className="input" readOnly value="000-123-456789" />
                        <button style={{ cursor: 'pointer' }} type="button" className="btn" onClick={() => { jsCopyLink('000-123-456789', 'accountCopyG', '국민은행 000-123-456789', '예금주 양인자') }}>복사</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <button style={{ cursor: 'pointer' }} className="close-btn" onClick={() => {popClose('accountCopyG')}}>닫기</button>
            </div>
          </div>

          <div className="pop-wrap accountCopy" id="accountCopyB">
            <div className="pop-inner">
              <div className="pop-head">신부측 계좌번호</div>
              <div className="pop-body">
                <div className="form">
                  <form action="">
                    <div className="group col-2 first">
                      <div>
                        국민은행
                      </div>
                      <div>
                        <span>예금주 : </span> 조보라
                      </div>
                    </div>
                    <div className="group">
                      <div>
                        <input name="BBankNum1" id="BBankNum1" className="input" readOnly value="000-123-456789" />
                        <button style={{ cursor: 'pointer' }} type="button" className="btn" onClick={() => { jsCopyLink('000-123-456789', 'accountCopyB', '국민은행 000-123-456789', '예금주 조보라') }}>복사</button>
                      </div>
                    </div>
                    <div className="group col-2">
                      <div>
                        국민은행
                      </div>
                      <div>
                        <span>예금주 : </span> 조인수
                      </div>
                    </div>
                    <div className="group">
                      <div>
                        <input name="BBankNum2" id="BBankNum2" className="input" readOnly value="000-123-456789" />
                        <button style={{ cursor: 'pointer' }} type="button" className="btn" onClick={() => { jsCopyLink('000-123-456789', 'accountCopyB', '국민은행 000-123-456789', '예금주 조인수') }}>복사</button>
                      </div>
                    </div>
                    <div className="group col-2">
                      <div>
                        국민은행
                      </div>
                      <div>
                        <span>예금주 : </span> 박인경
                      </div>
                    </div>
                    <div className="group">
                      <div>
                        <input name="BBankNum2" id="BBankNum2" className="input" readOnly value="000-123-456789" />
                        <button style={{ cursor: 'pointer' }} type="button" className="btn" onClick={() => { jsCopyLink('000-123-456789', 'accountCopyB', '국민은행 000-123-456789', '예금주 박인경') }}>복사</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <button style={{ cursor: 'pointer' }} className="close-btn" onClick={() => {popClose('accountCopyB')}}>닫기</button>
            </div>
          </div>

          <div className="pop-wrap copyComplete" id="copyComplete">
            <div className="pop-inner">
              <div className="pop-body">
                <div className="form">
                  <form action="">
                    <div className="con">
                      <div className="group">
                        <div>
                          <div className="tit">계좌번호가 복사되었습니다.</div>
                          <div className="bkinfo">
                            <span>{copyText1}</span><br /><span>{copyText2}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="buttons">
                      <span style={{cursor:'pointer'}} className="btn" onClick={() => {popClose('copyComplete');}}>확인</span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
