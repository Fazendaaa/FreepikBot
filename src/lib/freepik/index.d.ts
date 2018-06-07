import { MinimumInfo } from '../../index';
import { FreepikElement } from 'freepik-scrapping';

export interface FetchContext {
    message: string;
    translate: any;
    page: number;
}

export interface FetchResponse extends MinimumInfo {}

export interface FreepikToResponseContext extends FreepikElement {
    translate: any;
}
