export interface HanjaSpec {
  h: string; // 한자. 한 글자만 가능하다.
  mean: string | string[]; // 한자 뜻과 음
  jmean?: string; // 일본어 훈독
  jsound?: string; // 일본어 음독
}
