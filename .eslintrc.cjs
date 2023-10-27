module.exports = {
  root: true, // 이 설정 파일을 프로젝트의 루트로 인식
  env: { browser: true, es2020: true }, // 브라우저 환경과 ES2020 문법 지원
  extends: [
    'eslint:recommended', // ESLint 기본 규칙
    'plugin:@typescript-eslint/recommended', // TypeScript 규칙
    'plugin:react/recommended', // React 규칙
    'plugin:react-hooks/recommended', // React Hooks 규칙
    'prettier', // Prettier 규칙
    'plugin:prettier/recommended', // Prettier와 ESLint 통합 규칙
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'], // 무시할 파일/폴더 패턴
  parser: '@typescript-eslint/parser', // TypeScript 파서 사용
  plugins: [
    'react',
    'react-hooks',
    'react-refresh',
    '@typescript-eslint',
    'prettier',
  ], // 사용할 플러그인 목록
  rules: {
    'prettier/prettier': 'error', // Prettier 오류를 에러로 처리
    'react-hooks/rules-of-hooks': 'error', // React Hooks 규칙을 에러로 처리
    'react-hooks/exhaustive-deps': 'warn', // 의존성 배열의 누락/불필요한 의존성을 경고
    'react/no-unknown-property': ['error', { ignore: ['fetchPriority'] }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }, // 컴포넌트 내보내기에 대한 경고, 상수 내보내기 허용
    ],
    camelcase: 'error', // camelCase 강제
    'prefer-arrow-callback': 'error', // 화살표 함수 강제
    'no-var': 'error', // var 키워드 사용 금지

    /* React 17 이상에서는 새로운 JSX Transform으로 인해
    JSX를 사용할 때 'React'를 더 이상 가져올(import) 필요가 없다.
    아래는 ESLint가 'React'의 범위 내 가져오기를 필요로 하지 않도록 한다. */
    'react/jsx-uses-react': 'off', // JSX에서 React를 사용하는 것을 강제하지 않음
    'react/react-in-jsx-scope': 'off', // JSX 범위에서 React를 가져오는 것을 강제하지 않음
  },
  settings: {
    react: {
      version: 'detect', // 설치된 React 버전 자동 감지
    },
  },
};
