# Step 1

1. 카드 추가 페이지에서는 사용자가 카드 정보를 입력하면 카드를 추가할 수 있다.
   - [x] 유효하지 않은 값이 입력되면, 입력을 거부한다
   - [x] 여러 개의 입력란으로 이루어진 항목의 경우 한 입력란의 최대 입력 값이 채워지면
     - [x] 해당 입력란보다 앞에 위치한 입력란 중 채워지지 않은 곳이 있다면 해당 입력란으로 포커스가 이동한다.
     - [x] 그 외 모든 경우에는 다음 입력란으로 포커스가 자동으로 이동된다.
   - 각 입력란의 작성이 유효한 값으로 완료되면
     - [x] 레이블의 색상이 변경된다.
     - [x] 입력란의 값의 색상이 변경된다
   1. 카드 번호
      - [x] 카드 번호의 길이는 16자이다.
      - [x] 카드 번호 입력란에는 숫자만 입력할 수 있다.
      - [x] 앞 8 자리는 화면에 그대로 표시된다.
      - [x] 뒷 8 자리는 화면에 가려서 표시된다.
   2. 만료일
      - [x] 만료일은 `MM/YY`의 형식으로 이뤄져 있다.
      - [x] 만료일 입력란에는 숫자만 입력할 수 있다.
      - [x] 월 입력은 (0으로 앞자리가 채워진) 한 자리수 숫자, 11, 12만 입력이 가능하다.
      - [x] 입력란에 한 숫자만 입력했을 때 자동으로 앞자리를 0으로 채운다.
      - [x] 0으로 채워진 한 자릿수의 경우 추가적인 숫자를 입력했을 때, 입력란에 유효한 값이라면 0을 제거하고 입력된 값을 반영한 두 자릿수를 표시한다
   3. 카드 소유자 이름
      - [x] 이름은 30자 이내로 작성 가능하다.
      - [x] 이름은 생략할 수 있다.
      - [x] 이름은 영어만 입력할 수 있다.
      - [x] 소문자를 입력한 경우 대문자로 변환하여 저장하고 표시한다.
      - [x] 최대 길이와 현재 입력된 이름이 기록된 길이를 표시한다.
   4. 보안 코드
      - [x] 보안 코드는 숫자만 입력 가능하다.
      - [x] 보안 코드의 길이는 3자리이다.
      - [x] 보안 코드를 입력하면 가려서 표시된다.
      - [x] 물음표 아이콘을 클릭하면 보안 코드에 대한 설명이 표시된다.
   5. 카드 비밀번호 앞 두 자리
      - [x] 카드 비밀번호는 숫자만 입력 가능하다.
      - [x] 입력해야 할 카드 비밀번호는 2자리이다.
      - [x] 각 자리에 대한 입력란은 개별적인 칸으로 구성된다.
2. 카드 이미지 업데이트
   - [x] 카드 정보 입력 폼에 상태를 변경할 때마다 실시간으로 미리보기 카드의 내용을 갱신한다.
3. 카드 정보를 입력 완료했을 때
   - [x] 다음 페이지로 넘어가는 버튼을 표시한다
   - [x] 미리보기 카드의 색상을 변경한다
4. 다음 페이지로 넘어가기 버튼을 클릭하면 저장 완료 메시지를 담은 alert를 표시한다.
5. 스토리북
   - [x] UI 컴포넌트에 대한 스토리북을 작성한다.

# Step2

1. 카드 정보를 제출하면 별칭을 입력하는 화면을 표시한다.
   - [x] 카드 정보 폼에서 입력한 값을 보여주는 카드를 표시한다.
   - [x] 카드 등록이 완료되었다는 창을 표시한다.
   - [x] 별칭 입력 폼을 구현한다.
     - [x] 별칭을 입력하기 전에는 다음 페이지로 이동 버튼의 값이 '건너뛰기'로 표시된다.
     - [x] 별칭을 입력한 뒤에는 다음 페이지로 이동 버튼의 값이 '완료'로 표시된다.
   - [x] 별칭을 입력하면 저장된 정보에 별칭을 추가한다.
   - [x] '건너뛰기' 혹은 '완료' 버튼을 클릭하면 카드 목록 페이지로 이동한다.
2. 페이지에 처음 접속하면 보유한 카드 목록을 나열하여 보여준다.
   - [x] 로컬 저장소에 저장된 카드 정보를 불러와 화면에 수직으로 표시한다.
   - [x] 카드 목록의 제일 하단에는 카드의 모양으로 만들어진 추가 버튼을 표시한다.
   - [x] 추가 버튼 클릭 시, 카드 추가 페이지로 이동한다.
     - [x] 카드 추가 페이지 상단에 뒤로가기 버튼을 구현한다.
   - [x] 등록된 카드 번호를 기반으로 카드에 임의의 배경색을 추가한다.
3. 스토리북 상호작용 테스트를 구현한다.
   1. 앱 스토리
      - [x] 랜딩 페이지 스토리를 구현한다.
      - [x] 카드 추가 버튼을 클릭해 카드 추가 페이지로 이동한 스토리를 구현한다.
   2. 페이지 스토리
      1. 카드 추가 페이지
         - [x] 기본 추가 페이지의 스토리를 구현한다.
         - [x] 상호 작용 테스트를 이용해 완성된 폼, 오류가 있는 폼, 제출한 뒤 스토리를 구현한다.
      2. 카드 목록 페이지
         - [x] 기본 목록 페이지의 스토리를 구현한다.
         - [x] decorator를 활용해 localStorage에 카드를 추가한 뒤 카드 목록 페이지의 스토리를 구현한다.
   3. UI 컴포넌트 스토리
      - [x] 각 UI 컴포넌트에 대한 스토리를 구현한다.
      - [x] 각 스토리마다 기본, 오류, 완성 등 특수 상태에 대한 스토리를 구현한다.
4. Context API를 활용해 전역 상태를 관리한다.
   - [x] 카드 추가 폼에서 카드 정보에 대한 상태를 Context API로 구현한다.
   - [x] 최적화를 위해 순수 컴포넌트에 대한 리렌더링을 방지를 구현한다.