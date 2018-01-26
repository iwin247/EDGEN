# schema

## user schema

    {

      "id" : "로그인 시 필요한 아이디", {타입: String, 중복 불허: true, 필수: true}

      "passwd" : "로그인 시 필요한 패스워드",  {타입: String, 필수: true},

      "name" : "사람 이름", {타입: String,  필수: true},

      "birth" : "생일",  {타입: Date인데 String 던져줘도됨, 필수: true},

      "gender" : "성별", {타입: Boolean, 필수: true} //0: 남자 1: 여자,

      "height" : "키", {타입: Number, 필수: true}

      "weight" : "몸무게", {타입: Number, 필수: true},

      "eamil" : "이메일", {타입: String, 필수: true}

      "phone_Number" : "폰 번호", {타입: String, 필수: true},

      "token" : "토큰", {타입: String},

      "self_introduce" : "상세 설명 ( 자기 소개 )", {타입: String},

      "trainer" : "연결된 트레이너의 토큰", {타입: String},

      "tranning" : [{

        "money" : "횟수당 돈", {타입: Number},

        "time" : "원하는 횟수" {타입: Number}
    }],

      "pt" : [{

        "trainer_token" : "pt 신청한 트레이너의 토큰", {타입: String},

        "trainer_Date" : "pt 신청한 트레이너의 날짜" {타입: Date}

      }],


      "dibs" : [{

        "trainer_token": "유저가 찜한 트레이너의 토큰" {타입: String}

      }]

    },

---------------------------------------
## trainer schema

    {

        "category" : "카테고리", {타입: String},

        "id" : "로그인 시 필요한 아이디", {타입: String, 중복 불허: true, 필수: true}

        "passwd" : "로그인 시 필요한 패스워드",  {타입: String, 필수: true},

        "name" : "이름", {타입: String, 필수: true},

        "birth" : "생일", {타입: Date 인데 String으로 보네도됨, 필수: true}

        "ptcount" : "지금까지의 고객 수", {타입: Number},

        "self_introduce" : "상세 설명 ( 자기 소개 )", {타입: String},

        "visitant" : "방문자 수", {타입: Number},

        "spec" : [{
          "member_cnt" : "PT 회원 수" {타입: Number}

          "career_year": "경력" {타입: Number}

          "career_awards": "수상경력" {타입: String Array}

          "career_certificate": "자격증" {타입: String Array}
        }],

        "gym_address" : "체육관 주소", {타입: String, 기본적으로: "null" 들어있음},

        "gender" : "성별 (0 or 1)", {타입: Boolean, 필수: true}, //0 남자 1 여자

        "height" : "키", {타입: Number, 필수: true},

        "weight" : "몸무게", {타입: Number, 필수: true},

        "email" : "이메일", {타입: String, 필수: true},

        "review" : [{ //유저의 리뷰

        "star" : "별점", {타입: Number},

        "index" : "리뷰 내용", {타입: String},

        "comment" : "리뷰에 달린 댓글" {타입: String}

        "star": "즐겨찾은 유저수" {타입: Number, default: 0},

        "like": "이트레이너를 좋아하는 유저수" {타입: Number, default: 0},

        "phone_Number" : "폰 번호", {타입: String, 필수: true},

        "profile_img: "프로필 이미지",{타입: String, default: "http://ptme.co.kr/upload/profile/default"},

        "money_per_one: "한번에 얼마드는지", {타입: String}

        "token" : "토큰" {타입: String},

    },

---------------------------------------

## Service center

    {

        "title" : "문의 제목", {타입: String},

        "date" : "문의 날짜", {타입: String},

        "index" : "문의 내용", {타입: String},

        "comment" : "문의 댓글", {타입: String},

        "token" : "문의 글 주인 토큰", {타입: String},

        "answer": {

          "title": "제목", {타입: String}

          "content": "본문", {타입: String}

          "date": "올린 날짜", {타입: Date인데 String으로 보네도됨}

          "img": "이미지", {타입: String}

        }

        "img": "이미지" {타입: String}
    }

---------------------------------------

## notification

    {

        "title" : "문의 제목", {타입: String},

        "date" : "문의 날짜", {타입: String},

        "index" : "문의 내용", {타입: String},

    }

---------------------------------------

## matching

    {

        "user_id": "매칭   요청 유저 아이디", {타입: String},

        "cata": "매칭 카테고리",{"카테고리": String},

        "location":{ //지역

          "si": "시" {타입: String},

          "gu": "구" {타입: String},

          "dong": "동", {타입: String},

        },

        "wont_cnt": "원하는 횟수" {타입: Number},

        "summary": "내용" {타입: String},

        "photo": "포토" {타입: String},

        "money": "원하는 1회 금액" {"타입": String},

    }
