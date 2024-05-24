# PJ5_personal_account_book

개인 프로젝트: My Account Book 만들기

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 0. 기본 설명

### 페이지 및 컴포넌트 설명

- `HomePage` : 홈페이지(메인 페이지)

  - `Form` 컴포넌트 : 지출 내용 작성하는 부분
  - `Calendar` 컴포넌트 : 월별 지출 내용 조회를 위한 월 선택하는 부분
  - `Graph` 컴포넌트 : 총 지출 비용과 지출 내역 그래프로 보여주는 부분
  - `Category` 컴포넌트 : 지출 내용 리스트로 보여주는 부분

- `DetailPage` : 상세 페이지
  - `DetailContent` 컴포넌트 : 상세한 지출 내용 출력 및 지출 내용 수정/삭제하는 부분

### state 설명

- `expense` (Router 컴포넌트에 정의)
  - 지출 내용이 객체 형태로 담긴 배열 상태 변수
  - 배열의 각 요소는 객체로, id(고유값), date(날짜), item(항목), amount(금액), description(내용) 총 5개의 프로퍼티가 있다.
  - 초기값으로는 initialExpense(dummyData 내용)이 들어간다.
- `month` (Calendar 컴포넌트에 정의)
  - 선택한 월이 들어가는 숫자형 상태 변수
  - 초기값으로는 로컬 스토리지에서 "month"라는 키로 저장된 값을 가져와서 사용자가 마지막으로 작업한 월이 들어간다.
  - 만약 로컬 스토리지에 저장된 값이 없는 경우, 초기값으로 1(월)이 들어간다.
- `date`, `item`, `amount`, `description` (DetailContent 컴포넌트에 정의)
  - 선택한 지출 목록 내용의 날짜, 항목, 비용, 설명을 나타내는 상태 변수
  - 초기값으로는 선택한 지출 목록 내용의 날짜, 항목, 비용, 설명이 각각 들어간다.
  - 이 상태 변수를 \<input> 태그의 `ref` 속성과 연결하여 \<input>의 value를 갱신하도록 설정했다.

## 1. props-drilling 방식으로 구현

### 컴포넌트 구조

```
        ┌─ HomePage ┌─ Form
        │           └─ Calendar ┌─ Graph
Router ─┤                       └─ Category
        │
        └─ DetailPage ── DetailContent
```

- props 1: `expense`, `setExpense()`

  - Router 컴포넌트에서는 `expense` state와 `setExpense()` 함수를 사용할 필요가 없다.
  - 그런데, Router 컴포넌트의 자식 컴포넌트인 HomePage 컴포넌트와 DetailPage 컴포넌트에 모두 필요하기 때문에, 그 둘의 부모 컴포넌트인 Router 컴포넌트에서 선언했다.
  - `expense` state의 흐름
    - `Router`(전달) -> `HomePage`(전달) -> `Calendar`(전달) -> `Graph`, `Category`(**사용**)
    - `Router`(전달) -> `DetailPage`(전달) -> `DetailContent`(**사용**)
  - `setExpense()` 함수의 흐름
    - `Router`(전달) -> `HomePage`(전달) -> `Form`(**사용**)
    - `Router`(전달) -> `DetailPage`(전달) -> `DetailContent`(**사용**)

- props 2: `month`

  - Calendar 컴포넌트에서 선택한 월을 저장하기 위해서 `month`라는 state를 선언했다.
  - 그런데 `month` state가 Graph 컴포넌트와 Category 컴포넌트에도 필요했다.
  - 따라서 원래 HomePage의 자식 컴포넌트였던 Graph 컴포넌트와 Category 컴포넌트롤 Calendar 컴포넌트의 자식 컴포넌트가 되도록 수정했다.
  - `month` state의 흐름
    - `Calendar`(**사용** 및 전달) -> `Graph`, `Category`(**사용**)

- props-drilling 방식의 불편한 점
  - props를 사용하지 않고 전달하는 과정이 잦아서 비효율적이다.
  - 동일한 페이지의 컴포넌트인데도 불구하고 props를 사용하기 위해서 컴포넌트 구조를 그 안에서 또 계층적으로 나눠야 해서 코드 리뷰할 때 페이지의 구조를 해석하기가 어렵다.

## 2. Context API 방식으로 구현

### 컴포넌트 구조

```

```

## 3. Redux 방식으로 구현

### 컴포넌트 구조

```

```
