export interface Auto {
    id: number;
    marca: string;
    modelo: string;
    anio: number;
    precio: number;
  }

  export interface CreateAutoDto {
    marca: string;
    modelo: string;
    anio: number;
    precio: number;
  }
  
  export interface UpdateAutoDto extends CreateAutoDto {
    id: number;
  }
  
  export type AutoDto = Auto;
  