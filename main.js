// 엘리먼트 모음
/** 검색 버튼 */
let searchButton = document.getElementById("search-btn");
/** 국가 검색 입력창 */
let countryInput = document.getElementById("country-inp");

// 함수
/** 국가 데이터를 가져오는 함수
 * 1. 수도
 * 2. 대륙
 * 3. 인구수
 * 4. 통화명 - 통화 코드
 * 5. 사용 언어
*/
let getCountryData = () => {
  let countryName = countryInput.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = `
        <img src=${data[0].flags.svg} class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
          <div class="data-wrapper">
            <h4>Capital:</h4>
            <span>${data[0].capital[0]}</span>
          </div>
        </div>
        <div class="wrapper">
          <div class="data-wrapper">
            <h4>Continent:</h4>
            <span>${data[0].continents[0]}</span>
          </div>
        </div>
        <div class="wrapper">
          <div class="data-wrapper">
            <h4>Population:</h4>
            <span>${data[0].population.toLocaleString("ko-KR")}명</span>
          </div>
        </div>
        <div class="wrapper">
          <div class="data-wrapper">
            <h4>Currency:</h4>
            <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
          </div>
        </div>
        <div class="wrapper">
          <div class="data-wrapper">
            <h4>Common Languages:</h4>
            <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
          </div>
        </div>
      `;
    }).catch(()=>{
      if(countryName.length == 0){
        result.innerHTML = `<h3>The input field cannot be empty</h3>`
      }else{
        result.innerHTML = `<h3>Please enter a valid country name.</h3>`
      }
    })
};

// 이벤트
searchButton.addEventListener("click", getCountryData);
