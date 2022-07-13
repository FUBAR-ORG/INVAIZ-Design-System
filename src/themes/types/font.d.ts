import type { SerializedStyles } from '@emotion/react';

export interface IFontSize {
  size64: number;
  size48: number;
  size40: number;
  size32: number;
  size28: number;
  size24: number;
  size20: number;
  size18: number;
  size16: number;
  size14: number;
  size12: number;
  size10: number;
  size8: number;
}

export interface ILineHeight {
  height40: number;
  height32: number;
  height26: number;
  height22: number;
  height18: number;
  height14: number;
  height11: number;
}

export interface IFontWeight {
  light: number;
  regular: number;
  medium: number;
  semiBold: number;
  bold: number;
}

/**
 * font size, weight 등의 정보 접근자
 */
export interface IFont {
  /**
   * 인바이즈의 시그니처 서체로, 특별한 경우에만 사용합니다.
   * 인바이즈의 제품 이름이나 일부 제목을 강조할 때 사용합니다.
   *
   * ## Title 1
   * `64px`
   */
  invaizTitle1: SerializedStyles;
  /**
   * 인바이즈의 시그니처 서체로, 특별한 경우에만 사용합니다.
   * 인바이즈의 제품 이름이나 일부 제목을 강조할 때 사용합니다.
   *
   * ## Title 2
   * `40px`
   */
  invaizTitle2: SerializedStyles;
  /**
   * 인바이즈의 시그니처 서체로, 특별한 경우에만 사용합니다.
   * 인바이즈의 제품 이름이나 일부 제목을 강조할 때 사용합니다.
   *
   * ## Title 3
   * `32px`
   */
  invaizTitle3: SerializedStyles;
  /**
   * 인바이즈의 시그니처 서체로, 특별한 경우에만 사용합니다.
   * 인바이즈의 제품 이름이나 일부 제목을 강조할 때 사용합니다.
   *
   * ## Title 4
   * `24px`
   */
  invaizTitle4: SerializedStyles;
  /**
   * 인바이즈의 시그니처 서체로, 특별한 경우에만 사용합니다.
   * 인바이즈의 제품 이름이나 일부 제목을 강조할 때 사용합니다.
   *
   * ## Title 5
   * `20px`
   */
  invaizTitle5: SerializedStyles;

