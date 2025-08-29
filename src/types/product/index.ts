export type Product = {
  id: number
  name: string
  photos: number[]
  parameter: {
    botanicalName: string
    grade: string
    spec: string
  }
  slogan: string
  description: string
}

export type ProductArray = Product[]
