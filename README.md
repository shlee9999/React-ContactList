# 👀[프로젝트 이름] ReadMe

![image](https://github.com/user-attachments/assets/3c4077c5-9f46-4c3d-b2c5-46713e7a887b)


## 프로젝트 소개

- 사용자의 연락처를 저장할 수 있는 기본적인 CRUD 애플리케이션입니다.
- 데이터 input 검사 로직이 포함되어 있어 사용자의 불편을 최소화하였습니다.

## 팀원 구성



- 이성훈

## 1. 개발 환경



- Front : HTML, CSS, Typescript, React, Recoil
- Version & Issue Management : Github
- Tools : Notion
- Service : Vercel

## 2. 채택한 개발 기술과 브랜치 전략



### Recoil

- Recoil은
- 원데이 프로젝트 특성상 빠른 개발이 필요하다고 판단하여 React hook과 사용 방식이 유사한 Recoil을 선택했습니다.
- Recoil은 컴포넌트 간 상태 공유를 쉽게 구현할 수 있어 상태 관리가 효율적입니다.
- Recoil의 AtomEffects를 통해 LocalStorage에 데이터를 손쉽게 저장할 수 있었습니다. 이는 복잡한 로직 없이도 간단한 설정만으로 가능해 개발 시간을 크게 단축했습니다.

## 3. 프로젝트 구조



```
📦src
 ┣ 📂atoms
 ┃ ┗ 📜index.ts
 ┣ 📂components
 ┃ ┣ 📂AddModal
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜style.css
 ┃ ┣ 📂ContactInfoCon
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜style.css
 ┃ ┣ 📂ContactInfoItem
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜style.css
 ┃ ┣ 📂DetailModal
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜style.css
 ┃ ┣ 📂GroupModal
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜style.css
 ┃ ┣ 📂GroupSelect
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜style.css
 ┃ ┣ 📂NameInput
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂PhoneInput
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂PrimaryBtn
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜style.css
 ┃ ┗ 📂RecordInput
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂constants
 ┃ ┗ 📜index.ts
 ┣ 📂hooks
 ┃ ┣ 📜useContactInfo.ts
 ┃ ┣ 📜useGroups.ts
 ┃ ┗ 📜useModal.ts
 ┣ 📂pages
 ┃ ┣ 📜HomePage.tsx
 ┃ ┗ 📜style.css
 ┣ 📂types
 ┃ ┗ 📜index.ts
 ┣ 📂utils
 ┃ ┗ 📜index.ts
 ┣ 📜global.css
 ┣ 📜main.tsx
 ┣ 📜reset.css
 ┗ 📜vite-env.d.ts
```

## 4. 개발 기간



### 개발 기간

- 전체 개발 기간 :  24/09/03

## 5. 신경 쓴 부분



- 디렉토리 구조 : index.tsx 파일의 import 경로 단축을 이용해 import문을 간결하게 만들어 코드의 가독성을 향상시켰습니다.
- 절대경로 : import문을 단순화시킬 수 있었습니다. 이또한 코드 가독성 향상에 많이 기여한다고 생각합니다.
- 연락처 입력 시 정규 표현식을 통해 검사하여 에러 메시지를 출력하게 했습니다.
- Recoil의 AtomEffects를 통한 LocalStorage 저장으로 코드량을 많이 줄였습니다.
- Atom 별로 Hook을 따로 만들어 무분별한 Atom 수정을 방지했습니다.
    
    → useContactInfo.ts, useGroups.ts
    
- CSS 커스텀 프로퍼티를 사용해 var 키워드로 받아올 수 있도록 하였습니다.

## 6. 페이지/모달별 기능



### [HomePage]

![image](https://github.com/user-attachments/assets/90087e28-6181-407c-8451-e3905da0ba9f)

- 저장한 연락처 리스트를 볼 수 있습니다.
- input에서 검색 기능을 이용하여 원하는 전화번호를 금방 찾을 수 있습니다.
    - 아무 글자도 입력하지 않고 Enter 입력 시 모든 연락처가 로딩됩니다.
- 연락처 추가하기 버튼을 통해 연락처를 추가할 수 있는 AddModal로 넘어갑니다.
- 연락처를 클릭 시 DetailModal로 넘어갑니다.
- 연락처 리스트의 오른쪽 삭제 버튼을 통해 연락처를 지울 수 있습니다.

### [AddModal]

![image](https://github.com/user-attachments/assets/50da6739-2814-44f1-9e01-362f9c754714)

- 저장할 연락처를 입력하고 저장 버튼을 눌러 연락처 리스트에 추가하는 Modal입니다.
- 그룹을 지정할 수 있으며, 조직추가 버튼 클릭 시 GroupModal로 넘어갑니다.
- 이름, 전화번호 입력 시 형태가 맞지 않으면 다음과 같이 에러메시지를 출력합니다.

![image](https://github.com/user-attachments/assets/e71dbd60-e544-4e7f-9a6e-8a3d01f8371d)

### [GroupModal]

![image](https://github.com/user-attachments/assets/a7745f8c-0fcf-48b0-9c15-a515d96ecd34)

- 그룹을 삭제/제거할 수 있는 Modal입니다.
- 그룹은 사전 순으로 정렬됩니다.
- 가족, 스터디, 직장, 친구는 기본 그룹입니다.
- 기본 그룹과 등록된 인원이 있는 그룹은 삭제가 불가능하며, 우측 삭제 버튼이 비활성화됩니다.

![{6ECF314B-DC4F-4CDC-83C0-6F31C98D1935}.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a573e595-2a55-4296-b120-a14b3ee29eb0/f5bf4365-6360-4f4a-a39b-472a1f606e60/6ECF314B-DC4F-4CDC-83C0-6F31C98D1935.png)

![{54F08C54-013E-4863-9C4F-535EB5D6F250}.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a573e595-2a55-4296-b120-a14b3ee29eb0/32691f63-67c4-4e2b-8d03-2c71e2e6db53/54F08C54-013E-4863-9C4F-535EB5D6F250.png)

- 가장 하단의 input을 이용하여 새 그룹을 추가할 수 있습니다.

### [DetailModal]

![image](https://github.com/user-attachments/assets/038baabe-0aeb-4383-a623-930b5c5842b2)

- 연락처에 저장한 상세 정보를 보여주는 모달입니다.
- AddModal에서 생성한 메모를 여기서 볼 수 있습니다.
- 우측 상단의 연필 버튼을 클릭해 Editing 모드로 전환할 수 있습니다.

![image](https://github.com/user-attachments/assets/b665ab61-c6da-477b-8a20-12a567472a54)

- Editing 모드로 전환하게 되면 입력했던 모든 정보를 수정할 수 있습니다.
- 수정 완료 버튼을 누르면 수정이 완료됩니다.

## 7. 개선 목표



- 원데이 프로젝트이고 예외처리에 집중하여 크게 신경쓰지 못한 디자인을 개선하고 싶습니다.
- 기본 그룹을 지정할 수 있도록 하고 싶습니다.
- AddModal의 간단한 기록과 상세 정보에서의 메모는 같은 것이므로 통일해야 합니다.
    - Modal의 개수가 늘어남에 따라, 이를 효율적으로 관리할 방법을 찾고 싶습니다.
- window.alert가 아닌, 디자인된 새로운 모달을 사용하고 싶습니다.
- 배포 환경에서 에러 메시지가 wrap되는 현상이 발생하고 있어, white-space:no-wrap; 속성을 줘야합니다.

## 8. 프로젝트 후기



이번 프로젝트는 원데이 프로젝트로 진행하여, 제한된 시간 내에 최대한 많은 기능을 구현하는 데 집중했습니다. Recoil을 사용해 빠르게 상태 관리를 구현할 수 있었고, 특히 AtomEffects를 통해 LocalStorage와의 연동을 쉽게 처리할 수 있었던 점이 큰 도움이 되었습니다.

예외 처리를 꼼꼼히 하면서 사용자의 입력 오류를 최소화하는 데 집중했지만, 디자인 부분에 충분히 신경 쓰지 못한 점은 아쉽습니다. 또한, 개선 사항을 생각해보던 중 모달의 개수가 많아졌을 때 이를 효율적으로 관리할 방법에 대해 고민하게 되었습니다. 앞으로는 사용자 경험을 더욱 향상시키기 위해 디자인 개선과 함께, 복잡한 기능을 더 단순하고 직관적으로 구현하는 방법을 모색할 계획입니다.

이번 프로젝트를 통해 빠른 개발 속도와 안정성 사이의 균형을 맞추는 경험을 할 수 있었고, 추후 기능 확장과 개선을 통해 더욱 완성도 높은 애플리케이션을 만들고 싶습니다.
