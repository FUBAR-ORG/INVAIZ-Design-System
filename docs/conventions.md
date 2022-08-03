# IDS Git Convention

> 해당 문서는 INVAIZ Design System의 기본적인 컨벤션 규약을 작성한 문서입니다.

## 목차

- [Branch Naming Conventions](#1-branch-naming-conventions)
- [Commit Conventions](#2-commit-conventions)
- [Pull Request Conventions](#3-pull-request-conventions)

## 1. Branch Naming Conventions

- 브런치 네이밍 규칙을 정의합니다.
- 브런치 네임은 **페이지/컴포넌트 이름**으로 구성합니다.
- **페이지**는 Figma에서 분류해놓은 **페이지 이름**으로 작성합니다.
- **컴포넌트**은 **컴포넌트 이름**으로 작성합니다.
- 아래는 **페이지**와 **컴포넌트**에 대한 예시를 제공합니다.

---

- **페이지 이름**은 페이지 리스트에서 확인할 수 있습니다.
- **컴포넌트 이름** 은 컴포넌트 페이지의 제목(빨간박스)에서 확인할 수 있습니다.

| <img src="https://user-images.githubusercontent.com/40492343/179663109-07d2ab0b-af04-43f7-949f-a14307cb8389.png"> |
| :---------------------------------------------------------------------------------------------------------------: |
|                                             컴포넌트 이름 및 세부속성                                             |

---

| <img src="https://user-images.githubusercontent.com/40492343/179663059-38a3f68e-c7bd-40e2-b9b5-1b97340dc02a.png"> |
| :---------------------------------------------------------------------------------------------------------------: |
|                                                    페이지 이름                                                    |

### Exmaple

- 아이콘의 사이즈를 작업하는 경우.
  > `$git branch icon/size`
- 인풋 박스의 스타일1을 작업하는 겨웅
  > `$git branch input/style1`

## 2. Commit Conventions

- 커밋 메시지의 규칙을 정의합니다.
- 커밋 메시지는 **# 커밋타입: 본문** 으로 작성합니다.
- 커밋 타입은 아래와 같습니다.
  - feat: 새로운 기능이 추가되었을 시
  - fix: 버그를 수정했을 시
  - docs: 문서를 작성하거나 변경하였을 시
  - style: 코드 포맷팅
  - test: 테스트 코드 작성 시
  - refactor: 코드 리팩토링 시
  - config: 설정 값 추가 및 변경 시

### Example

- 버튼 사이즈에 대한 작업이 완료되었을 시
  > `# feat: 버튼 사이즈 작업 완료`
- 컨벤션 문서를 작성한 경우
  > `# docs: pr 컨벤션 및 commit 컨벤션 작성`
- 아이콘 크기에 대한 수정이 있을 경우
  > `# fix: 아이콘 크기 수정`

## 3. Pull Request Conventions

- Pull Request 규칙을 정의합니다.
- 기본적으로 PR 제목은 **[PR타입]: 작업내용**으로 구성합니다.
- 작업 내용은 간략하게 요약하여 작성합니다.
- PR타입은 아래와 같습니다.
  - FEAT: 새로운 기능 추가
  - FIX: 버그 수정
  - DOCS: 문서 작성 및 수정
  - DELETE: 기능 삭제
  - CHORE: 빌드 프로세스 또는 문서 생성과 같은 보조도구 및 라이브러리 변경
  - CONFIG: 환경 변수 설정 및 셋팅

### Example

- 버튼의 색상작업이 완료된 경우
  > [FEAT]: 버튼 색상 코드를 추가하였습니다.
- 템플릿을 작성한 경우
  > [DOCS]: 버그, 요청 이슈 템플릿을 작성하였습니다.
