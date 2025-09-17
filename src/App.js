import './App.css';
import './css/lightSlider.css';
import './css/style.css';
import ImageGallery from "react-image-gallery";

import music_01_off from './images/mcard_35/music_01_off.png';
import music_01_on from './images/mcard_35/music_01_on.png';
import music_02 from './music/bgm02.mp3';

import heart from './images/common/heart.png';
import invite from './images/common/invite.png';
import spring from './images/common/spring.png';

import img01 from './images/picture/01.jpg';
import img02 from './images/picture/02.jpg';
import img03 from './images/picture/03.jpg';
import img04 from './images/picture/04.jpg';
import img05 from './images/picture/05.jpg';
import img06 from './images/picture/06.jpg';
import img07 from './images/picture/07.jpg';
import img08 from './images/picture/08.jpg';
import img09 from './images/picture/09.jpg';
import img10 from './images/picture/10.jpg';
import img11 from './images/picture/11.jpg';
import img12 from './images/picture/12.jpg';
import img13 from './images/picture/13.jpg';
import img14 from './images/picture/14.jpg';
import img15 from './images/picture/15.jpg';
import img16 from './images/picture/16.jpg';
import img17 from './images/picture/17.jpg';
import img18 from './images/picture/18.jpg';
import img19 from './images/picture/19.jpg';
import img20 from './images/picture/20.jpg';
import img21 from './images/picture/21.jpg';
import img22 from './images/picture/22.jpg';
import img23 from './images/picture/23.jpg';
import img24 from './images/picture/24.jpg';
import img25 from './images/picture/25.jpg';
import img26 from './images/picture/26.jpg';
import img27 from './images/picture/27.jpg';
import img28 from './images/picture/28.jpg';
import img29 from './images/picture/29.jpg';
import img30 from './images/picture/30.jpg';
import img31 from './images/picture/31.jpg';
import img32 from './images/picture/32.jpg';
import img33 from './images/picture/33.jpg';
import img34 from './images/picture/34.jpg';
import img35 from './images/picture/35.jpg';
import img36 from './images/picture/36.jpg';
import img37 from './images/picture/37.jpg';
import img38 from './images/picture/38.jpg';
import img39 from './images/picture/39.jpg';
import img40 from './images/picture/40.jpg';
import img41 from './images/picture/41.jpg';

import { useEffect, useState } from 'react';
import $ from 'jquery';

