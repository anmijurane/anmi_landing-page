const _$ = <T extends HTMLElement>(selector: string) => document.querySelector<T>(selector);

const _$All = <T extends Element>(selector: string) => document.querySelectorAll<T>(selector);

export { _$, _$All };