  /**
   * 가장 범용성 있게 사용하는 서체로, 제목, 부제목, 본문 등에 사용에 제한이 없으며, 특별한 경우가 아니라면 KopubWorldDotum를 사용합니다.
   * 세 가지 타입 중 `light`는 거의 사용하지 않습니다.
   *
   * ## Title 1
   * - Desktop: `48px`, `Bold`
   * - Tablet: `32px`, `Bold`
   * - Mobile: `24px`, `Bold`
   */
  kopubTitle1: SerializedStyles;
  /**
   * 가장 범용성 있게 사용하는 서체로, 제목, 부제목, 본문 등에 사용에 제한이 없으며, 특별한 경우가 아니라면 KopubWorldDotum를 사용합니다.
   * 세 가지 타입 중 `light`는 거의 사용하지 않습니다.
   *
   * ## Title 2
   * - Desktop: `40px`, `Bold`
   * - Tablet: `20px`, `Bold`
   * - Mobile: `20px`, `Bold`
   */
  kopubTitle2: SerializedStyles;
  /**
   * 가장 범용성 있게 사용하는 서체로, 제목, 부제목, 본문 등에 사용에 제한이 없으며, 특별한 경우가 아니라면 KopubWorldDotum를 사용합니다.
   * 세 가지 타입 중 `light`는 거의 사용하지 않습니다.
   *
   * ## Title 3
   * - Desktop: `32px`, `Bold`
   * - Tablet: `18px`, `Medium`
   * - Mobile: `18px`, `Medium`
   */
  kopubTitle3: SerializedStyles;
  /**
   * 가장 범용성 있게 사용하는 서체로, 제목, 부제목, 본문 등에 사용에 제한이 없으며, 특별한 경우가 아니라면 KopubWorldDotum를 사용합니다.
   * 세 가지 타입 중 `light`는 거의 사용하지 않습니다.
   *
   * ## SubTitle 1
   * - Desktop: `24px`, `Bold`
   * - Tablet: `16px`, `Bold`
   * - Mobile: `20px`, `Bold`
   */
  kopubSubT1: SerializedStyles;
  /**
   * 가장 범용성 있게 사용하는 서체로, 제목, 부제목, 본문 등에 사용에 제한이 없으며, 특별한 경우가 아니라면 KopubWorldDotum를 사용합니다.
   * 세 가지 타입 중 `light`는 거의 사용하지 않습니다.
   *
   * ## SubTitle 2
   * - Desktop: `24px`, `Medium`
   * - Tablet: `14px`, `Bold`
   * - Mobile: `20px`, `Medium`
   */
  kopubSubT2: SerializedStyles;
  /**
   * 가장 범용성 있게 사용하는 서체로, 제목, 부제목, 본문 등에 사용에 제한이 없으며, 특별한 경우가 아니라면 KopubWorldDotum를 사용합니다.
   * 세 가지 타입 중 `light`는 거의 사용하지 않습니다.
   *
   * ## SubTitle 3
   * - Desktop: `20px`, `Bold`
   * - Tablet: `14px`, `Medium`
   * - Mobile: `16px`, `Bold`
   */
  kopubSubT3: SerializedStyles;
  /**
   * 가장 범용성 있게 사용하는 서체로, 제목, 부제목, 본문 등에 사용에 제한이 없으며, 특별한 경우가 아니라면 KopubWorldDotum를 사용합니다.
   * 세 가지 타입 중 `light`는 거의 사용하지 않습니다.
   *
   * ## Contents 1
   * - Desktop: `24px, Medium
   * - Tablet: 16px, Bold
   * - Mobile: 16px, Bold
   */
  kopubContents1: SerializedStyles;
  /**
   * 가장 범용성 있게 사용하는 서체로, 제목, 부제목, 본문 등에 사용에 제한이 없으며, 특별한 경우가 아니라면 KopubWorldDotum를 사용합니다.
   * 세 가지 타입 중 `light`는 거의 사용하지 않습니다.
   *
   * ## Contents 2
   * - Desktop: 20px, Medium
   * - Tablet: 16px, Medium
   * - Mobile: 16px, Medium
   */
  kopubContents2: SerializedStyles;
  /**
   * 가장 범용성 있게 사용하는 서체로, 제목, 부제목, 본문 등에 사용에 제한이 없으며, 특별한 경우가 아니라면 KopubWorldDotum를 사용합니다.
   * 세 가지 타입 중 `light`는 거의 사용하지 않습니다.
   *
   * ## Contents 3
   * - Desktop: 16px, Medium
   * - Tablet: 32px, Bold
   * - Mobile: 24px, Bold
   */
  kopubContents3: SerializedStyles;
  /**
   * 가장 범용성 있게 사용하는 서체로, 제목, 부제목, 본문 등에 사용에 제한이 없으며, 특별한 경우가 아니라면 KopubWorldDotum를 사용합니다.
   * 세 가지 타입 중 `light`는 거의 사용하지 않습니다.
   *
   * Title 1
   * - Desktop: 48px, Bold
   * - Tablet: 32px, Bold
   * - Mobile: 24px, Bold
   */
  kopubContents4: SerializedStyles;
  /**
   * 가장 범용성 있게 사용하는 서체로, 제목, 부제목, 본문 등에 사용에 제한이 없으며, 특별한 경우가 아니라면 KopubWorldDotum를 사용합니다.
   * 세 가지 타입 중 `light`는 거의 사용하지 않습니다.
   *
   * Title 1
   * - Desktop: 48px, Bold
   * - Tablet: 32px, Bold
   * - Mobile: 24px, Bold
   */
  kopubContents5: SerializedStyles;
  /**
   * 가장 범용성 있게 사용하는 서체로, 제목, 부제목, 본문 등에 사용에 제한이 없으며, 특별한 경우가 아니라면 KopubWorldDotum를 사용합니다.
   * 세 가지 타입 중 `light`는 거의 사용하지 않습니다.
   *
   * Title 1
   * - Desktop: 48px, Bold
   * - Tablet: 32px, Bold
   * - Mobile: 24px, Bold
   */
  kopubContents6: SerializedStyles;
  /**
   * 가장 범용성 있게 사용하는 서체로, 제목, 부제목, 본문 등에 사용에 제한이 없으며, 특별한 경우가 아니라면 KopubWorldDotum를 사용합니다.
   * 세 가지 타입 중 `light`는 거의 사용하지 않습니다.
   *
   * Title 1
   * - Desktop: 48px, Bold
   * - Tablet: 32px, Bold
   * - Mobile: 24px, Bold
   */
  kopubContents7: SerializedStyles;
  /**
   * 가장 범용성 있게 사용하는 서체로, 제목, 부제목, 본문 등에 사용에 제한이 없으며, 특별한 경우가 아니라면 KopubWorldDotum를 사용합니다.
   * 세 가지 타입 중 `light`는 거의 사용하지 않습니다.
   *
   * Title 1
   * - Desktop: 48px, Bold
   * - Tablet: 32px, Bold
   * - Mobile: 24px, Bold
   */
  kopubSmall: SerializedStyles;
  /**
   * 가장 범용성 있게 사용하는 서체로, 제목, 부제목, 본문 등에 사용에 제한이 없으며, 특별한 경우가 아니라면 KopubWorldDotum를 사용합니다.
   * 세 가지 타입 중 `light`는 거의 사용하지 않습니다.
   *
   * Title 1
   * - Desktop: 48px, Bold
   * - Tablet: 32px, Bold
   * - Mobile: 24px, Bold
   */
  kopubMicro: SerializedStyles;

  notoSansTitle1: SerializedStyles;
  notoSansTitle2: SerializedStyles;
  notoSansTitle3: SerializedStyles;
  notoSansTitle4: SerializedStyles;
  notoSansContents1: SerializedStyles;
  notoSansContents2: SerializedStyles;
  notoSansContents3: SerializedStyles;
  notoSansContents4: SerializedStyles;
}
