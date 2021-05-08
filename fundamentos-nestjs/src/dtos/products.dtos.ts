/* eslint-disable prettier/prettier */
export class CreateProductDto {
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly image: string;
  readonly stock: number;
}

export class UpdateProductDto{
  readonly id?: number;
  readonly name?: string;
  readonly description?: string;
  readonly price?: number;
  readonly image?: string;
  readonly stock?: number;
}
