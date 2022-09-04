export const memoMock = {
  nextMemoId: 3,
  byId: {
    memo1: {
      id: "memo1",
      title: "과제하기",
      body: "메모 앱 만들기",
      timeStamp: "2022-09-01 14:05:23"
    },
    memo2: {
      id: "memo2",
      title: "백엔드 예습",
      body: "Poeima 백엔드강의 살펴보기",
      timeStamp: "2022-09-02 08:15:46"
    }
  },
  allIds: ["memo1", "memo2"],
  isLoading: false,
  isError: false
}

export const usersMock = {
  byId: {
    user1: {
      id: "user1",
      login: "tmhw",
      name: "안형우",
      email: "rktnsinger@gmail.com",
      profile: ""
    },
    user2: {
      id: "user2",
      login: "soobin-c",
      name: "이수빈",
      email: "esoobin96@naver.com",
      profile: ""
    },
  },
  allIds: ["user1", "user2"]
};
