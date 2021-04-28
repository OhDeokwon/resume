export default {
  privacy: {
    name: '김덕원',
    job: '웹 프론트엔드 개발자',
    profile: 'https://avatars3.githubusercontent.com/u/12786855?s=460&u=f550803f0e4cfa0ff46a50b477cad324dbb1958f&v=4',
    updated: '2020-01-20',
    email: 'villain406@kakao.com',
    phone: '010-8557-8011',
    introduce: `저는 서비스의 발전 및 개선을 통해 뿌듯함을 느끼는 것을 좋아합니다. 코드의 가치는 비즈니스적 가치를 창출할 수 있을 때 나온다고 생각합니다.`,
    buttons: [
      {
        icon: 'images/github.svg',
        url: 'https://github.com/KimChunsick'
      }
    ]
  },
  careers: [
    {
      company: '알바체크',
			position: 'Frontend Developer',
			description: `알바체크는 비대면 매장 관리 서비스입니다. 기존의 알바 현장에서 카카오톡이 주로 사용되며 일과 삶이 구분되지 않는 상황을 해결하고, 사장님과 근무자 모두 서로 믿고 일할 수 있는 환경을 만들기 위해 탄생했습니다.

			사장님이 업무를 등록해놓으면 근무자들이 업무를 해결하고 보고하는 시스템을 자동화한 솔루션입니다. 업무를 넘어 채용 등, 알바의 모든 것이 되기 위해 노력하고 있습니다.`,
      date: '2018.12 ~',
      projects: [
        {
          name: '알바체크 백오피스',
          date: '2019.08 ~ 2020.06',
          description: '회사 내부적으로 데이터확인 CS관리등을 위해 제작한 어드민 페이지입니다. 현재는 어드민 페이지를 새로 개발함으로써, 기존 프로젝트는 중단되었습니다.',
          works: [ '유저 데이터 관리 기능 제작', '매장 데이터 관리 기능 제작', 'B2B 본사(HQ)용 간단한 데이터 접근, 수정 및 통계 기능 제작' ],
          skills: [
            {
              icon: 'images/vue.svg',
              name: 'Vue'
            },
            {
              icon: 'images/typescript.svg',
              name: 'TypeScript'
            }
          ]
        },
        {
          name: '알바체크 앱 프론트',
          date: '2019.01 ~ 2021.04',
          description: `웹앱에 사용되는 앱 프론트를 제작했습니다.`,
					works: [
						'JWT 인증 개발',
						'컴포넌트 재사용성을 위해 Atomic Design 적용',
						'패키지 최적화를 통해 초기 로딩 속도 최적화',
						'인앱 결제, PG사를 통한 결제 구현',
						'네이티브 웹뷰와 원활한 데이터 교환을 위한 JS Bridge용 라이브러리 제작',
						'원활한 에러 추적을 위한 에러 로깅 시스템 연동',
						'앱 프론트의 모든 기능 개발'
					],
          skills: [
            {
              icon: 'images/nuxt.svg',
              name: 'Nuxt'
            },
            {
              icon: 'images/vue.svg',
              name: 'VueX'
            },
            {
              icon: 'images/javascript.svg',
              name: 'JavaScript'
            }
          ]
        },
        {
          name: '알바체크 iOS, Android Application 유지보수',
          date: '2018.12 ~ 2021.04',
          description: `알바체크 프론트를 웹뷰로 띄워주고 프론트에서 하기 힘든 작업들을 JS Bridge로 연결시키거나 웹쪽 인터페이스와 연결하여 작업하고 있습니다.
					Native Application 전체를 유지보수 및 개발하고 있습니다.`,
					works: [
						'카카오톡, 문자 초대 기능 개발',
						'Push notification 기능을 웹과 연결하는 인터페이스 개발',
						'DeepLink 기능을 웹과 연결하는 인터페이스 개발',
						'Barcode Reader 기능과 웹 연결',
						'JS Brdige를 인터페이스로 구조화',
						'iOS, Android Application의 모든 기능 개발'
					],
					skills: [
						{
							icon: 'images/swift.svg',
							name: 'Swift'
						},
						{
							icon: 'images/kotlin.svg',
							name: 'Kotlin'
						}
					]
				}
			]
		}
	],
	activities: [
		{
			title: '건축정보 모바일서비스 콘텐츠 개발 공모전 최우수상',
			position: 'iOS Developer',
			date: '2019.11 ~ 2020.02',
			description:
				'국토교통부와 한국감정원이 공동개최한 공모전으로 AR을 활용하여 주변 건물에서 교통약자를 위한 시설이 있는지 확인 할 수 있는 앱을 제작했습니다. barrier free 제도에 대해 알게 되었고 AR을 시도하여 서비스를 제작했다는 것에 큰 의의를 두고 있습니다.'
		},
		{
			title: 'KB AppChallenge 대상',
			position: 'iOS Developer',
			date: '2018.11',
			description:
				'KB 금융지주에서 SOPT 회원들을 대상으로 2주 동안 진행된 해커 톤입니다. OpenCV와 Project Oxford를 활용해 영수증 인식기능을 구현했습니다. 간단하게나마 앱 내에서 영상처리 기술을 시도해본 좋은 경험이었던 것 같습니다.'
		},
		{
			title: 'Boost Course Ace 2nd - iOS 프로그래밍',
			position: 'Beta Tester',
			date: '2018.03 ~ 2018.08',
			description:
				'iOS 실무자들에게 코드리뷰를 받으며 프로젝트를 진행하는 부스트 코스의 베타테스터로 활동했었습니다. 별 탈 없이 코스를 완수했으며 코드리뷰를 통해 코드의 구조, 확장성에 대해 고민을 하며 한 단계 더 성장할 수 있었던 기회였습니다.'
		},
		{
			title: 'SOPT 22nd',
			position: 'iOS Part',
			date: '2018.03 ~ 2018.07',
			description: '대학생 연합 IT 벤처 창업 동아리에 가입하여 iOS 개발 파트원으로 활동했습니다. iOS 개발의 기초와 팀원 간의 협업을 배울 수 있었습니다.'
		},
		{
			title: 'Software Maestro 8th',
			position: 'Team Leader',
			date: '2018.11',
			description:
				'소프트웨어 마에스트로 8기를 수료했습니다. DX, DXUT를 활용해 컴포넌트 게임엔진을 제작했습니다. 디자인 패턴과 코드로 작성한 것들이 어떻게 화면에 그려지는지에 대해 알 수 있는 뜻깊은 프로젝트였습니다.'
		},
		{
			title: '2984 Little Brother',
			position: 'Programmer',
			date: '2017.11 ~ 2018.02',
			description:
				'GameJam: Art, Politics and Digital Games에서 수상한 작품입니다. 주한 독일 문화원의 도움으로 독일 A-MAZE / International Playful Media Festival에 전시도 하였습니다. "내가 만든 소프트웨어에 의미를 담음으로써 얼마나 큰 영향력을 줄 수 있을까?"를 생각할 수 있었던 좋은 기회였습니다.'
		},
		{
			title: '우리동네 냥아치',
			position: 'Team Leader',
			date: '2017.08 ~ 2017.12',
			description:
				'인디 게임 카페에서 팀을 모아 제작한 게임입니다. 간단한 게임이었지만, 원격에서 작업하는 것과 모르는 사람들이 모여서 개발한다는 점에서 많은 어려움을 겪었습니다. 현재는 정책 위반으로 잠시 내려놓은 상태이며 약 1달 만에 구글 플레이스토어 5,000명 다운로드, 아케이드 게임 순위 TOP10에 진입했었습니다. 프로젝트의 완료가 얼마나 힘든 것인지 몸소 깨닫게 해준 정말 감사한 프로젝트였습니다.'
		}
	]
}
