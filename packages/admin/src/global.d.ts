// scss 스타일 파일 모듈로 사용하기 설정
// src/global.d.ts
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
