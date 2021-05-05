export class Node {
  public partners;
  public children;

  constructor(
    public id: number,
    public name: string,
    public parents: [],
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