function App() {
  const [audio] = useState(new Audio(music_02));
  const [isPlaying, setIsPlaying] = useState(false);
  const [copyText, setCopyText] = useState(''); // 복사된 텍스트
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
    {original: img01,thumbnail: img01,},
    {original: img02,thumbnail: img02,},
    {original: img03,thumbnail: img03,},
    {original: img04,thumbnail: img04,},
    {original: img05,thumbnail: img05,},
    {original: img06,thumbnail: img06,},
    {original: img07,thumbnail: img07,},
    {original: img08,thumbnail: img08,},
    {original: img09,thumbnail: img09,},
    {original: img10,thumbnail: img10,},
    {original: img11,thumbnail: img11,},
    {original: img12,thumbnail: img12,},
    {original: img13,thumbnail: img13,},
    {original: img14,thumbnail: img14,},
    {original: img15,thumbnail: img15,},
    {original: img16,thumbnail: img16,},
    {original: img17,thumbnail: img17,},
    {original: img18,thumbnail: img18,},
    {original: img19,thumbnail: img19,},
    {original: img20,thumbnail: img20,},
    {original: img21,thumbnail: img21,},
    {original: img22,thumbnail: img22,},
    {original: img23,thumbnail: img23,},
    {original: img24,thumbnail: img24,},
    {original: img25,thumbnail: img25,},
    {original: img26,thumbnail: img26,},
    {original: img27,thumbnail: img27,},
    {original: img28,thumbnail: img28,},
    {original: img29,thumbnail: img29,},
    {original: img30,thumbnail: img30,},
    {original: img31,thumbnail: img31,},
    {original: img32,thumbnail: img32,},
    {original: img33,thumbnail: img33,},
    {original: img34,thumbnail: img34,},
    {original: img35,thumbnail: img35,},
    {original: img36,thumbnail: img36,},
    {original: img37,thumbnail: img37,},
    {original: img38,thumbnail: img38,},
    {original: img39,thumbnail: img39,},
    {original: img40,thumbnail: img40,},
    {original: img41,thumbnail: img41,},
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
    if (id) {
      popClose(id);
      setCopyText('계좌번호가 복사되었습니다.');
      setCopyText1(text1);
      setCopyText2(text2);
      popOpen('0 1rem', 'copyComplete');
    } else {
      setCopyText('링크가 복사되었습니다.');
      setCopyText1('');
      setCopyText2('');
      popOpen('0 1rem', 'copyComplete');
    }
  }

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
    }
  }, []);

  function shareOnKakao() {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
    }

    window.Kakao.Share.sendCustom({
      templateId: 124406
    });
  }

  function checknull(value, returndata) {
    if (value === undefined || value === "") {
      if (returndata !== null) return returndata;
      return "";
    } else {
      return value;
    }
  }

  // 전화 걸기 기능을 정의한 함수
  function makeCall(phoneNumber) {
    if (checknull(phoneNumber, "") === "") {
      return false;
    }
    window.location.href = 'tel:' + phoneNumber;
  }

  function makeSms(phoneNumber) {
    if (checknull(phoneNumber, "") === "") {
      return false;
    }
    window.location.href = 'sms:' + phoneNumber;
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
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem'}}>
                    <span className="vs-span" style={{display: 'inline-flex'}}>임현도</span>
                    <img src={heart} alt='heart' style={{display: 'inline-flex', width: '1.5rem'}}/>
                    <span className="vs-span" style={{display: 'inline-flex'}}>조보라</span>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingLeft: '1rem', paddingRight: '1rem'}}>
                    <img src={spring} alt='spring1' style={{width: '1.5rem', transform: 'scaleX(-1) rotate(60deg)'}}/>
                    <img src={spring} alt='spring2' style={{width: '1.5rem', transform: 'rotate(60deg)'}}/>
                    <img src={invite} alt='invite' style={{position: 'absolute', transform: 'translateY(2.5rem) translateX(-0.5rem)'}}/>
                  </div>
                </p>
              </div>
              <div className="vertical-item info">
                <p className="p1">
                  <span className="vs-span">2026년01월</span>
                  <span className="vs-span bar">10일(토)</span>
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
            <div className="sec-txt">특별할 것 없던 하루가<br />
              함께이기에 소중한 추억이 되었습니다.<br />
              이제 둘이 아닌 하나로,<br />
              평생을 함께할 동반자가 되어<br />
              매일이 행복한 삶을 시작하려 합니다.<br />
              저희의 첫걸음에 오셔서<br />
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
                  <button className="com-btn tel sl" style={{ cursor: 'pointer' }} onClick={() => {makeCall('010-4244-1604')}}>연락하기</button>
                  <button className="com-btn sms" style={{ cursor: 'pointer' }} onClick={() => {makeSms('010-4244-1604')}}>문자보내기</button>
                </div>
              </div>
              <div className="row">
                <div className="slsb-tit">신부에게 연락하기</div>
                <div className="slsb-btn">
                  <button className="com-btn tel sb" style={{ cursor: 'pointer' }} onClick={() => {makeCall('010-2506-5013')}}>연락하기</button>
                  <button className="com-btn sms" style={{ cursor: 'pointer' }} onClick={() => {makeSms('010-2506-5013')}}>문자보내기</button>
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
                    <button style={{ cursor: 'pointer' }} className="com-btn tel sl" onClick={() => {makeCall('010-3696-7840')}}>연락하기</button>
                    <button style={{ cursor: 'pointer' }} className="com-btn sms" onClick={() => {makeSms('010-3696-7840')}}>문자보내기</button>
                  </div>
                </div>
                <div className="box">
                  <div className="name"><span>어머니</span> <strong>양인자</strong></div>
                  <div className="honju-btn">
                    <button style={{ cursor: 'pointer' }} className="com-btn tel sl" onClick={() => {makeCall('010-8664-1604')}}>연락하기</button>
                    <button style={{ cursor: 'pointer' }} className="com-btn sms" onClick={() => {makeSms('010-8664-1604')}}>문자보내기</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="honju-tit sb">신부 측 혼주</div>
                <div className="box first">
                  <div className="name"><span>아버지</span> <strong>조인수</strong></div>
                  <div className="honju-btn">
                    <button style={{ cursor: 'pointer' }} className="com-btn tel sb" onClick={() => {makeCall('010-5604-5013')}}>연락하기</button>
                    <button style={{ cursor: 'pointer' }} className="com-btn sms" onClick={() => {makeSms('010-5604-5013')}}>문자보내기</button>
                  </div>
                </div>
                <div className="box">
                  <div className="name"><span>어머니</span> <strong>박은경</strong></div>
                  <div className="honju-btn">
                    <button style={{ cursor: 'pointer' }} className="com-btn tel sb" onClick={() => {makeCall('010-2431-5013')}}>연락하기</button>
                    <button style={{ cursor: 'pointer' }} className="com-btn sms" onClick={() => {makeSms('010-2431-5013')}}>문자보내기</button>
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
                <button style={{ cursor: 'pointer' }} className="tel" onClick={() => {makeCall('02-744-0677')}}>전화걸기</button>
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
                    <a className="tmap" href='tmap://search?name=성균관컨벤션웨딩홀' target='_blank' rel="noreferrer">티맵</a>
                  </li>
                  <li>
                    <a className="navermap" href='https://naver.me/IMyAR0V0' target='_blank' rel="noreferrer">네이버지도</a>
                  </li>
                  <li>
                    <a className="kakaomap" href='https://map.kakao.com/?urlX=499269.9999999987&amp;urlY=1134994.9999999988&amp;itemId=913429074&amp;q=%EC%84%B1%EA%B7%A0%EA%B4%80%EC%BB%A8%EB%B2%A4%EC%85%98%EC%9B%A8%EB%94%A9%ED%99%80&amp;srcid=913429074&amp;map_type=TYPE_MAP&amp;from=roughmap' target='_blank' rel="noreferrer">카카오맵</a>
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
            <div className="sec-txt">직접 축하를 전하지 못하는 분들을 위해<br />
              부득이하게 계좌번호를 기재하게 되었습니다.<br />
              넓은 마음으로 양해 부탁드립니다.<br />
            </div>
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
                  <button style={{ cursor: 'pointer' }} className="kakao" onClick={shareOnKakao}>
                    카카오톡<br /> 공유하기
                  </button>
                </li>
                <li>
                  <button style={{ cursor: 'pointer' }} className="copy" onClick={() => { jsCopyLink(window.document.location.href) }}>
                    링크<br /> 복사하기
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
              <button style={{ cursor: 'pointer' }} className="close-btn" onClick={() => { popClose('accountCopyG') }}>닫기</button>
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
                        우리은행
                      </div>
                      <div>
                        <span>예금주 : </span> 조보라
                      </div>
                    </div>
                    <div className="group">
                      <div>
                        <input name="BBankNum1" id="BBankNum1" className="input" readOnly value="1002-850-792950" />
                        <button style={{ cursor: 'pointer' }} type="button" className="btn" onClick={() => { jsCopyLink('1002-850-792950', 'accountCopyB', '우리은행 1002-850-792950', '예금주 조보라') }}>복사</button>
                      </div>
                    </div>
                    <div className="group col-2">
                      <div>
                        농협은행
                      </div>
                      <div>
                        <span>예금주 : </span> 조인수
                      </div>
                    </div>
                    <div className="group">
                      <div>
                        <input name="BBankNum2" id="BBankNum2" className="input" readOnly value="352-2184-3455-13" />
                        <button style={{ cursor: 'pointer' }} type="button" className="btn" onClick={() => { jsCopyLink('352-2184-3455-13', 'accountCopyB', '농협은행 352-2184-3455-13', '예금주 조인수') }}>복사</button>
                      </div>
                    </div>
                    <div className="group col-2">
                      <div>
                        하나은행
                      </div>
                      <div>
                        <span>예금주 : </span> 박인경
                      </div>
                    </div>
                    <div className="group">
                      <div>
                        <input name="BBankNum2" id="BBankNum2" className="input" readOnly value="439-910199-11107" />
                        <button style={{ cursor: 'pointer' }} type="button" className="btn" onClick={() => { jsCopyLink('439-910199-11107', 'accountCopyB', '하나은행 439-910199-11107', '예금주 박인경') }}>복사</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <button style={{ cursor: 'pointer' }} className="close-btn" onClick={() => { popClose('accountCopyB') }}>닫기</button>
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
                          <div className="tit">{copyText}</div>
                          {copyText1 !== '' && copyText2 !== '' &&
                            <div className="bkinfo">
                              <span>{copyText1}</span><br /><span>{copyText2}</span>
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                    <div className="buttons">
                      <span style={{ cursor: 'pointer' }} className="btn" onClick={() => { popClose('copyComplete'); }}>확인</span>
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
