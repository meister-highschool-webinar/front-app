# front-app
Webinar Platform Web Application

## 기술 스택
- React
- MobX
- SASS
- Axios
- socket.io

## 코드 컨벤션
Airbnb JS Style Guide를 따릅니다.
https://github.com/airbnb/javascript
IDE 에서 prettier 켜주세요.

## 세팅
1. git clone https://github.com/meister-highschool-webinar/front-app.git
2. yarn / npm install
3. yarn start / npm start

## 개발 가이드
- 개발 Task는 GitHub Projects의 칸반 보드로 관리합니다.
- 칸반 보드의 각 카드는 GitHub Issue에 등록되어 있습니다. 해당 Issue는 모두 `task` 라벨이 달려있습니다.
- Task는 1개 이상의 Feature로 쪼개집니다.
- Feature는 본인이 자유롭게 나누고, 이를 Issue로 생성합니다. 해당 Issue에는 `feature` 라벨을 달아주세요.
- 자신이 담당하는 Issue에는 본인을 Assignee로 등록해주세요.
- Git-flow 전략을 따르며, `feature-{seq}-{desc}`와 같은 식으로 브랜치를 생성합니다. `seq`는 Feature의 Issue 번호로 지정하며, `desc`는 자유롭게 지정해주세요.
- 구현시 develop branch에 PR를 날립니다.
- 해당 PR에 대해 자신을 제외한 2명 이상의 코드리뷰가 완료되면 merge 합니다.


## Issue 생성 가이드
- 기본적인 템플릿에 따라 작성
- 구현해야할 기능 구체적으로 설명
- 적절한 라벨링과 Project에 적용
- 생성할 떄 자기 자신한테 assign합니다

## PR 가이드
- 중점적으로 봐줬으면 하는 내용 서술
- 질문이나 개선사항 서술
- 본문 끝에 closes #{이슈번호}를 사용하여 PR에 이슈가 언급되게 함
