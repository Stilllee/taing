module.exports = {
  printWidth: 80, // 한 줄 최대 문자 수
  tabWidth: 2, // 들여쓰기 시, 탭 너비
  useTabs: false, // 스페이스 대신 탭 사용 X
  semi: true, // 문장 끝 세미콜론 사용
  singleQuote: true, // 작은 따옴표 사용
  trailingComma: 'all', // 모든 곳에 꼬리 콤마 사용 (코드 변경 시 diff 최소화)
  bracketSpacing: true, // 중괄호 내에 공백 사용 (가독성 향상)
  arrowParens: 'avoid', // 단일 인자 화살표 함수 시 괄호 생략 (간결함)
  proseWrap: 'never', // 마크다운 포매팅 제외 (특별한 요구사항이 없으면 유지)
  endOfLine: 'auto', // 개행문자 유지 (다양한 OS에서의 혼란 방지)
};
