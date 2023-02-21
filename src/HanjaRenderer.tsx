/* eslint-disable @typescript-eslint/no-unused-vars */
import { Fragment, h } from 'preact';

interface HanjaInfo {
  h: string; // 한자. 한 글자만 가능하다.
  mean: string | string[]; // 한자 뜻과 음
  jmean?: string; // 일본어 훈독
  jsound?: string; // 일본어 음독
}

export default function HanjaRenderer({ props }: { props: { id: number; source: HanjaInfo } }): h.JSX.Element {
  const BORDER_STYLE = '2px solid #3d3d3d';
  const { source } = props;
  return (
    <Fragment>
      <div
        className="__hanja-flex __hanja-items-center __hanja-justify-start __hanja-h-40 __hanja-rounded __hanja-select-none"
        style={{ border: BORDER_STYLE }}
      >
        <div
          className="__hanja-w-40 __hanja-h-full __hanja-leading-none __hanja-text-[150px] __hanja-flex __hanja-items-center __hanja-justify-center __hanja-pb-5"
          style={{ borderRight: BORDER_STYLE }}
        >
          {source.h}
        </div>
        <div className="__hanja-flex __hanja-flex-col __hanja-items-start __hanja-justify-start __hanja-h-full __hanja-flex-1">
          <div className="__hanja-flex __hanja-flex-col __hanja-items-start __hanja-justify-between __hanja-w-full __hanja-h-full">
            <div
              className="__hanja-w-full __hanja-flex __hanja-px-2 __hanja-py-1 __hanja-text-lg __hanja-font-bold leading-none __hanja-text-rose-600"
              style={{ borderBottom: BORDER_STYLE }}
            >
              뜻
            </div>
            <div className="__hanja-w-full __hanja-flex-1 __hanja-p-2 __hanja-flex __hanja-items-start __hanja-justify-start __hanja-gap-2 __hanja-flex-wrap">
              {Array.isArray(source.mean) ? (
                source.mean.map(m => (
                  <span key={m} className="__hanja-rounded-2xl __hanja-px-3" style={{ border: BORDER_STYLE }}>
                    {m}
                  </span>
                ))
              ) : (
                <span className="__hanja-rounded-2xl __hanja-px-3" style={{ border: BORDER_STYLE }}>
                  {source.mean}
                </span>
              )}
            </div>
            {(source.jmean || source.jsound) && (
              <div
                className="__hanja-w-full __hanja-flex __hanja-items-center __hanja-justify-between"
                style={{ borderTop: BORDER_STYLE }}
              >
                {source.jmean && (
                  <div
                    className="__hanja-flex-1 __hanja-flex __hanja-items-center __hanja-justify-start __hanja-gap-4 __hanja-px-2 __hanja-py-1"
                    style={{ borderRight: source.jsound ? BORDER_STYLE : 'none' }}
                  >
                    <span className="__hanja-text-lg __hanja-font-bold leading-none __hanja-text-rose-600">훈독</span>
                    <span>{source.jmean}</span>
                  </div>
                )}
                {source.jsound && (
                  <div className="__hanja-flex-1 __hanja-flex __hanja-items-center __hanja-justify-start __hanja-gap-4 __hanja-px-2 __hanja-py-1">
                    <span className="__hanja-text-lg __hanja-font-bold leading-none __hanja-text-rose-600">음독</span>
                    <span>{source.jsound}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
