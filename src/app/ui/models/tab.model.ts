import { Content } from '@angular/compiler/src/render3/r3_ast';

export interface Tab{
    seq: number,
    tabId: number,
    tabName: string,
    contents: Array<Content>
}