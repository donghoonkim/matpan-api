<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>


[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">효율적이고 확장 가능한 서버 사이드 애플리케이션 구축을 위한 진보적인 <a href="http://nodejs.org" target="_blank">Node.js</a> 프레임워크입니다.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

## 프로젝트 설명


[Nest](https://github.com/nestjs/nest) 프레임워크 TypeScript 스타터 리포지토리입니다.

## 주요 기능 및 변경 사항 (Key Features & Updates)

현재 프로젝트에 구현된 주요 기능과 설정입니다.

- **패키지 관리**: `npm`에서 **`yarn`**으로 마이그레이션 완료 (2026-01-30)
- **데이터베이스**: **Neon PostgreSQL** 연동 (TypeORM)
  - `admin` -> `TB_ADMIN` 테이블명 변경 및 CRUD 구현
- **보안**: 
  - 관리자 로그인 시스템 구현 (bcrypt 암호화, JWT 인증, Rate Limiting)
  - `.env` 환경 변수 관리 및 불필요한 결제 관련 링크 제거
  - 리포지토리 보안 설정 (`.gitignore` 강화, `.env.example` 제공)
- **API 문서**: Swagger 자동 생성 (/api-docs)
  - 문서 및 API 설명 한글화(영문 병기) 적용
  - `api-docs.yaml` 파일로 OpenAPI 3.0 명세 제공
- **UI 개선**: 루트 경로(`/`) 접속 시 HTML 랜딩 페이지 제공
- **보안**: `.env` 환경 변수 관리 및 불필요한 결제 관련 링크 제거

## 프로젝트 설정


```bash
$ yarn install
```

## 앱 실행

```bash
# 개발 모드 (development)
$ yarn start

# 워치 모드 (watch mode)
$ yarn start:dev

# 프로덕션 모드 (production mode)
$ yarn start:prod
```

## 테스트

```bash
# 단위 테스트 (unit tests)
$ yarn test

# e2e 테스트 (e2e tests)
$ yarn test:e2e

# 테스트 커버리지 (test coverage)
$ yarn test:cov
```

## 빠른 시작 및 테스트 (Quick Start)

프로젝트를 설치하고 주요 기능을 빠르게 테스트하는 방법입니다.

### 1. 설치 (Installation)
패키지 의존성을 설치합니다.
```bash
$ yarn install
```

### 2. 실행 (Running)
API 서버를 실행합니다.
```bash
$ yarn start
```
서버가 정상적으로 실행되면 `http://localhost:3000` 포트에서 대기합니다.

### 3. 검증 (Verification)

서버가 실행 중인 상태에서 터미널을 열어 아래 명령어들을 통해 동작을 확인할 수 있습니다.

#### 서버 상태 확인
```bash
$ curl http://localhost:3000/api
# 응답: Hello World!
```

#### API 문서 (Swagger)
브라우저에서 [http://localhost:3000/api-docs](http://localhost:3000/api-docs) 주소로 접속하면 전체 API 문서를 확인할 수 있습니다.

#### 게시글 생성 (API 테스트)
**정상 요청 (201 Created):**
```bash
$ curl -X POST http://localhost:3000/api/posts \
  -H "Content-Type: application/json" \
  -d '{"title": "첫 번째 글", "content": "안녕하세요, NestJS!"}'
```

**잘못된 요청 (400 Bad Request - 유효성 검사):**
제목을 비워서 보내면 에러가 발생합니다.
```bash
$ curl -X POST http://localhost:3000/api/posts \
  -H "Content-Type: application/json" \
  -d '{"title": ""}'
```

## 배포

NestJS 애플리케이션을 프로덕션 환경에 배포할 준비가 되셨다면, 효율적인 운영을 위해 몇 가지 핵심 단계를 밟아야 합니다. 자세한 내용은 [배포 문서](https://docs.nestjs.com/deployment)를 확인하세요.

NestJS 애플리케이션을 배포할 클라우드 기반 플랫폼을 찾고 계시다면, AWS에 NestJS 애플리케이션을 배포하기 위한 공식 플랫폼인 [Mau](https://mau.nestjs.com)를 확인해 보세요. Mau를 사용하면 몇 가지 간단한 단계만으로 쉽고 빠르게 배포할 수 있습니다:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

Mau를 사용하면 단 몇 번의 클릭만으로 애플리케이션을 배포할 수 있어, 인프라 관리보다는 기능 개발에 집중할 수 있습니다.

## 참고 자료

NestJS 작업 시 유용한 리소스들을 확인해 보세요:

- 프레임워크에 대해 더 자세히 알아보려면 [NestJS 문서](https://docs.nestjs.com)를 방문하세요.
- 질문이나 지원이 필요하면 [Discord 채널](https://discord.gg/G7Qnnhy)을 방문해 주세요.
- 더 깊이 있는 내용과 실습 경험을 원하신다면 공식 영상 [코스](https://courses.nestjs.com/)를 확인해 보세요.
- [NestJS Mau](https://mau.nestjs.com)를 사용해 단 몇 번의 클릭으로 AWS에 애플리케이션을 배포해 보세요.
- [NestJS Devtools](https://devtools.nestjs.com)를 사용하여 애플리케이션 그래프를 시각화하고 실시간으로 NestJS 애플리케이션과 상호 작용해 보세요.
- 프로젝트 진행에 도움이 필요하신가요(파트타임 ~ 풀타임)? 공식 [엔터프라이즈 지원](https://enterprise.nestjs.com)을 확인해 보세요.
- 최신 소식과 업데이트를 받으려면 [X](https://x.com/nestframework)와 [LinkedIn](https://linkedin.com/company/nestjs)에서 팔로우하세요.
- 구직 중이거나 채용할 인재를 찾고 있다면 공식 [Jobs board](https://jobs.nestjs.com)를 확인해 보세요.


## 연락처

- 작성자 - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- 웹사이트 - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## 라이선스

Nest는 [MIT 라이선스](https://github.com/nestjs/nest/blob/master/LICENSE)를 따릅니다.
