export class Node {
  constructor(
    public id: number,
    public name: string,
    public parents: [],
    public partners: [],
    public children: [],
    public surname?: string,
    public gender?: string,
    public birthDate?: string,
    public isLiving?: true,
    public email?: string,
    public phone?: string,
    public livingPlace?: string,
    public profession?: string
  ) {}
}
